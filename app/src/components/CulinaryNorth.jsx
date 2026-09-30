import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import IPhoneMockup from './IPhoneMockup'
import { Reveal, SectionHeader } from './primitives'

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
            <div className="rounded-t-[1.35rem] border border-white/10 bg-[#12121c] p-2 pb-0 shadow-[0_40px_100px_-24px_rgba(0,0,0,0.75)] sm:p-2.5">
                <div className="overflow-hidden rounded-t-xl bg-black">
                    <img src={src} alt={alt} className="aspect-[3024/1964] w-full object-cover object-top" />
                </div>
            </div>
            <div className="mx-auto h-3 w-[18%] rounded-b-md bg-[#1c1c28]" />
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
                            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${selected ? 'bg-white text-ink' : 'text-white/55 hover:bg-white/5 hover:text-white'}`}
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
        title: 'לפני הקוד',
        paragraphs: [
            'הכרתי את עולם המטבחים מקרוב.',
            'את הקצב, את האנשים, את העסקים ואת האתגרים של התחום.',
        ],
    },
    {
        title: 'החיבור',
        paragraphs: [
            'כשנפגשתי עם קולינריה צפון, החיבור היה טבעי.',
            'היה רעיון לפלטפורמה שתאגד את עולם הקולינריה בצפון — תוכן, עסקים, אנשי מקצוע ומשרות.',
            'משם התחלנו לעבוד יחד.',
        ],
    },
    {
        title: 'העבודה',
        paragraphs: [
            'לא לקחנו תבנית והלבשנו עליה לוגו.',
            'אפיינו, בנינו, שינינו, דייקנו — עד שהרעיון הפך למערכת אמיתית.',
        ],
    },
    {
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
        <section id="culinary-north" className={`relative ${standalone ? 'pt-36 pb-28 md:pt-44 md:pb-32' : 'py-28 md:py-32'}`}>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />

            <div className="relative mx-auto max-w-6xl px-5">
                <Reveal>
                    <img
                        src="/images/culinary-north/logo.webp"
                        alt=""
                        className="mx-auto mb-8 h-24 w-24 rounded-full object-cover shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7)]"
                    />
                </Reveal>

                <SectionHeader
                    subtitle="פרויקט חי"
                    title="קולינריה צפון"
                    description="יש משהו מעניין כשמפתח בונה מוצר לעולם שהוא מכיר מהצד השני."
                />

                <Reveal>
                    <ScreenStage />
                </Reveal>

                <div className="mx-auto mt-16 grid max-w-5xl gap-10 sm:grid-cols-2">
                    {chapters.map((chapter, i) => (
                        <Reveal key={chapter.title} delay={i * 0.06}>
                            <article>
                                <h3 className="text-lg font-bold text-white">{chapter.title}</h3>
                                <div className="mt-3 space-y-2">
                                    {chapter.paragraphs.map((paragraph) => (
                                        <p key={paragraph} className="leading-relaxed text-mist">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.12} className="mt-12 flex flex-wrap justify-center gap-2.5">
                    {pillars.map((pillar) => (
                        <span key={pillar} className="glass rounded-full px-4 py-2 text-sm font-semibold text-white/80">
                            {pillar}
                        </span>
                    ))}
                </Reveal>

                <Reveal delay={0.16} className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                        href={LIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-accent to-accent-2 px-7 py-3.5 text-sm font-bold text-ink"
                    >
                        לצפייה באתר החי
                        <Icon name="external" size={16} />
                    </a>
                    {standalone && (
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            לשאר הפרויקטים
                            <Icon name="arrowLeft" size={16} />
                        </Link>
                    )}
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="mx-auto mt-14 max-w-xl text-center text-lg font-semibold leading-relaxed text-white/90">
                        זה בדיוק סוג הפרויקטים שאני אוהב: לקחת עולם אמיתי שאני מכיר, ולהפוך רעיון למוצר שעובד.
                    </p>
                </Reveal>
            </div>
        </section>
    )
}
