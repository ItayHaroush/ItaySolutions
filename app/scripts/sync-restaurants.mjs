/**
 * מושך את לוגואי המסעדות והחנויות הפעילות מ-ChefSync/TakeEat, מוריד אותם
 * מקומית, מושך גם כמה תמונות פריטים אמיתיות לכל עסק (לאפקט "כדור הבדולח"
 * בהובר), ומייצר את app/src/data/restaurants.json + app/src/data/retail.json.
 *
 * הרצה: npm run sync:restaurants
 *
 * ה-API מחזיר רק עסקים מאושרים, לא-דמו ועם מנוי פעיל, כך שאין צורך
 * בסינון נוסף כאן.
 */
import { execFileSync } from 'node:child_process'
import { createHash } from 'node:crypto'
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const API_URL = 'https://api.chefsync.co.il/api/public/landing-partners'
const MENU_API_URL = 'https://api.chefsync.co.il/api/menu'
const SITE_URL = 'https://www.takeeat.co.il'
const MAX_LOGO_PX = 256
const MAX_MENU_PHOTO_PX = 320
const MAX_MENU_PHOTOS = 4

const root = path.resolve(fileURLToPath(import.meta.url), '../..')

/** חלק מהעסקים מוסיפים תווים דקורטיביים לשם ("| Lemlem | אוכל אתיופי"). */
function cleanName(name) {
    return name.replace(/[|·•]/g, ' ').replace(/\s+/g, ' ').trim()
}

async function downloadImage(url, dir, fileName, maxPx) {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const filePath = path.join(dir, fileName)
    await writeFile(filePath, Buffer.from(await res.arrayBuffer()))
    try {
        execFileSync('sips', ['-Z', String(maxPx), filePath], { stdio: 'ignore' })
    } catch {
        // sips קיים רק ב-macOS; בלעדיו פשוט שומרים את הקובץ כמו שהוא
    }
    return filePath
}

async function downloadLogo(url, slug, logosDir, publicPrefix) {
    const ext = (path.extname(new URL(url).pathname) || '.png').toLowerCase()
    const fileName = `${slug}${ext}`
    await downloadImage(url, logosDir, fileName, MAX_LOGO_PX)
    return { publicPath: `${publicPrefix}/${fileName}`, fileName }
}

/** מוריד תמונת פריט אמיתית, ממיר תמיד ל-JPEG מכווץ (חלק מספקי התמונות
 *  מגישים webp שה-sips לא תמיד יודע לכווץ באתר) ומחזיר גם hash לזיהוי
 *  כפילויות תוכן (אותה תמונת מלאי מוצמדת ליותר מפריט אחד). */
async function downloadItemPhoto(url, dir, fileName) {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const buf = Buffer.from(await res.arrayBuffer())
    const hash = createHash('sha1').update(buf).digest('hex')

    const srcExt = (path.extname(new URL(url).pathname) || '.jpg').toLowerCase()
    const srcPath = path.join(dir, `${fileName}.src${srcExt}`)
    const jpgPath = path.join(dir, `${fileName}.jpg`)
    await writeFile(srcPath, buf)

    try {
        execFileSync('sips', ['-s', 'format', 'jpeg', '-Z', String(MAX_MENU_PHOTO_PX), srcPath, '--out', jpgPath], { stdio: 'ignore' })
        await rm(srcPath)
        return { fileName: `${fileName}.jpg`, hash }
    } catch {
        // sips נכשל/לא זמין — משאירים את הקובץ המקורי כמו שהוא
        const finalName = `${fileName}${srcExt}`
        await writeFile(path.join(dir, finalName), buf)
        await rm(srcPath).catch(() => {})
        return { fileName: finalName, hash }
    }
}

/** שולף עד MAX_MENU_PHOTOS תמונות פריט אמיתיות מהתפריט/קטלוג הפומבי של
 *  העסק (כדור הבדולח בהובר) — מפזר בין קטגוריות כדי לא להביא רק פריט
 *  אחד, ומדלג על תמונות שכבר הופיעו (אותה תמונת מלאי על כמה פריטים). */
async function downloadMenuPhotos(tenantId, slug, photosDir, publicPrefix) {
    const res = await fetch(MENU_API_URL, { headers: { 'X-Tenant-ID': tenantId } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    const body = await res.json()
    const categories = Array.isArray(body?.data) ? body.data : []

    const candidates = []
    let round = 0
    while (candidates.length < MAX_MENU_PHOTOS * 3) {
        let addedThisRound = false
        for (const category of categories) {
            const item = (category.items || [])[round]
            if (item?.image_url && !candidates.some((c) => c.image_url === item.image_url)) {
                candidates.push(item)
                addedThisRound = true
            }
        }
        if (!addedThisRound) break
        round += 1
    }

    const photos = []
    const seenHashes = new Set()
    for (const item of candidates) {
        if (photos.length >= MAX_MENU_PHOTOS) break
        const { fileName, hash } = await downloadItemPhoto(item.image_url, photosDir, `${slug}-${photos.length + 1}`)
        if (seenHashes.has(hash)) {
            await rm(path.join(photosDir, fileName))
            continue
        }
        seenHashes.add(hash)
        photos.push(`${publicPrefix}/${fileName}`)
    }
    return photos
}

/**
 * מסנכרן קבוצת עסקים אחת (מסעדות/חנויות) מה-API לקובץ JSON מקומי + תמונות.
 * מחזיר את מספר העסקים שנשמרו, או null אם דולג (0 תוצאות מה-API).
 */
async function syncGroup({ label, apiUrl, logosDirName, dataFileName, hrefFor, requireResults }) {
    console.log(`\n↓ ${label}: ${apiUrl}`)
    const res = await fetch(apiUrl)
    if (!res.ok) throw new Error(`API returned HTTP ${res.status}`)

    const body = await res.json()
    const partners = body?.data
    if (!body?.success || !Array.isArray(partners)) {
        throw new Error('תשובה לא צפויה מה-API')
    }
    if (partners.length === 0) {
        if (requireResults) throw new Error(`ה-API החזיר 0 ${label} — לא דורסים את הנתונים הקיימים`)
        console.warn(`  ⚠ ה-API החזיר 0 ${label} — מדלג, לא נוגע בנתונים הקיימים`)
        return null
    }

    const logosDir = path.join(root, 'public/images', logosDirName)
    const photosDir = path.join(root, 'public/images/menu-preview')
    const dataFile = path.join(root, 'src/data', dataFileName)
    const logoPrefix = `/images/${logosDirName}`
    const photoPrefix = '/images/menu-preview'

    await mkdir(logosDir, { recursive: true })
    await mkdir(photosDir, { recursive: true })
    await mkdir(path.dirname(dataFile), { recursive: true })

    const entries = []
    const keepLogos = new Set()
    const keepPhotos = new Set()

    for (const partner of partners) {
        const slug = partner.slug || partner.tenant_id
        if (!slug || !partner.logo_url) {
            console.warn(`  ⚠ מדלג על "${partner.name}" — חסר slug או לוגו`)
            continue
        }

        try {
            const { publicPath, fileName } = await downloadLogo(partner.logo_url, slug, logosDir, logoPrefix)
            keepLogos.add(fileName)

            let menuPhotos = []
            try {
                menuPhotos = await downloadMenuPhotos(partner.tenant_id, slug, photosDir, photoPrefix)
                menuPhotos.forEach((p) => keepPhotos.add(path.basename(p)))
            } catch (menuErr) {
                console.warn(`    ⚠ אין תמונות פריטים ל-"${partner.name}": ${menuErr.message}`)
            }

            entries.push({
                id: partner.id,
                name: cleanName(partner.name),
                slug,
                tenantId: partner.tenant_id,
                logo: publicPath,
                href: hrefFor(slug, partner.tenant_id),
                menuPhotos,
            })
            console.log(`  ✓ ${partner.name.trim()} → ${publicPath} (${menuPhotos.length} תמונות)`)
        } catch (err) {
            console.warn(`  ⚠ נכשלה הורדת הלוגו של "${partner.name}": ${err.message}`)
        }
    }

    if (entries.length === 0) {
        if (requireResults) throw new Error(`לא הורד אף לוגו עבור ${label} — לא דורסים את הנתונים הקיימים`)
        console.warn(`  ⚠ לא הורד אף לוגו עבור ${label} — מדלג`)
        return null
    }

    // ניקוי לוגואים ששייכים לעסקים שכבר לא ברשימה (לכל קבוצה תיקייה משלה)
    for (const file of await readdir(logosDir)) {
        if (!keepLogos.has(file)) {
            await rm(path.join(logosDir, file))
            console.log(`  – הוסר ${file}`)
        }
    }

    await writeFile(dataFile, `${JSON.stringify(entries, null, 4)}\n`)
    console.log(`✓ ${entries.length} ${label} נשמרו ל-src/data/${dataFileName}`)
    return { count: entries.length, photosDir, keepPhotos }
}

async function main() {
    const results = await Promise.all([
        syncGroup({
            label: 'מסעדות',
            apiUrl: API_URL,
            logosDirName: 'restaurants',
            dataFileName: 'restaurants.json',
            hrefFor: (slug) => `${SITE_URL}/r/${slug}`,
            requireResults: true,
        }),
        syncGroup({
            label: 'חנויות',
            apiUrl: `${API_URL}?business_type=store`,
            logosDirName: 'retail',
            dataFileName: 'retail.json',
            hrefFor: (slug, tenantId) => `${SITE_URL}/${tenantId}/menu`,
            requireResults: false,
        }),
    ])

    // תמונות הפריטים של כל הקבוצות חיות באותה תיקייה משותפת (menu-preview).
    // מנקים אותה רק אם כל הקבוצות רצו בהצלחה הפעם — אחרת אין דרך להבחין
    // בין "תמונה יתומה" לבין "שייכת לקבוצה שדולגה", ועדיף להשאיר קבצים
    // ישנים מאשר למחוק בטעות תמונות של קבוצה שנכשלה/דילגה.
    if (results.every(Boolean)) {
        const photosDir = results[0].photosDir
        const keepAll = new Set(results.flatMap((g) => [...g.keepPhotos]))
        for (const file of await readdir(photosDir)) {
            if (!keepAll.has(file)) {
                await rm(path.join(photosDir, file))
                console.log(`  – הוסר ${file}`)
            }
        }
    } else {
        console.warn('\n⚠ קבוצה אחת לפחות דולגה — לא מנקים את menu-preview/ הפעם כדי לא למחוק תמונות בטעות')
    }
}

main().catch((err) => {
    console.error(`\n✗ ${err.message}`)
    process.exit(1)
})
