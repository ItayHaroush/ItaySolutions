import Icon from './Icon'
import { Reveal, SectionHeader } from './primitives'
import { capabilities } from '../lib/servicesData'

export default function WhatIBuild() {
    return (
        <section id="what-i-build" className="relative py-28 md:py-36">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.07),transparent_65%)]" />
            </div>
            <div className="relative mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="מה אני בונה"
                    title="לא עוד בונה אתרים — בונה מערכות ומוצרים"
                    description="אפיון → UX/UI → פיתוח → Backend → Frontend → API → פרודקשן → תחזוקה"
                />

                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {capabilities.map((cap, i) => (
                        <Reveal key={cap.title} delay={i * 0.08} className={i === capabilities.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                            <div className="card-premium h-full p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                                <div className="flex justify-center">
                                    <Icon name={cap.icon} size={36} className="mb-6 text-accent-2 transition-transform duration-300 hover:scale-110 hover:rotate-3" />
                                </div>
                                <h3 className="text-center text-lg font-bold text-white">{cap.title}</h3>
                                <p className="mt-2.5 text-center text-sm leading-relaxed text-mist">{cap.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
