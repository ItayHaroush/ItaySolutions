import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon'
import { getWhatsAppUrl } from '../lib/constants'

const menuItems = [
    { id: 'portfolio', label: 'פרויקטים' },
    { id: 'ongoing', label: 'עבודה שוטפת' },
    { id: 'digital', label: 'ניהול דיגיטל' },
    { id: 'about', label: 'עלי' },
    { id: 'contact', label: 'צור קשר' },
]

export default function Header({ activeSection, scrollToSection }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const go = (id) => {
        scrollToSection(id)
        setIsMenuOpen(false)
    }

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
        >
            <nav
                className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6 ${isScrolled ? 'glass-strong shadow-[0_16px_48px_-16px_rgba(0,0,0,0.7)]' : 'border border-transparent'
                    }`}
            >
                <button
                    onClick={() => go('home')}
                    className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
                    aria-label="Itay Solutions - חזרה לראש הדף"
                >
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-accent-2 to-accent text-ink shadow-[0_8px_24px_-6px_rgba(255,122,26,0.6)]">
                        <Icon name="sparkle" size={18} />
                    </span>
                    <span>Itay Solutions</span>
                </button>

                <div className="hidden items-center gap-1 lg:flex">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => go(item.id)}
                            className={`relative rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-300 ${activeSection === item.id ? 'text-white' : 'text-mist hover:text-white'
                                }`}
                        >
                            {activeSection === item.id && (
                                <motion.span
                                    layoutId="nav-pill"
                                    className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                                    transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
                                />
                            )}
                            <span className="relative">{item.label}</span>
                        </button>
                    ))}
                    <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-glow mr-3 flex items-center gap-2 rounded-full bg-gradient-to-l from-accent to-accent-2 px-5 py-2.5 text-[15px] font-semibold text-ink"
                    >
                        <Icon name="whatsapp" size={17} />
                        דברו בוואטסאפ
                    </a>
                </div>

                <button
                    className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
                    aria-expanded={isMenuOpen}
                >
                    <motion.span animate={isMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="h-[2px] w-6 rounded bg-white" />
                    <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="h-[2px] w-6 rounded bg-white" />
                    <motion.span animate={isMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="h-[2px] w-6 rounded bg-white" />
                </button>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.98 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="glass-strong mx-auto mt-2 max-w-6xl rounded-2xl p-4 shadow-2xl lg:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {menuItems.map((item, i) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => go(item.id)}
                                    className="rounded-xl px-4 py-3 text-right text-base font-medium text-mist transition-colors hover:bg-white/5 hover:text-white"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <a
                                href={getWhatsAppUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-glow mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-l from-accent to-accent-2 px-5 py-3 font-semibold text-ink"
                            >
                                <Icon name="whatsapp" size={18} />
                                דברו בוואטסאפ
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
