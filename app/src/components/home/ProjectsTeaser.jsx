import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { Reveal, SectionHeader } from '../primitives'
import { projects } from '../../lib/projectsData'

const leFranceTeaser = {
    id: 'le-france',
    title: 'הצרפתייה הקטנה',
    typeLabel: 'Case Study · TakeEat',
    image: '/images/le-france/logo-green.png',
    accent: '#ff7a1a',
    desc: 'מסעדה צרפתית־ישראלית בעפולה עם אתר דיגיטלי ומערכת הזמנות מבוססת TakeEat.',
    link: 'https://la-france-omega.vercel.app/',
    ctaText: 'צפו באתר',
}

export default function ProjectsTeaser() {
    const cards = [leFranceTeaser, ...projects]

    return (
        <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader subtitle="פרויקטים נבחרים" title="עוד עבודות ומוצרים" />

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {cards.map((project, i) => (
                        <Reveal key={project.id} delay={i * 0.08} className="h-full">
                            <div className="card-premium flex h-full flex-col items-center overflow-hidden p-6 text-center">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="max-h-16 max-w-[50%] rounded-xl object-contain"
                                />
                                <div className="flex flex-1 flex-col items-center pt-5">
                                    <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: project.accent }}>
                                        {project.typeLabel}
                                    </span>
                                    <h3 className="mt-2 text-base font-bold">{project.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/55">{project.desc}</p>
                                    <div className="mt-auto pt-4">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2 transition-colors hover:text-white"
                                        >
                                            {project.ctaText}
                                            <Icon name="external" size={15} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.3} className="mt-10 text-center">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                    >
                        לכל הפרויקטים
                        <Icon name="arrowLeft" size={16} />
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
