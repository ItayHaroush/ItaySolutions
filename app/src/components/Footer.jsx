import Icon from './Icon'
import { Reveal } from './primitives'

const footerLinks = [
  { href: '#home', label: 'בית' },
  { href: '#portfolio', label: 'פרויקטים' },
  { href: '#ongoing', label: 'עבודה שוטפת' },
  { href: '#digital', label: 'ניהול דיגיטל' },
  { href: '#about', label: 'עלי' },
  { href: '#contact', label: 'צור קשר' },
  { href: '/pricing-landing.html', label: 'מחירון' },
]

export default function Footer({ scrollToSection }) {
  const currentYear = new Date().getFullYear()

  const onLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      scrollToSection(href.slice(1))
    }
  }

  return (
    <footer className="relative border-t border-white/8 pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-3 md:items-start">
            <div>
              <h3 className="text-xl font-extrabold">Itay Solutions</h3>
              <p className="mt-2 text-mist">פיתוח מערכות, אתרים וניהול דיגיטל לעסקים</p>
            </div>

            <div className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-[#4285F4] shadow-lg">
                <Icon name="google" size={24} />
              </span>
              <div>
                <h4 className="font-bold">⭐ אהבתם? תנו כוכב!</h4>
                <p className="text-sm text-mist">דרגו אותנו בגוגל בקלי קלות</p>
                <a
                  href="https://share.google/veRJmLN9PbwB475UZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2 transition-colors hover:text-white"
                >
                  צפו בביקורות ודירוגים
                  <Icon name="external" size={14} />
                </a>
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end" aria-label="ניווט תחתון">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => onLinkClick(e, link.href)}
                  className="text-sm font-medium text-mist transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/6 pt-8 text-center">
          <p className="text-sm text-white/55">&copy; {currentYear} איתי הרוש. כל הזכויות שמורות.</p>
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
