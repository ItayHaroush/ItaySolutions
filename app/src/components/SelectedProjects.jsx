import { Link } from 'react-router-dom'
import { Reveal, SectionHeader } from './primitives'
import Icon from './Icon'
import { projects } from '../lib/projectsData'

function trackMouse(e) {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function ProjectCard({ project, index }) {
    return (
        <Reveal delay={index * 0.1} className="h-full">
            <article onMouseMove={trackMouse} className="card-premium flex h-full flex-col items-center overflow-hidden p-8 text-center">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="max-h-20 max-w-[55%] rounded-xl object-contain"
                />
                <div className="flex flex-1 flex-col items-center pt-6">
                    <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: project.accent }}>
                        {project.typeLabel}
                    </span>
                    <h3 className="mt-2 text-lg font-bold">{project.title}</h3>
                    <p className="mt-1 text-sm text-mist">{project.subtitle}</p>
                    <p className="mt-4 text-sm leading-relaxed text-white/55">{project.desc}</p>
                    <div className="mt-auto pt-6">
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
            </article>
        </Reveal>
    )
}

function FeaturedStory({ project }) {
    return (
        <Reveal>
            <article className="card-premium mb-6 flex flex-col items-center gap-6 p-8 text-center md:flex-row md:p-10 md:text-right">
                <img
                    src={project.image}
                    alt={project.title}
                    className={project.imageWide
                        ? 'h-16 w-full max-w-xs object-contain'
                        : 'h-24 w-24 shrink-0 rounded-full object-cover shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]'}
                />
                <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: project.accent }}>
                        {project.typeLabel}
                    </span>
                    <h3 className="mt-2 text-2xl font-extrabold">{project.title}</h3>
                    <p className="mt-1 text-sm text-mist">{project.subtitle}</p>
                    <p className="mt-4 text-base leading-relaxed text-white/70">{project.desc}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                        <Link
                            to={project.story}
                            className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-accent to-accent-2 px-6 py-3 text-sm font-bold text-ink"
                        >
                            {project.storyCta}
                            <Icon name="arrowLeft" size={15} />
                        </Link>
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
            </article>
        </Reveal>
    )
}

export default function SelectedProjects() {
    const featured = projects.filter((project) => project.story)
    const rest = projects.filter((project) => !project.story)

    return (
        <section id="projects" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="פרויקטים נבחרים"
                    title="עוד עבודות ומוצרים"
                    description="אתרים חיים עם סיפור התהליך — ולצדם אתרים עסקיים ופרויקטים נוספים"
                />
                {featured.map((project) => (
                    <FeaturedStory key={project.id} project={project} />
                ))}
                <div className="grid gap-6 md:grid-cols-3">
                    {rest.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
