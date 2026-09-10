import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from './Icon'
import TakeEatHeroShowcase from './TakeEatHeroShowcase'
import { TextReveal } from './primitives'
import { getWhatsAppUrl } from '../lib/constants'
import { scrollToId } from '../lib/lenis'

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const yText = useTransform(scrollYProgress, [0, 1], [0, 120])
    const yVisual = useTransform(scrollYProgress, [0, 1], [0, -60])
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

    return (
        <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 lg:pt-32">
            {/* dynamic background */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-1/2 top-[-20%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.13),transparent_60%)]" />
                <div className="absolute -left-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.1),transparent_60%)]" />
                <div className="absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(53,208,255,0.07),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,black,transparent)]" />
            </div>

            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
                <motion.div style={{ y: yText, opacity }} className="text-center lg:text-right">
                    <h1 className="text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl xl:text-[3.4rem]">
                        <TextReveal as="span" text="אני בונה מערכות דיגיטליות" className="block" delay={0.15} />
                        <TextReveal as="span" text="שעובדות בעולם האמיתי" className="block text-gradient" delay={0.35} />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.75, ease }}
                        className="mx-auto mt-6 max-w-xl text-xl font-medium leading-relaxed text-white/85 lg:mx-0"
                    >
                        מוצרים, מערכות עסקיות, אתרים ואינטגרציות — מאפיון ועד פרודקשן. TakeEat ו-Buildix הם מוצרים
                        חיים שנמצאים בשימוש אמיתי.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 1.15, ease }}
                        className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
                    >
                        <a
                            href={getWhatsAppUrl()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow flex items-center gap-2.5 rounded-full bg-gradient-to-l from-accent to-accent-2 px-7 py-4 text-base font-bold text-ink"
                        >
                            <Icon name="whatsapp" size={19} />
                            בואו נדבר
                        </a>
                        <button
                            onClick={() => scrollToId('takeeat')}
                            className="glass flex items-center gap-2.5 rounded-full px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
                        >
                            <Icon name="folder" size={19} />
                            צפו במוצרים
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ y: yVisual }}
                    initial={{ opacity: 0, scale: 0.94, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.5, ease }}
                >
                    <TakeEatHeroShowcase />
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollToId('takeeat')}
                aria-label="גלילה למוצרים"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
            >
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }} className="text-white/40 hover:text-white/80 transition-colors">
                    <Icon name="chevronDown" size={28} />
                </motion.div>
            </motion.button>
        </section>
    )
}
