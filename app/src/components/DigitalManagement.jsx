import Icon from './Icon'
import { Reveal, SectionHeader } from './primitives'
import { getWhatsAppUrl } from '../lib/constants'
import restaurants from '../data/restaurants.json'

/* Simple brand glyphs for social platforms */
function ServiceGlyph({ type }) {
    const common = 'h-6 w-6'
    switch (type) {
        case 'facebook':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
                    <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
                </svg>
            )
        case 'instagram':
            return (
                <svg viewBox="0 0 24 24" fill="currentColor" className={common} aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85 0-3.2.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.18 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.7 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.4-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
                </svg>
            )
        case 'edit':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common} aria-hidden="true">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z" />
                </svg>
            )
        case 'mobile':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common} aria-hidden="true">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                </svg>
            )
        case 'message':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common} aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
                    <path d="M8 12h.01M12 12h.01M16 12h.01" />
                </svg>
            )
        case 'target':
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={common} aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                </svg>
            )
        default:
            return null
    }
}

const services = [
    { glyph: 'facebook', title: 'ניהול פייסבוק', desc: 'עמוד, פוסטים, מענה וקהילה', color: '#1877F2' },
    { glyph: 'instagram', title: 'ניהול אינסטגרם', desc: 'פיד, Stories, Reels ועקביות מותג', color: '#E4405F' },
    { glyph: 'edit', title: 'יצירת תוכן', desc: 'פוסטים, כיתובים וויזuals', color: '#ffb25e' },
    { glyph: 'mobile', title: 'יצירת Stories', desc: 'סטוריז יומיים, מבצעים ותוכן', color: '#7c5cff' },
    { glyph: 'message', title: 'מענה ללקוחות', desc: 'הודעות, לידים ושירות מהיר', color: '#25D366' },
    { glyph: 'target', title: 'פרסום ממומן', desc: 'קמפיינים, קהלים והמרות', color: '#35d0ff' },
]

function trackMouse(e) {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

export default function DigitalManagement() {
    const lemlem = restaurants.find((r) => r.slug === 'lemlem')

    return (
        <section id="digital" className="relative py-28 md:py-36">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="ניהול דיגיטל"
                    title="העסק שלכם פעיל ברשת — בלי שתרדפו אחרי תוכן"
                    description="פייסבוק, אינסטגרם, אתר, תוכן, לידים ופרסום — הכל במקום אחד"
                />

                <Reveal delay={0.05} className="mb-14">
                    <div id="lemlem-case-study" className="card-premium mx-auto grid max-w-4xl scroll-mt-28 items-center gap-8 overflow-hidden p-8 md:grid-cols-[auto_1fr] md:gap-12 md:p-12">
                        <div className="mx-auto aspect-[480/744] w-full max-w-[220px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 sm:max-w-[250px] md:max-w-[290px]">
                            <video
                                src="/videos/lemlem.mp4"
                                title="פוסט של Lemlem בפייסבוק"
                                className="h-full w-full object-contain"
                                autoPlay
                                loop
                                muted
                                playsInline
                                preload="auto"
                            />
                        </div>
                        <div className="text-center md:text-right">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#1877F2]/15 px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#1877F2]">
                                Case Study · Lemlem
                            </span>
                            <h3 className="mt-4 text-2xl font-extrabold text-white">Lemlem — ניהול דיגיטל שוטף</h3>
                            <p className="mt-2 max-w-md leading-relaxed text-mist md:mr-0 md:mx-0 mx-auto">
                                מסעדה אמיתית שמקבלת ממני פוסטים ותנועה בדף הפייסבוק שלה, כולל פוסטים אחרונים
                                שקיבלו תפוצה גבוהה משמעותית — לא רק לוגו על הדף, לקוחות אמיתיים חולקים את החוויה.
                            </p>
                            <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
                                {services.map((service) => (
                                    <span
                                        key={service.title}
                                        className="rounded-full px-3 py-1.5 text-xs font-semibold"
                                        style={{ color: service.color, background: `${service.color}16` }}
                                    >
                                        {service.title}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61573735258450"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2 transition-colors hover:text-white"
                                >
                                    לדף הפייסבוק של Lemlem
                                    <Icon name="external" size={14} />
                                </a>
                                {lemlem && (
                                    <a
                                        href={lemlem.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2 transition-colors hover:text-white"
                                    >
                                        לצפייה בתפריט של Lemlem
                                        <Icon name="external" size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {services.map((service, index) => (
                        <Reveal key={index} delay={index * 0.08} className="h-full">
                            <div onMouseMove={trackMouse} className="card-premium flex h-full flex-col items-center p-5 text-center">
                                <span
                                    className="mb-4 grid h-13 w-13 place-items-center rounded-2xl transition-transform duration-500 hover:scale-110"
                                    style={{ color: service.color, background: `${service.color}16` }}
                                >
                                    <ServiceGlyph type={service.glyph} />
                                </span>
                                <h3 className="text-sm font-bold">{service.title}</h3>
                                <p className="mt-1.5 text-xs leading-relaxed text-mist">{service.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.2} className="mt-14 text-center">
                    <a
                        href={getWhatsAppUrl('היי איתי, אני מעוניין לשמוע על ניהול דיגיטל לעסק שלי')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-accent to-accent-2 px-8 py-4 text-base font-bold text-ink"
                    >
                        <Icon name="whatsapp" size={20} />
                        בואו נדבר על הניהול הדיגיטלי שלכם
                    </a>
                </Reveal>
            </div>
        </section>
    )
}
