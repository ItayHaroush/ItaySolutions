import { Link } from 'react-router-dom'
import Icon from './Icon'
import { Reveal } from './primitives'
import { getWhatsAppUrl, getMailtoUrl, LINKEDIN_URL } from '../lib/constants'

const footerLinks = [
    { to: '/takeeat', label: 'TakeEat' },
    { to: '/buildix', label: 'Buildix' },
    { to: '/projects', label: 'פרויקטים' },
    { to: '/services', label: 'שירותים' },
    { to: '/about', label: 'עליי' },
    { to: '/contact', label: 'צור קשר' },
    { to: '/pricing-landing.html', label: 'מחירון', external: true },
]

const contactLinks = [
    { href: getWhatsAppUrl(), label: 'WhatsApp', icon: 'whatsapp' },
    { href: LINKEDIN_URL, label: 'LinkedIn', icon: 'linkedin' },
    { href: getMailtoUrl(), label: 'Email', icon: 'mail' },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative border-t border-white/8 pt-16 pb-8">
            <div className="mx-auto max-w-6xl px-5">
                <Reveal>
                    <div className="grid gap-10 md:grid-cols-3 md:items-start">
                        <div>
                            <h3 className="text-xl font-extrabold">Itay Solutions</h3>
                            <p className="mt-2 text-mist">מערכות · מוצרים · אתרים · דיגיטל</p>
                        </div>

                        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="ניווט תחתון">
                            {footerLinks.map((link) =>
                                link.external ? (
                                    <a
                                        key={link.label}
                                        href={link.to}
                                        className="text-sm font-medium text-mist transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={link.label}
                                        to={link.to}
                                        className="text-sm font-medium text-mist transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </nav>

                        <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm font-medium text-mist transition-colors hover:text-white"
                                >
                                    <Icon name={link.icon} size={15} />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/6 pt-8 text-center">
                    <p className="text-sm text-white/55">&copy; {currentYear} Itay Solutions. כל הזכויות שמורות.</p>
                    <p className="max-w-2xl text-xs leading-relaxed text-white/35">
                        האתר משתמש בעוגיות (Cookies) לשיפור החוויה ולניתוח תנועה באמצעות Google Analytics. המשך גלישה באתר מהווה הסכמה לשימוש בעוגיות.
                    </p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        aria-label="חזרה לראש הדף"
                        className="glass mt-2 grid h-11 w-11 place-items-center rounded-full text-white/70 transition-all duration-300 hover:bg-accent hover:text-ink hover:-translate-y-1"
                    >
                        <Icon name="arrowUp" size={19} />
                    </button>
                </div>
            </div>
        </footer>
    )
}
