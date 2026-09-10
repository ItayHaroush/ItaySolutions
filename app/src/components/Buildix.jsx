import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from './Icon'
import CrystalBallLogo from './CrystalBallLogo'
import { Reveal, SectionHeader } from './primitives'
import { BUILDIX_URL } from '../lib/constants'

const features = ['ניהול לקוחות', 'הצעות מחיר', 'ניהול עבודה', 'מסמכים ותהליכים', 'CRM', 'דף עסקי ציבורי']

function trackMouse(e) {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function Buildix() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const yImg = useTransform(scrollYProgress, [0, 1], [40, -40])

    return (
        <section id="buildix" className="relative py-28 md:py-36">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="מוצר נוסף · מערכת עסקית"
                    title="Buildix — מערכת לניהול עסק"
                    description="לא רק לבנייה. מערכת כללית לניהול לקוחות, הצעות מחיר, עבודה ותהליכים — לעסקים מכל סוג"
                />

                <Reveal>
                    <article ref={ref} onMouseMove={trackMouse} className="card-premium overflow-hidden">
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
                                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3.5 py-1.5 text-xs font-bold tracking-wide text-emerald-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-dot" />
                                    בשימוש · פעיל
                                </span>
                                <h3 className="mt-3 text-2xl font-extrabold leading-snug md:text-3xl">
                                    מערכת אחת לניהול העסק — לקוחות, הצעות מחיר ועבודה
                                </h3>
                                <p className="mt-3 leading-relaxed text-mist">
                                    Buildix מרכזת ניהול לקוחות, הצעות מחיר, פרויקטים, מסמכים ותהליכי עבודה במקום אחד —
                                    מתאימה לכל עסק שרוצה לצאת מוואטסאפ, טלפונים וניירת ולעבור למערכת אחת מסודרת.
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

                                <div className="mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                                    <CrystalBallLogo logo="/images/naConstructionLogo.png" name="NA Construction" fit="contain" size="h-10 w-10" />
                                    <div>
                                        <p className="text-sm font-bold text-white/90">NA Construction</p>
                                        <p className="text-xs text-white/50">לקוח משלם שמנהל את העסק שלו ב-Buildix</p>
                                    </div>
                                    <a
                                        href="https://app.buildix.site/c/na-construction"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mr-auto inline-flex items-center gap-1 text-xs font-semibold text-accent-2 hover:text-white"
                                    >
                                        דף העסק
                                        <Icon name="external" size={12} />
                                    </a>
                                </div>

                                <a
                                    href={BUILDIX_URL}
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
            </div>
        </section>
    )
}
