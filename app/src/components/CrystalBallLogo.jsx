import { useState } from 'react'
import Icon from './Icon'

/* מעבירים הובר על הלוגו → נפתחת מעליו רשת של משושים (hex grid) עם כל
   תמונות התפריט/החנות בבת אחת — לא סבב אחת-אחת בכדור עגול. הלוגו עצמו
   נשאר במקומו כל הזמן ולא מוחלף.
   photos = מערך נתיבי תמונות אמיתיות (מ-npm run sync:restaurants). */

const HEX_CLIP = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
const HEX_SIZE = 'h-14 w-14'

function HexTile({ src, delay }) {
    return (
        <div className={`hex-photo mx-1.5 ${HEX_SIZE} overflow-hidden`} style={{ clipPath: HEX_CLIP, animationDelay: `${delay}s` }}>
            <img src={src} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-cover" />
        </div>
    )
}

/* משושה עם נתון מספרי (Case Study) במקום תמונה — לעסקים עם מספרים אמיתיים להציג */
function HexStat({ value, label, delay }) {
    return (
        <div
            className={`hex-photo mx-1.5 ${HEX_SIZE} grid place-items-center bg-gradient-to-br from-accent to-accent-2 p-1 text-center text-ink`}
            style={{ clipPath: HEX_CLIP, animationDelay: `${delay}s` }}
            title={label}
        >
            <span className="text-[11px] font-black leading-none">{value}</span>
        </div>
    )
}

export default function CrystalBallLogo({ logo, name, photos = [], stats = [], size = 'h-24 w-24', fit = 'cover' }) {
    const [active, setActive] = useState(false)
    const hasPhotos = active && photos.length > 0
    const hasStats = active && stats.length > 0
    const isOpen = hasPhotos || hasStats

    const row1 = photos.slice(0, 3)
    const row2 = photos.slice(3, 6)

    return (
        <div className="relative inline-block" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            {/* הלוגו — קבוע במקום, לא נעלם ולא מוחלף. חיתוך עגול, אחיד עם שאר הלוגואים באתר */}
            <div className={`grid ${size} place-items-center overflow-hidden rounded-full bg-white/5`}>
                <img src={logo} alt={name} loading="lazy" width="96" height="96" className={`h-full w-full ${fit === 'contain' ? 'object-contain p-2' : 'object-cover'}`} />
            </div>

            {/* רשת המשושים — נפתחת מעל הלוגו בהובר, כל התמונות (ולעסקי Case Study — גם הנתונים) מוצגות בבת אחת */}
            <div
                className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-4 flex -translate-x-1/2 flex-col items-center transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                    }`}
            >
                {/* פרט אמיתי שקיים לכל העסקים: ה-API מחזיר רק שותפים מאושרים עם מנוי פעיל */}
                <span className="mb-2 inline-flex max-w-[11rem] items-center gap-1.5 whitespace-nowrap rounded-full glass px-3 py-1 text-[11px] font-medium tracking-wide text-accent-2">
                    <Icon name="checkCircle" size={12} />
                    <span className="truncate">{name} · פעיל ב-TakeEat</span>
                </span>
                {hasStats && (
                    <div className="flex">
                        {stats.map((s, i) => (
                            <HexStat key={s.label} value={s.value} label={s.label} delay={i * 0.35} />
                        ))}
                    </div>
                )}
                <div className={hasStats ? 'mt-1.5 flex' : 'flex'}>
                    {row1.map((src, i) => (
                        <HexTile key={src} src={src} delay={(i + stats.length) * 0.35} />
                    ))}
                </div>
                {row2.length > 0 && (
                    <div className="mt-1.5 flex">
                        {row2.map((src, i) => (
                            <HexTile key={src} src={src} delay={(i + row1.length + stats.length) * 0.35} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
