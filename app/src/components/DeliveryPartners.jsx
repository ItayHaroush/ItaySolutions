import Icon from './Icon'
import { Reveal, SectionHeader } from './primitives'
import { getWhatsAppUrl } from '../lib/constants'

const nodes = [
    { icon: 'store', label: 'TakeEat' },
    { icon: 'truck', label: 'ספקי משלוחים' },
    { icon: 'layers', label: 'עסקים' },
]

export default function DeliveryPartners() {
    return (
        <section id="delivery" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="שותפים למשלוחים"
                    title="אנחנו מחברים את העסק למשלוח"
                    description="בוחנים שיתופי פעולה ואינטגרציות עם ספקי משלוחים, כדי שכל עסק ב-TakeEat יוכל להציע גם משלוח וגם איסוף עצמי"
                />

                <Reveal>
                    <div className="mx-auto flex max-w-xl items-center justify-center gap-4 sm:gap-8">
                        {nodes.map((node, i) => (
                            <div key={node.label} className="flex items-center gap-4 sm:gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    <span className="glass grid h-16 w-16 place-items-center rounded-2xl text-accent-2">
                                        <Icon name={node.icon} size={26} />
                                    </span>
                                    <span className="text-xs font-semibold text-white/70">{node.label}</span>
                                </div>
                                {i < nodes.length - 1 && (
                                    <Icon name="arrowLeft" size={20} className="text-white/25" />
                                )}
                            </div>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.15}>
                    <div className="glass-strong mx-auto mt-12 max-w-2xl rounded-3xl p-8 text-center">
                        <h3 className="text-xl font-bold text-white">מחפשים שותפים</h3>
                        <p className="mt-3 leading-relaxed text-mist">
                            אנחנו בוחנים שיתופי פעולה ואינטגרציות עם ספקי משלוחים שרוצים לעבוד עם עסקים שכבר משתמשים ב-TakeEat.
                        </p>
                        <a
                            href={getWhatsAppUrl('היי איתי, אני ספק משלוחים ואשמח לשמוע על שיתוף פעולה עם TakeEat')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-accent to-accent-2 px-7 py-3.5 text-base font-bold text-ink"
                        >
                            <Icon name="whatsapp" size={19} />
                            אני ספק משלוחים / רוצה לשתף פעולה
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
