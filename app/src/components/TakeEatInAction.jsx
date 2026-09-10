import { useEffect, useRef } from 'react'
import Icon from './Icon'
import IPhoneMockup from './IPhoneMockup'
import { Reveal, SectionHeader } from './primitives'

const panels = [
    {
        device: 'tablet',
        title: 'קטלוג / תפריט',
        subtitle: 'תפריט או מוצרים',
        desc: 'כל מנה או מוצר עם תמונה, מחיר ותיאור — מתעדכן מהמערכת בזמן אמת.',
        accent: '#35d0ff',
        image: '/videos/3.mp4',
    },
    {
        device: 'smartphone',
        title: 'הזמנה',
        subtitle: 'סל + תשלום',
        desc: 'הלקוח בונה הזמנה, משלם באתר בצורה מאובטחת ומקבל אישור מיידי.',
        accent: '#ff7a1a',
        image: '/videos/2.mp4',
    },
    {
        device: 'monitor',
        title: 'ניהול',
        subtitle: 'מסך לעסק',
        desc: 'העסק רואה את ההזמנה ברגע שהיא נכנסת, מעדכן סטטוס ומנהל את התור במטבח או במחסן.',
        accent: '#7c5cff',
        image: '/videos/1.mp4',
    },
]

function Panel({ device, title, subtitle, desc, accent, image, index }) {
    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return
        // some browsers only honor autoplay once muted is set as a JS property, not just an attribute
        video.muted = true
        video.play().catch(() => { })
    }, [])

    return (
        <Reveal delay={index * 0.12} className="h-full">
            <article className="card-premium flex h-full flex-col items-center overflow-hidden p-7 pt-8 text-center">
                <IPhoneMockup className="w-[150px] sm:w-[170px]">
                    <div className="aspect-[9/19.5] w-full bg-black">
                        {image.endsWith('.mp4') ? (
                            <video
                                ref={videoRef}
                                src={image}
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <img src={image} alt="" loading="lazy" className="h-full w-full object-cover" />
                        )}
                    </div>
                </IPhoneMockup>
                <span
                    className="mt-6 grid h-11 w-11 place-items-center rounded-2xl"
                    style={{ color: accent, background: `${accent}22`, border: `1px solid ${accent}45` }}
                >
                    <Icon name={device} size={20} />
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                <p className="mt-0.5 text-sm font-semibold" style={{ color: accent }}>{subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-mist">{desc}</p>
            </article>
        </Reveal>
    )
}

export default function TakeEatInAction() {
    return (
        <section id="takeeat-in-action" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <Reveal className="mb-8 flex justify-center">
                    <img
                        src="/images/takeeat/logo.png"
                        alt="TakeEat"
                        loading="lazy"
                        className="h-16 rounded-2xl shadow-[0_20px_50px_-15px_rgba(255,122,26,0.35)] sm:h-20"
                    />
                </Reveal>
                <SectionHeader
                    subtitle="המערכת בפעולה"
                    title="לא עוד אתר — מערכת שמריצה עסק בזמן אמת"
                    description="קטלוג, הזמנה וניהול — שלושה מסכים, מערכת אחת. מתאים למסעדה, מכולת, חנות או כל עסק שמוכר מוצרים"
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {panels.map((panel, index) => (
                        <Panel key={panel.title} {...panel} index={index} />
                    ))}
                </div>

                <Reveal delay={0.3}>
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/60">
                        <span className="glass rounded-full px-4 py-2">מסעדות</span>
                        <span className="glass rounded-full px-4 py-2">מכולות</span>
                        <span className="glass rounded-full px-4 py-2">חנויות</span>
                        <span className="glass rounded-full px-4 py-2">עסקים עם קטלוג + סל + תשלום</span>
                        <span className="glass rounded-full px-4 py-2">משלוח או איסוף עצמי</span>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
