import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import IPhoneMockup from './IPhoneMockup'
import { Reveal, SectionHeader } from './primitives'

const LIVE_URL = 'https://hamitbah.hazarfatia.co.il'

const clips = [
    { src: '/videos/5.mp4', label: 'התפריט הדיגיטלי' },
    { src: '/videos/6.mp4', label: 'הזמנה באתר' },
]

const paths = ['הזמנה רגילה', 'אירוח ואירועים', 'שישי וחגים']

const chapters = [
    {
        title: 'מסלולי הזמנה',
        paragraphs: [
            'במקום להעמיס את כל האפשרויות על תפריט אחד, בנינו את האתר סביב מסלולי הזמנה שונים — הזמנה רגילה, אירוח ואירועים, שישי וחגים.',
        ],
    },
    {
        title: 'אירוח ואירועים',
        paragraphs: [
            'במסלול האירוח והאירועים הוספנו גם התאמה לפי מספר אנשים, סוג האירוע והעדפות, כדי לעזור ללקוח להגיע לתפריט שמתאים לו בלי לחשב הכול לבד.',
        ],
    },
    {
        title: 'החיבור ל־TakeEat',
        paragraphs: [
            'מאחורי הקלעים, האתר מתחבר ל־TakeEat שממשיך לטפל בהזמנות כרגיל. כך הצלחנו להוסיף חוויית הזמנה חדשה בלי לשנות את מערכת ההזמנות הקיימת של המסעדה.',
        ],
    },
    {
        title: 'יחד עם הצוות',
        paragraphs: [
            'לאורך התהליך עבדתי יחד עם רועי והצוות של המסעדה — תמי, דגנית ודנה — כדי לקחת את הידע והצרכים מהשטח ולהפוך אותם למוצר שעובד בפועל.',
        ],
    },
]

function ClipMockup({ src, label, index }) {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        video.muted = true
        video.play().catch(() => { })
    }, [])

    return (
        <Reveal delay={index * 0.12}>
            <div className="flex flex-col items-center gap-3">
                <IPhoneMockup className="w-[170px] sm:w-[190px]">
                    <div className="aspect-[9/19.5] w-full bg-black">
                        <video
                            ref={videoRef}
                            src={src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </IPhoneMockup>
                <span className="text-sm font-semibold text-white/60">{label}</span>
            </div>
        </Reveal>
    )
}

export default function LeFranceCaseStudy() {
    return (
        <section id="le-france" className="relative pt-36 pb-28 md:pt-44 md:pb-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />

            <div className="relative mx-auto max-w-6xl px-5">
                <Reveal>
                    <img
                        src="/images/le-france/logo-wordmark.png"
                        alt="הצרפתייה הקטנה"
                        className="mx-auto mb-2 h-auto w-full max-w-xl object-contain"
                    />
                </Reveal>

                <SectionHeader
                    subtitle="פרויקט חי"
                    title="הצרפתייה הקטנה"
                    description="הפרויקט התחיל מתוך צורך פשוט: לבנות לצרפתייה הקטנה – המטבח אתר שיאפשר ללקוחות להזמין בצורה נוחה וברורה, אבל גם לתת מענה לסוגים שונים של הזמנות."
                />

                <Reveal>
                    <div className="flex flex-wrap justify-center gap-2.5">
                        {paths.map((path) => (
                            <span key={path} className="glass rounded-full px-4 py-2 text-sm font-semibold text-white/80">
                                {path}
                            </span>
                        ))}
                    </div>
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

                <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-12">
                    {clips.map((clip, index) => (
                        <ClipMockup key={clip.src} src={clip.src} label={clip.label} index={index} />
                    ))}
                </div>

                <Reveal delay={0.15}>
                    <p className="mx-auto mt-16 max-w-2xl text-center text-lg font-semibold leading-relaxed text-white/90">
                        התוצאה היא אתר שמרכז את המותג, התפריטים וההזמנות במקום אחד, תוך שמירה על תהליך פשוט וברור ללקוח.
                    </p>
                    <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <a
                            href={LIVE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-accent to-accent-2 px-7 py-3.5 text-sm font-bold text-ink"
                        >
                            לצפייה באתר החי
                            <Icon name="external" size={16} />
                        </a>
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            לשאר הפרויקטים
                            <Icon name="arrowLeft" size={16} />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
