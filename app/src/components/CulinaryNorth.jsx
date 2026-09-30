import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import IPhoneMockup from './IPhoneMockup'
import { Reveal } from './primitives'

const LIVE_URL = 'https://culinary-north.co.il'

const screens = [
    {
        id: 'home',
        label: 'דף הבית',
        mac: '/images/culinary-north/mockups/home-mac.jpg',
        phone: '/images/culinary-north/mockups/home-iphone.jpg',
    },
    {
        id: 'jobs',
        label: 'לוח משרות',
        mac: '/images/culinary-north/mockups/jobs-mac.jpg',
        phone: '/images/culinary-north/mockups/jobs-iphone.jpg',
    },
    {
        id: 'employers',
        label: 'למעסיקים',
        mac: '/images/culinary-north/mockups/employers-mac.jpg',
        phone: '/images/culinary-north/mockups/employers-iphone.jpg',
    },
    {
        id: 'community',
        label: 'קהילה',
        mac: '/images/culinary-north/mockups/community-mac.jpg',
        phone: '/images/culinary-north/mockups/community-iphone.jpg',
    },
]

function MacBook({ src, alt }) {
    return (
        <div className="w-full">
            <div className="rounded-t-2xl border border-white/15 bg-gradient-to-b from-[#ececee] to-[#b7b9be] p-2 pb-3 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.75)] sm:p-2.5 sm:pb-3.5">
                <div className="overflow-hidden rounded-lg bg-black">
                    <img src={src} alt={alt} className="aspect-[3024/1964] w-full object-cover object-top" />
                </div>
            </div>
            <div className="h-2.5 rounded-b-xl bg-gradient-to-b from-[#4a4a52] to-[#1c1c22]" />
            <div className="mx-auto h-1.5 w-[16%] rounded-b-md bg-[#2c2c34]" />
        </div>
    )
}

function ScreenStage() {
    const [activeId, setActiveId] = useState(screens[0].id)
    const active = screens.find((screen) => screen.id === activeId) || screens[0]

    return (
        <div>
            <div className="flex flex-wrap justify-center gap-1" role="tablist" aria-label="מסכי הפורום">
                {screens.map((screen) => {
                    const selected = screen.id === active.id
                    return (
                        <button
                            key={screen.id}
                            type="button"
                            role="tab"
                            aria-selected={selected}
                            onClick={() => setActiveId(screen.id)}
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${selected ? 'bg-white text-ink' : 'text-white/60 hover:text-white'}`}
                        >
                            {screen.label}
                        </button>
                    )
                })}
            </div>

            <div className="relative mx-auto mt-8 max-w-5xl pb-6 md:pb-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="md:pe-6">
                            <MacBook src={active.mac} alt={`${active.label} במחשב · פורום קולינריה בצפון`} />
                        </div>
                        <div className="mt-8 flex justify-center md:absolute md:bottom-0 md:left-0 md:mt-0">
                            <IPhoneMockup className="w-[148px] sm:w-[172px]">
                                <img
                                    src={active.phone}
                                    alt={`${active.label} בטלפון · פורום קולינריה בצפון`}
                                    className="aspect-[9/19.5] w-full object-cover object-top"
                                />
                            </IPhoneMockup>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

const chapters = [
    {
        index: '01',
        title: 'לפני הקוד',
        paragraphs: [
            'הכרתי את עולם המטבחים מקרוב.',
            'את הקצב, את האנשים, את העסקים ואת האתגרים של התחום.',
        ],
    },
    {
        index: '02',
        title: 'החיבור',
        paragraphs: [
            'כשנפגשתי עם קולינריה צפון, החיבור היה טבעי.',
            'היה רעיון לפלטפורמה שתאגד את עולם הקולינריה בצפון — תוכן, עסקים, אנשי מקצוע ומשרות.',
            'משם התחלנו לעבוד יחד.',
        ],
    },
    {
        index: '03',
        title: 'העבודה',
        paragraphs: [
            'לא לקחנו תבנית והלבשנו עליה לוגו.',
            'אפיינו, בנינו, שינינו, דייקנו — עד שהרעיון הפך למערכת אמיתית.',
        ],
    },
    {
        index: '04',
        title: 'באוויר',
        paragraphs: [
            'והיום קולינריה צפון באוויר.',
            'פורום קולינריה בצפון הוא הבית של הטבחים בצפון: פרסום משרות, קהילת טבחים ונטוורקינג. מעסיקים ואנשי מקצוע נפגשים שם, מעפולה עד מטולה.',
        ],
    },
]

const pillars = ['פרסום משרות', 'קהילת טבחים', 'נטוורקינג']

export default function CulinaryNorth({ standalone = false }) {
    return (
        <section id="culinary-north" className={`relative ${standalone ? 'pt-36 pb-28 md:pt-44 md:pb-36' : 'py-28 md:py-36'}`}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-1/2 top-24 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,180,131,0.12),transparent_68%)]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-5">
                <Reveal>
                    <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                        <img
                            src="/images/culinary-north/logo.webp"
                            alt="פורום קולינריה בצפון"
                            className="h-28 w-28 rounded-full object-cover shadow-[0_24px_60px_-20px_rgba(212,180,131,0.45)] ring-1 ring-[#d4b483]/40"
                        />
                        <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3.5 py-1.5 text-xs font-bold tracking-wide text-emerald-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-dot" />
                            פרויקט חי
                        </span>
                        <p className="mt-4 text-sm font-semibold tracking-wide text-[#d4b483]">קולינריה צפון</p>
                    </div>
                </Reveal>

                <Reveal delay={0.08}>
                    <h2 className="mx-auto mt-6 max-w-3xl text-center text-3xl font-extrabold leading-[1.25] tracking-tight text-white sm:text-4xl md:text-[2.7rem]">
                        יש משהו מעניין כשמפתח בונה מוצר לעולם שהוא מכיר מהצד השני.
                    </h2>
                </Reveal>

                <Reveal delay={0.12}>
                    <div className="mt-12">
                        <ScreenStage />
                    </div>
                </Reveal>

                <div className="mx-auto mt-16 max-w-3xl space-y-10">
                    {chapters.map((chapter, i) => (
                        <Reveal key={chapter.index} delay={i * 0.06}>
                            <article className="border-s border-[#d4b483]/25 ps-6">
                                <div className="flex items-baseline gap-3">
                                    <span className="font-mono text-xs font-semibold tracking-widest text-[#d4b483]">{chapter.index}</span>
                                    <h3 className="text-lg font-bold text-white">{chapter.title}</h3>
                                </div>
                                <div className="mt-3 space-y-2">
                                    {chapter.paragraphs.map((paragraph) => (
                                        <p key={paragraph} className="text-lg leading-relaxed text-mist">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <div className="mx-auto mt-14 max-w-3xl rounded-[2rem] border border-[#d4b483]/20 bg-white/[0.03] p-7 text-center md:p-10">
                        <p className="text-sm font-semibold text-[#d4b483]">המערכת שעלתה</p>
                        <p className="mt-3 text-xl font-bold leading-snug text-white">הבית של הטבחים בצפון</p>
                        <div className="mt-5 flex flex-wrap justify-center gap-2.5">
                            {pillars.map((pillar) => (
                                <span key={pillar} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
                                    {pillar}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <a
                                href={LIVE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-[#c4a574] to-[#e8d5b0] px-7 py-3.5 text-sm font-bold text-ink shadow-[0_8px_32px_-8px_rgba(212,180,131,0.55)] transition-transform duration-300 hover:-translate-y-0.5"
                            >
                                לצפייה באתר החי
                                <Icon name="external" size={16} />
                            </a>
                            {standalone && (
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white/70 transition-colors hover:text-white"
                                >
                                    לשאר הפרויקטים
                                    <Icon name="arrowLeft" size={16} />
                                </Link>
                            )}
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="mx-auto mt-14 max-w-xl text-center text-xl font-semibold leading-relaxed text-white/90">
                        זה בדיוק סוג הפרויקטים שאני אוהב: לקחת עולם אמיתי שאני מכיר, ולהפוך רעיון למוצר שעובד.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}
