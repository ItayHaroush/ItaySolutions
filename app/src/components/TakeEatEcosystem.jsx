import { motion } from 'framer-motion'
import Icon from './Icon'
import { Reveal, SectionHeader } from './primitives'

const flow = [
    { icon: 'users', label: 'לקוח' },
    { icon: 'smartphone', label: 'אפליקציה / אתר' },
    { icon: 'store', label: 'בחירת עסק' },
    { icon: 'layers', label: 'תפריט / קטלוג' },
    { icon: 'package', label: 'סל' },
    { icon: 'shieldCheck', label: 'תשלום מאובטח' },
    { icon: 'monitor', label: 'הזמנה מגיעה לעסק' },
    { icon: 'settings', label: 'ניהול הזמנה' },
    { icon: 'truck', label: 'משלוח / איסוף' },
    { icon: 'checkCircle', label: 'הזמנה הושלמה' },

]

function FlowNode({ icon, label, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2"
        >
            <Icon name={icon} size={24} className="text-accent-2 sm:text-[26px]" />
            <span className="max-w-[5.5rem] text-center text-[11px] font-semibold leading-tight text-white/75 sm:text-xs">
                {label}
            </span>
        </motion.div>
    )
}

export default function TakeEatEcosystem() {
    return (
        <section id="ecosystem" className="relative py-28 md:py-36">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-1/2 top-1/4 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(53,208,255,0.08),transparent_65%)]" />
            </div>
            <div className="relative mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="איך הכל מתחבר"
                    title="מההזמנה ועד הלקוח — מערכת אחת שלמה"
                    description="קטלוג, סל, תשלום, ניהול הזמנה ומשלוח או איסוף — כל השלבים מחוברים בתוך TakeEat, בזמן אמת"
                />

                <div className="relative mx-auto max-w-5xl">
                    {/* connecting line behind the nodes */}
                    <div
                        className="pointer-events-none absolute inset-x-6 top-7 hidden h-px bg-gradient-to-l from-transparent via-white/15 to-transparent sm:top-8 lg:block"
                        aria-hidden="true"
                    />
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
                        {flow.map((node, i) => (
                            <FlowNode key={`${node.label}-${i}`} icon={node.icon} label={node.label} index={i} />
                        ))}
                    </div>
                </div>

                <Reveal delay={0.3}>
                    <p className="mx-auto mt-14 max-w-2xl text-center text-lg font-medium leading-relaxed text-white/80">
                        זו לא רק "מערכת הזמנות" — זה אקוסיסטם שלם שמחבר בין הלקוח לעסק, מהרגע שהוא פותח את הקטלוג
                        ועד שהמנה או המוצר מגיעים אליו.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}
