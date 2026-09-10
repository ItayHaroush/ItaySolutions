import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../Icon'
import { Reveal, SectionHeader } from '../primitives'

const features = ['CRM', 'לקוחות', 'הצעות מחיר', 'פרויקטים', 'משימות', 'מסמכים', 'דף עסקי']

export default function BuildixShowcase() {
    return (
        <section id="buildix" className="relative py-24 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="המוצר השני"
                    title="Buildix"
                    description="מערכת לניהול עסק במקום אחד — לקוחות, הצעות מחיר, פרויקטים, מסמכים ותהליכי עבודה."
                />

                <Reveal>
                    <div className="card-premium mx-auto flex max-w-3xl flex-col items-center gap-6 p-8 text-center">
                        <img
                            src="/images/buildixLogo.png"
                            alt="Buildix"
                            loading="lazy"
                            className="w-40 rounded-2xl shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]"
                        />
                        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3.5 py-1.5 text-xs font-bold tracking-wide text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-dot" />
                            מוצר עסקי פעיל שנמצא בשימוש אמיתי
                        </span>
                        <div className="flex flex-wrap justify-center gap-2.5">
                            {features.map((feature, i) => (
                                <motion.span
                                    key={feature}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                                    className="glass rounded-full px-4 py-2 text-sm font-semibold text-white/80"
                                >
                                    {feature}
                                </motion.span>
                            ))}
                        </div>
                        <Link
                            to="/buildix"
                            className="btn-glow mt-2 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-accent to-accent-2 px-7 py-3.5 text-base font-bold text-ink"
                        >
                            <Icon name="external" size={18} />
                            לצפייה ב-Buildix
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
