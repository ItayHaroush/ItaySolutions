import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1]

export function Reveal({ children, delay = 0, y = 36, className = '', once = true }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once, margin: '-80px' }}
            transition={{ duration: 0.9, delay, ease }}
        >
            {children}
        </motion.div>
    )
}

export function TextReveal({ text, className = '', delay = 0, as: Tag = 'span' }) {
    const words = text.split(' ')
    return (
        <Tag className={className} aria-label={text}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-baseline">
                    <motion.span
                        className="inline-block"
                        initial={{ y: '110%' }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.85, delay: delay + i * 0.045, ease }}
                    >
                        {word}
                    </motion.span>
                    {i < words.length - 1 && '\u00A0'}
                </span>
            ))}
        </Tag>
    )
}

export function SectionHeader({ subtitle, title, description, center = true }) {
    return (
        <div className={`mb-14 md:mb-20 ${center ? 'text-center' : ''}`}>
            <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium tracking-wide text-accent-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent live-dot" />
                    {subtitle}
                </span>
            </Reveal>
            <TextReveal
                as="h2"
                text={title}
                delay={0.1}
                className="mt-5 block text-3xl font-extrabold leading-[1.15] tracking-tight text-gradient-soft sm:text-4xl md:text-5xl"
            />
            {description && (
                <Reveal delay={0.25}>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-mist">{description}</p>
                </Reveal>
            )}
        </div>
    )
}
