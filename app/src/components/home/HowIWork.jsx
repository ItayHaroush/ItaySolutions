import { Reveal, SectionHeader } from '../primitives'
import { processSteps, stack } from '../../lib/aboutData'

export default function HowIWork() {
    return (
        <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-5">
                <SectionHeader
                    subtitle="איך אני עובד"
                    title="מרעיון למערכת שעובדת"
                    description="אני לא מוסר קוד ונעלם. אני בונה את המערכת, מעלה אותה לפרודקשן וממשיך לשפר אותה יחד עם העסק."
                />

                <Reveal>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {processSteps.map((step, i) => (
                            <span key={step} className="flex items-center gap-2">
                                <span className="glass rounded-full px-4 py-2 text-sm font-semibold text-white/85">{step}</span>
                                {i < processSteps.length - 1 && <span className="text-white/25">←</span>}
                            </span>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={0.15} className="mt-8 flex flex-wrap justify-center gap-2.5">
                    {stack.map((item) => (
                        <span key={item} className="rounded-full bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-mist">
                            {item}
                        </span>
                    ))}
                </Reveal>
            </div>
        </section>
    )
}
