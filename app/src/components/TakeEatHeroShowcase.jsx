import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Icon from './Icon'
import IPhoneMockup from './IPhoneMockup'

/* TakeEat-only hero visual: phone (customer catalog + cart) + admin card (orders),
   connected with a small live-order flow. Stylized product UI grounded in TakeEat's
   real, public positioning (menu, cart, secure payment, real-time order tracking) —
   not a literal screenshot. Swap in real device screenshots when available. */

/* Real client photos, not invented dish names/prices — matches what's actually on TakeEat. */
const dishes = [
    { name: 'Mikey’s · פיצה מקומית', img: '/images/restaurants/mikeys.png' },
    { name: 'Lemlem · אוכל אתיופי אותנטי', img: '/images/restaurants/lemlem.jpeg' },
    { name: 'סילביס · טעים בכל ביס', img: '/images/restaurants/silbis-taim.jpeg' },
]

const orderStates = ['התקבלה', 'במטבח', 'בדרך', 'נמסרה']

function PhoneMock() {
    const [cartCount] = useState(2)
    return (
        <IPhoneMockup className="w-[220px] sm:w-[240px]">
            <div className="bg-gradient-to-b from-[#101322] to-[#0a0b12] pt-8">
                <div className="flex items-center justify-between px-4 pt-2 pb-2">
                    <span className="text-[10px] font-bold tracking-wide text-accent-2" style={{ fontFamily: "'Rubik', 'Heebo', sans-serif" }}>TAKEEAT</span>
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-white/70">
                        <Icon name="users" size={11} />
                    </span>
                </div>
                <div className="px-4">
                    <p className="text-[13px] font-extrabold text-white">התפריט שלנו</p>
                    <p className="text-[10px] text-white/45">הזמנה מהירה · תשלום מאובטח</p>
                </div>
                <div className="mt-3 space-y-2 px-4 pb-4">
                    {dishes.map((d, i) => (
                        <motion.div
                            key={d.name}
                            initial={{ opacity: 0, x: 12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.12, duration: 0.6 }}
                            className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/5 px-2.5 py-2"
                        >
                            <img src={d.img} alt="" loading="lazy" className="h-8 w-8 shrink-0 rounded-lg object-cover" />
                            <p className="truncate text-[11px] font-bold text-white/90">{d.name}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="flex items-center justify-between border-t border-white/8 px-4 py-3">
                    <span className="rounded-full bg-gradient-to-l from-accent to-accent-2 px-3 py-1.5 text-[10px] font-bold text-ink">
                        לתשלום
                    </span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-white/60">
                        <Icon name="package" size={12} />
                        {cartCount} בסל
                    </span>
                </div>
            </div>
        </IPhoneMockup>
    )
}

function AdminMock() {
    const [step, setStep] = useState(0)
    useEffect(() => {
        const t = setInterval(() => setStep((s) => (s + 1) % orderStates.length), 2200)
        return () => clearInterval(t)
    }, [])

    return (
        <div className="glass-strong w-full max-w-[280px] overflow-hidden rounded-2xl shadow-[0_32px_80px_-24px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-2 border-b border-white/8 px-4 py-2.5">
                <div className="flex gap-1.5" dir="ltr">
                    <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                    <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                    <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                </div>
                <span className="mx-auto text-[10px] font-semibold text-white/45" dir="ltr">admin.takeeat.co.il</span>
            </div>
            <div className="p-4 text-right" dir="rtl">
                <p className="text-[10px] font-bold tracking-wide text-accent-2">מסך ניהול</p>
                <p className="mt-1 text-sm font-extrabold text-white">הזמנה #{1042}</p>
                <div className="mt-3 flex items-center justify-between gap-1">
                    {orderStates.map((label, i) => (
                        <div key={label} className="flex flex-1 flex-col items-center gap-1">
                            <span
                                className={`h-2 w-2 rounded-full transition-colors duration-500 ${i <= step ? 'bg-accent-2' : 'bg-white/15'}`}
                            />
                            <span className={`text-[8px] font-medium transition-colors duration-500 ${i <= step ? 'text-white/80' : 'text-white/30'}`}>
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-white/8 bg-white/5 p-2">
                        <p className="text-[9px] text-white/40">איסוף / משלוח</p>
                        <p className="mt-0.5 text-xs font-bold text-white">משלוח עד הבית</p>
                    </div>
                    <div className="rounded-lg border border-white/8 bg-white/5 p-2">
                        <p className="text-[9px] text-white/40">תשלום</p>
                        <p className="mt-0.5 text-xs font-bold text-white">בוצע ✓</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TakeEatHeroShowcase() {
    return (
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
                className="pointer-events-none absolute -inset-10 rounded-[3rem] opacity-30 blur-3xl"
                style={{ background: 'radial-gradient(ellipse at center, #35d0ff, transparent 70%)' }}
                aria-hidden="true"
            />

            <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: -3 }}
                    animate={{ opacity: 1, y: 0, rotate: -3 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative z-10"
                >
                    <PhoneMock />
                </motion.div>

                {/* connecting line */}
                <div className="hidden items-center text-white/25 lg:flex" aria-hidden="true">
                    <Icon name="arrowLeft" size={28} />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30, rotate: 2 }}
                    animate={{ opacity: 1, y: 0, rotate: 2 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="relative z-10 lg:mt-10"
                >
                    <AdminMock />
                </motion.div>
            </div>

            <div className="float-slow absolute -right-2 top-0 z-20 hidden rounded-2xl glass px-4 py-2.5 text-[12px] font-medium text-white/75 shadow-xl lg:block" style={{ '--rot': '3deg' }}>
                🟢 מערכת חיה · מזמינים עכשיו
            </div>
            <div className="float-slow absolute -left-4 bottom-4 z-20 hidden rounded-2xl glass px-4 py-2.5 text-[12px] font-medium text-white/75 shadow-xl lg:block" style={{ '--rot': '-2deg', animationDelay: '1.4s' }}>
                <Icon name="shieldCheck" size={13} className="ml-1 inline" />
                תשלום מאובטח
            </div>

            <div className="mx-auto mt-8 flex w-fit">
                <a
                    href="https://takeeat.co.il"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-6 py-3 text-base font-bold text-white/90 shadow-lg transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:text-white hover:-translate-y-1"
                >
                    לצפייה במערכת TakeEat
                    <span aria-hidden="true" dir="ltr" className="text-lg">↗</span>
                </a>
            </div>
        </div>
    )
}
