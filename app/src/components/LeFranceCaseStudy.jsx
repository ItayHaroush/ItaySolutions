import { useEffect, useRef } from 'react'
import Icon from './Icon'
import CrystalBallLogo from './CrystalBallLogo'
import IPhoneMockup from './IPhoneMockup'
import { Reveal, SectionHeader } from './primitives'

const clips = [
    { src: '/videos/5.mp4', label: 'התפריט הדיגיטלי' },
    { src: '/videos/6.mp4', label: 'הזמנה באתר' },
]

function ClipMockup({ src, label, index }) {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        // some browsers only honor autoplay once muted is set as a JS property, not just an attribute
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

/*
 * Confirmed by the client (2026-09-09): the TakeEat proposal was approved and the site
 * is live at https://la-france-omega.vercel.app/ — fetched and verified directly
 * (HTTP 200, title "הצרפתייה הקטנה · כשר מהדרין", og:description "מסעדה
 * צרפתית־ישראלית בכשרות מהודרת"). The business is now also listed as a restaurant
 * tenant inside ChefSync/TakeEat per the client. No exact takeeat.co.il/<slug> menu URL
 * was confirmed yet, so that specific link is left out rather than guessed — swap it in
 * once known.
 */
export default function LeFranceCaseStudy() {
    return (
        <section id="le-france" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="Case Study"
                    title="הצרפתייה הקטנה"
                    description="מסעדה צרפתית־ישראלית בכשרות מהודרת, עם אתר דיגיטלי חי ומערכת הזמנות מבוססת TakeEat"
                />

                <Reveal>
                    <div className="card-premium mx-auto max-w-3xl overflow-hidden p-8 md:p-10">
                        <div className="flex flex-col items-center">
                            <CrystalBallLogo
                                logo="/images/le-france/logo-green.png"
                                name="הצרפתייה הקטנה"
                                size="h-20 w-20"
                            />
                            <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3.5 py-1.5 text-xs font-bold tracking-wide text-emerald-400">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-dot" />
                                LIVE
                            </span>
                            <p className="mt-6 max-w-2xl text-center leading-relaxed text-mist">
                                אתר דיגיטלי שנבנה לעסק אמיתי — מסעדה צרפתית־ישראלית בכשרות מהודרת בעפולה. המערכת חיה
                                ופעילה, והעסק רשום גם כמסעדת TakeEat במערכת ChefSync.
                            </p>
                            <div className="mt-7 flex justify-center">
                                <a
                                    href="https://la-france-omega.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-glow inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-accent to-accent-2 px-6 py-3 text-sm font-bold text-ink"
                                >
                                    לצפייה באתר החי
                                    <Icon name="external" size={15} />
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-12">
                    {clips.map((clip, index) => (
                        <ClipMockup key={clip.src} src={clip.src} label={clip.label} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
