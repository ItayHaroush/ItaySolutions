import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { Reveal } from '../primitives'
import { getWhatsAppUrl, CONTACT_EMAIL } from '../../lib/constants'

export default function ClosingCTA() {
    return (
        <section id="contact" className="relative py-28 md:py-36">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.14),transparent_65%)]" />
            </div>
            <div className="relative mx-auto max-w-3xl px-5 text-center">
                <Reveal>
                    <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-gradient-soft sm:text-4xl md:text-[2.6rem]">
                        יש לכם רעיון שצריך להפוך למערכת?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist">
                        ספרו לי מה העסק צריך. נחשוב יחד איך להפוך את זה למוצר שעובד.
                    </p>
                </Reveal>

                <Reveal delay={0.15} className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                    <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow flex items-center gap-2.5 rounded-full bg-gradient-to-l from-accent to-accent-2 px-7 py-4 text-base font-bold text-ink"
                    >
                        <Icon name="whatsapp" size={19} />
                        דברו איתי בוואטסאפ
                    </a>
                    <Link
                        to="/contact"
                        className="glass flex items-center gap-2.5 rounded-full px-7 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
                    >
                        השאירו פרטים
                    </Link>
                </Reveal>

                <Reveal delay={0.3} className="mt-8 flex flex-col items-center gap-2 text-sm text-mist sm:flex-row sm:justify-center sm:gap-6">
                    <span>054-746-6508</span>
                    <span>{CONTACT_EMAIL}</span>
                </Reveal>
            </div>
        </section>
    )
}
