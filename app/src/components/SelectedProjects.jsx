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

export default function SelectedProjects() {
    return (
        <section id="projects" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="פרויקטים נבחרים"
                    title="עוד עבודות ומוצרים"
                    description="אתרים עסקיים, פרויקטים מהעבר ומוצר נוסף שפיתחתי — לצד TakeEat ו-Buildix"
                />
                <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
