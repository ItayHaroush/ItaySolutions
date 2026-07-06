import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from './Icon'
import { Reveal, SectionHeader } from './primitives'

const clientProjects = [
  {
    id: 'na',
    title: 'NA Construction',
    subtitle: 'עסק בנייה — מנהלים ב-Buildix',
    typeLabel: 'לקוח · Buildix',
    image: '/images/naConstructionLogo.png',
    accent: '#ffb25e',
    challenge: 'ניהול הצעות מחיר, פרויקטים ולקוחות מפוזר בין וואטסאפ, טלפונים וניירת.',
    solution: 'מעבר ל-Buildix — מערכת אחת לניהול העסק, הצעות מחיר, דף עסקי ומעקב לקוחות.',
    result: 'עבודה מסודרת, פחות בלגן, ניהול מקצועי מהטלפון.',
    link: 'https://app.buildix.site/c/na-construction',
    ctaText: 'צפו בדף העסק',
  },
  {
    id: 'bina',
    title: 'בינה לבנייה',
    subtitle: 'אתר תדמית + דף עסקי ב-Buildix',
    typeLabel: 'לקוח · אתר + Buildix',
    image: '/images/fulllogo_nobuffer.jpeg',
    accent: '#35d0ff',
    challenge: 'עסק בנייה בלי נוכחות דיגיטלית מקצועית שמביאה פניות.',
    solution: 'אתר תדמית מותאם מותג + דף עסקי ב-Buildix, SEO ויצירת קשר מהירה.',
    result: 'נוכחות מקצועית ברשת ויותר פניות מגוגל.',
    link: 'https://www.binalb.com/',
    ctaText: 'צפו באתר',
    buildixLink: 'https://app.buildix.site/c/binalb',
  },
  {
    id: 'bar',
    title: 'בר בן אבו',
    subtitle: 'אדריכלות + דף עסקי ב-Buildix',
    typeLabel: 'לקוח · אתר + Buildix',
    image: '/images/barLogo.png',
    accent: '#7c5cff',
    challenge: 'הצגת פרויקטים וזהות מקצועית ברמת סטודיו.',
    solution: 'אתר מינימליסטי עם גלריה + דף עסקי ב-Buildix, UX נקי ומותאם מובייל.',
    result: 'מיתוג דיגיטלי ברמה גבוהה.',
    link: 'https://bar-app-self.vercel.app/',
    ctaText: 'צפו באתר',
    buildixLink: 'https://app.buildix.site/c/bar-ben-abu',
  },
]

const products = [
  {
    id: 'takeeat',
    title: 'TakeEat',
    subtitle: 'פתיחת מסעדה אונליין',
    typeLabel: 'מוצר · SaaS',
    image: '/images/takeEatLogo.png',
    accent: '#35d0ff',
    challenge: 'מסעדות צריכות מערכת הזמנות בלי עלויות גבוהות ומורכבות טכנית.',
    solution: 'פלטפורמת הזמנות, תפריטים, ניהול משלוחים וממשק פשוט.',
    result: 'מסעדה אונליין פעילה תוך ימים, לא חודשים.',
    link: 'https://takeeat.co.il',
    status: 'new',
    ctaText: 'צפו במערכת',
  },
  {
    id: 'appointed',
    title: 'Appointed',
    subtitle: 'מערכת ניהול תורים לעסקים',
    typeLabel: 'מוצר · SaaS',
    image: '/images/appointedCloud.png',
    accent: '#7c5cff',
    challenge: 'עסקים מאבדים לקוחות בגלל תיאום ידני, ביטולים וחוסר תזכורות.',
    solution: 'מערכת תורים אונליין, יומן, תזכורות וניהול לקוחות מהטלפון.',
    result: 'פחות ביטולים, יותר תורים, ניהול פשוט.',
    link: 'https://appointed.cloud',
    status: 'new',
    ctaText: 'צפו במערכת',
  },
]

function trackMouse(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.12} className="h-full">
      <article onMouseMove={trackMouse} className="card-premium group flex h-full flex-col overflow-hidden">
        <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-b from-white/6 to-transparent">
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{ background: `radial-gradient(ellipse at 50% 100%, ${project.accent}22, transparent 65%)` }}
          />
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="relative max-h-28 max-w-[62%] rounded-xl object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          {project.status === 'new' && (
            <span className="absolute right-4 top-4 rounded-full bg-gradient-to-l from-accent to-accent-2 px-3 py-1 text-xs font-bold text-ink shadow-lg">
              חדש
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: project.accent }}>
            {project.typeLabel}
          </span>
          <h3 className="mt-2 text-xl font-bold">{project.title}</h3>
          {project.subtitle && <p className="mt-1 text-sm text-mist">{project.subtitle}</p>}

          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <div>
              <strong className="mb-1 block text-[13px] font-bold text-white/85">אתגר</strong>
              <p className="text-white/55">{project.challenge}</p>
            </div>
            <div>
              <strong className="mb-1 block text-[13px] font-bold text-white/85">פתרון</strong>
              <p className="text-white/55">{project.solution}</p>
            </div>
            {project.result && (
              <div>
                <strong className="mb-1 block text-[13px] font-bold text-white/85">תוצאה</strong>
                <p className="text-white/55">{project.result}</p>
              </div>
            )}
          </div>

          {project.link && project.link !== '#' && (
            <div className="mt-auto flex flex-wrap gap-4 pt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2 transition-colors hover:text-white"
              >
                {project.ctaText || 'צפו בפרויקט'}
                <Icon name="external" size={15} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:-translate-x-0.5" />
              </a>
              {project.buildixLink && (
                <a
                  href={project.buildixLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-white/50 transition-colors hover:text-white"
                >
                  דף ב-Buildix
                  <Icon name="external" size={15} className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:-translate-x-0.5" />
                </a>
              )}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  )
}

function BuildixFeaturedCard() {
  const features = ['הצעות מחיר', 'ניהול פרויקטים', 'מעקב לקוחות', 'יומן עבודה', 'דף עסקי', 'גישה מכל מקום']
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <Reveal>
      <article ref={ref} onMouseMove={trackMouse} className="card-premium mb-10 overflow-hidden">
        <div className="grid items-center gap-10 p-8 md:p-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.18),transparent_70%)] blur-2xl" />
            <motion.img
              style={{ y: yImg }}
              src="/images/buildixLogo.png"
              alt="Buildix"
              loading="lazy"
              className="relative w-52 rounded-3xl shadow-[0_32px_80px_-20px_rgba(0,0,0,0.7)] md:w-64"
            />
          </div>

          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-accent-2">מוצר · מערכת עסקית</span>
            <h3 className="mt-3 text-2xl font-extrabold leading-snug md:text-3xl">
              Buildix — מערכת ניהול לעסקי בנייה ובעלי מקצוע
            </h3>
            <p className="mt-3 text-lg font-semibold text-white/85">🏗️ פחות ניירת. פחות בלגן. יותר עבודה.</p>
            <p className="mt-3 leading-relaxed text-mist">
              Buildix מרכזת הצעות מחיר, פרויקטים, לקוחות, לידים ויומן עבודה במקום אחד.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {features.map((feature, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-2 text-sm font-medium text-white/75"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-2">
                    <Icon name="check" size={12} strokeWidth={2.6} />
                  </span>
                  {feature}
                </motion.li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-white/50">מתאים לקבלנים, שיפוצניקים, אדריכלים ובעלי מקצוע.</p>
            <a
              href="https://www.buildix.site"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-accent to-accent-2 px-7 py-3.5 font-bold text-ink"
            >
              צפו במערכת
              <Icon name="external" size={17} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function FeaturedWork() {
  return (
    <section id="portfolio" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          subtitle="תיק עבודות"
          title="עבודות נבחרות"
          description="פרויקטים אמיתיים לעסקים בישראל — ומערכות שבניתי מאפס"
        />

        <Reveal>
          <h3 className="mb-8 flex items-center gap-3 text-xl font-bold text-white/85">
            <span className="h-px w-8 bg-gradient-to-l from-accent to-transparent" />
            לקוחות
          </h3>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {clientProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <Reveal>
          <h3 className="mb-8 mt-20 flex items-center gap-3 text-xl font-bold text-white/85">
            <span className="h-px w-8 bg-gradient-to-l from-accent to-transparent" />
            מערכות שפיתחתי
          </h3>
        </Reveal>
        <BuildixFeaturedCard />
        <div className="grid gap-6 md:grid-cols-2">
          {products.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
