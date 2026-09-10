import Icon from './Icon'
import { Reveal, SectionHeader } from './primitives'
import { getWhatsAppUrl, TAKEEAT_ANDROID_URL } from '../lib/constants'

export default function TakeEatApps() {
    return (
        <section id="apps" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="אפליקציות"
                    title="TakeEat גם באפליקציה"
                    description="חוויית הזמנה מהירה מהטלפון — לא רק מהדפדפן"
                />

                <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
                    <Reveal>
                        <div className="card-premium flex h-full flex-col items-center gap-4 p-8 text-center">
                            <Icon name="smartphone" size={28} className="text-[#3ddc84]" />
                            <div>
                                <h3 className="text-lg font-bold text-white">Android</h3>
                                <p className="mt-1 text-sm text-mist">זמינה כרגע להורדה ישירה — עדיין לא דרך חנות Google Play הרשמית</p>
                            </div>
                            {TAKEEAT_ANDROID_URL ? (
                                <a
                                    href={TAKEEAT_ANDROID_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-glow mt-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-accent to-accent-2 px-6 py-3 text-sm font-bold text-ink"
                                >
                                    <Icon name="smartphone" size={16} />
                                    הורדה ל-Android
                                </a>
                            ) : (
                                <a
                                    href={getWhatsAppUrl('היי, אשמח לקבל קישור להורדת אפליקציית TakeEat ל-Android')}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-glow mt-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-l from-accent to-accent-2 px-6 py-3 text-sm font-bold text-ink"
                                >
                                    <Icon name="whatsapp" size={16} />
                                    בקשת קישור להורדה
                                </a>
                            )}
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <div className="card-premium flex h-full flex-col items-center gap-4 p-8 text-center opacity-90">
                            <Icon name="smartphone" size={28} className="text-white/70" />
                            <div>
                                <h3 className="text-lg font-bold text-white">iOS</h3>
                                <p className="mt-1 text-sm text-mist">האפליקציה נמצאת כעת בתהליך בדיקה מול Apple App Store</p>
                            </div>
                            <span className="mt-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white/70">
                                <Icon name="clock" size={16} />
                                מחכים לאישור Apple
                            </span>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.2}>
                    <p className="mx-auto mt-8 max-w-lg text-center text-sm text-white/40">
                        ברגע שהאפליקציה תאושר ב-App Store, האזור הזה יתעדכן אוטומטית עם קישור ישיר להורדה.
                    </p>
                </Reveal>

                <Reveal delay={0.25} className="mt-6 text-center">
                    <a
                        href="https://www.facebook.com/TakeEat55/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#1877F2] transition-colors hover:text-white"
                    >
                        <Icon name="facebook" size={16} />
                        עקבו אחרי TakeEat בפייסבוק
                    </a>
                </Reveal>
            </div>
        </section>
    )
}
