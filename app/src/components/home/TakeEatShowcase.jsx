import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from '../Icon'
import { Reveal, SectionHeader } from '../primitives'
import restaurants from '../../data/restaurants.json'
import retail from '../../data/retail.json'

const flow = [
    { icon: 'users', label: 'לקוח' },
    { icon: 'layers', label: 'תפריט / קטלוג' },
    { icon: 'package', label: 'סל' },
    { icon: 'shieldCheck', label: 'תשלום' },
    { icon: 'monitor', label: 'הזמנה מגיעה לעסק' },
    { icon: 'settings', label: 'ניהול הזמנה' },
    { icon: 'truck', label: 'משלוח / איסוף' },
    { icon: 'checkCircle', label: 'הזמנה הושלמה' },
]

const chips = ['תפריט / קטלוג', 'סל', 'תשלום', 'ניהול הזמנות', 'משלוח / איסוף', 'מערכת עסקית', 'PWA / אפליקציה']

const clientLogos = [
    ...restaurants.map((c) => ({ name: c.name, logo: c.logo })),
    ...retail.map((c) => ({ name: c.name, logo: c.logo })),
    { name: 'הצרפתייה הקטנה', logo: '/images/le-france/logo-green.png' },
]

function FlowNode({ icon, label, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2"
        >
            <span className="glass grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-accent-2 shadow-lg sm:h-16 sm:w-16">
                <Icon name={icon} size={22} />
            </span>
            <span className="max-w-[5.5rem] text-center text-[11px] font-semibold leading-tight text-white/75 sm:text-xs">
                {label}
            </span>
        </motion.div>
    )
}

export default function TakeEatShowcase() {
    return (
        <section id="takeeat" className="relative py-28 md:py-40">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-1/2 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.12),transparent_65%)]" />
            </div>
            <div className="relative mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="המוצר המרכזי"
                    title="TakeEat"
                    description="מערכת הזמנות שמחברת בין לקוח לעסק בזמן אמת — התחילה במסעדות, ומתרחבת לפלטפורמה שמאפשרת גם לעסקים נוספים למכור מוצרים ישירות ללקוחות."
                />

                <div className="relative mx-auto max-w-5xl">
                    <div
                        className="pointer-events-none absolute inset-x-6 top-7 hidden h-px bg-gradient-to-l from-transparent via-white/15 to-transparent sm:top-8 lg:block"
                        aria-hidden="true"
                    />
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4">
                        {flow.map((node, i) => (
                            <FlowNode key={node.label} icon={node.icon} label={node.label} index={i} />
                        ))}
                    </div>
                </div>

                <Reveal delay={0.2} className="mt-14 flex flex-wrap justify-center gap-2.5">
                    {chips.map((chip) => (
                        <span key={chip} className="glass rounded-full px-4 py-2 text-sm font-semibold text-white/80">
                            {chip}
                        </span>
                    ))}
                </Reveal>

                <Reveal delay={0.3}>
                    <p className="mt-10 flex items-center justify-center gap-2 text-center text-lg font-semibold text-accent-2">
                        <span className="h-2 w-2 rounded-full bg-accent live-dot" />
                        פעילה כיום עם עסקים אמיתיים
                    </p>
                </Reveal>

                <Reveal delay={0.4} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
                    {clientLogos.map((client) => (
                        <img
                            key={client.name}
                            src={client.logo}
                            alt={client.name}
                            loading="lazy"
                            className="h-10 w-10 rounded-xl object-cover opacity-80 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                        />
                    ))}
                </Reveal>

                <Reveal delay={0.5} className="mt-14 text-center">
                    <Link
                        to="/takeeat"
                        className="btn-glow inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-accent to-accent-2 px-8 py-4 text-base font-bold text-ink"
                    >
                        <Icon name="external" size={19} />
                        לצפייה ב-TakeEat
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
