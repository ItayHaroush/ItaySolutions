import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { Reveal, SectionHeader } from '../primitives'
import { capabilities } from '../../lib/servicesData'

export default function WhatIBuildTeaser() {
    const cards = capabilities.slice(0, 4)

    return (
        <section id="what-i-build" className="relative py-20 md:py-28">
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="מה אני בונה"
                    title="לא עוד אתר בודד"
                    description="אני בונה מערכות ומוצרים שמחברים בין העסק, הלקוחות והתהליכים שמאחורי הקלעים."
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((cap, i) => (
                        <Reveal key={cap.title} delay={i * 0.08}>
                            <div className="card-premium h-full p-7 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                                <div className="flex justify-center">
                                    <Icon name={cap.icon} size={32} className="mb-5 text-accent-2 transition-transform duration-300 hover:scale-110 hover:rotate-3" />
                                </div>
                                <h3 className="text-base font-bold text-white">{cap.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-mist">{cap.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3} className="mt-10 text-center">
                    <Link
                        to="/services"
                        className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                    >
                        לכל השירותים
                        <Icon name="arrowLeft" size={16} />
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
