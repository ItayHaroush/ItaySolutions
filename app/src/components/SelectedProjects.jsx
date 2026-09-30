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
            <article className="mb-6 grid items-center gap-8 overflow-hidden rounded-[2rem] border border-[#d4b483]/20 bg-white/[0.03] p-8 md:grid-cols-[auto_1fr] md:p-10">
                <img
                    src={project.image}
                    alt={project.title}
                    className="mx-auto h-28 w-28 rounded-full object-cover ring-1 ring-[#d4b483]/40"
                />
                <div className="text-center md:text-right">
                    <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: project.accent }}>
                        {project.typeLabel}
                    </span>
                    <h3 className="mt-2 text-2xl font-extrabold">{project.title}</h3>
                    <p className="mt-1 text-sm text-mist">{project.subtitle}</p>
                    <p className="mt-4 text-base leading-relaxed text-white/70">{project.desc}</p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                        <Link
                            to={project.story}
                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-[#c4a574] to-[#e8d5b0] px-6 py-3 text-sm font-bold text-ink shadow-[0_8px_32px_-8px_rgba(212,180,131,0.55)] transition-transform duration-300 hover:-translate-y-0.5"
                        >
                            {project.storyCta}
                            <Icon name="arrowLeft" size={15} />
                        </Link>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d4b483] transition-colors hover:text-white"
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
    const featured = projects.find((project) => project.story)
    const rest = projects.filter((project) => !project.story)

    return (
        <section id="projects" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="פרויקטים נבחרים"
                    title="עוד עבודות ומוצרים"
                    description="פלטפורמה חיה שנבנתה מתוך היכרות עם השטח — ולצדה אתרים עסקיים ופרויקטים נוספים"
                />
                {featured && <FeaturedStory project={featured} />}
                <div className="grid gap-6 md:grid-cols-3">
                    {rest.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
