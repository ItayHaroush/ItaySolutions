import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

/* Animated counter used inside the live dashboards */
function AnimatedNumber({ value, suffix = '', duration = 1.4 }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: false })
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        if (!inView) return
        let raf
        const start = performance.now()
        const tick = (now) => {
            const p = Math.min((now - start) / (duration * 1000), 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setDisplay(Math.round(value * eased))
            if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [inView, value, duration])

    return (
        <span ref={ref} className="tabular-nums">
            {display.toLocaleString()}
            {suffix}
        </span>
    )
}

function WindowChrome({ logo, name, url, accent }) {
    return (
        <div className="flex items-center gap-3 border-b border-white/8 px-4 py-2.5">
            <div className="flex gap-1.5" dir="ltr">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-[11px] text-white/50" dir="ltr">
                <span className="h-1.5 w-1.5 rounded-full live-dot" style={{ background: accent }} />
                {url}
            </div>
            <div className="flex items-center gap-1.5">
                <img src={logo} alt={name} className="h-5 w-5 rounded object-contain" />
            </div>
        </div>
    )
}

function BuildixScreen() {
    const bars = [42, 68, 55, 80, 62, 95, 74]
    return (
        <div className="flex h-full flex-col gap-3 p-4">
            <div className="grid grid-cols-3 gap-2.5">
                {[
                    { label: 'הצעות מחיר', value: 128, color: '#ffb25e' },
                    { label: 'פרויקטים פעילים', value: 24, color: '#35d0ff' },
                    { label: 'לידים החודש', value: 47, color: '#7c5cff' },
                ].map((kpi) => (
                    <div key={kpi.label} className="rounded-xl bg-white/4 border border-white/6 p-2.5">
                        <div className="text-lg font-bold" style={{ color: kpi.color }}>
                            <AnimatedNumber value={kpi.value} />
                        </div>
                        <div className="mt-0.5 text-[10px] text-white/45">{kpi.label}</div>
                    </div>
                ))}
            </div>
            <div className="flex-1 rounded-xl bg-white/4 border border-white/6 p-3">
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-white/60">הכנסות חודשיות</span>
                    <span className="text-[11px] font-bold text-accent-2">
                        ₪<AnimatedNumber value={86400} />
                    </span>
                </div>
                <div className="flex h-[72px] items-end justify-between gap-1.5">
                    {bars.map((h, i) => (
                        <div
                            key={i}
                            className="chart-bar w-full rounded-t-md bg-gradient-to-t from-accent/40 to-accent-2"
                            style={{ height: `${h}%`, animationDelay: `${i * 0.09}s` }}
                        />
                    ))}
                </div>
            </div>
            <div className="space-y-1.5">
                {['הצעת מחיר #1042 — נשלחה ללקוח', 'פרויקט רמת גן — עודכן יומן עבודה'].map((row, i) => (
                    <div key={i} className="ticket-in flex items-center gap-2 rounded-lg bg-white/4 px-3 py-1.5 text-[11px] text-white/55" style={{ animationDelay: `${0.4 + i * 0.25}s` }}>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        {row}
                    </div>
                ))}
            </div>
        </div>
    )
}

function TakeEatScreen() {
    const orders = [
        { id: '#2841', items: 'פיצה משפחתית + שתייה', status: 'התקבלה', color: '#ffb25e' },
        { id: '#2842', items: 'סלט קינואה, לחם שום', status: 'בהכנה', color: '#35d0ff' },
        { id: '#2843', items: 'המבורגר כפול + צ׳יפס', status: 'יצא למשלוח', color: '#34d399' },
    ]
    return (
        <div className="flex h-full flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-white/70">הזמנות בזמן אמת</span>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-medium text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 live-dot" />
                    מסעדה פתוחה
                </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl bg-white/4 border border-white/6 p-2.5">
                    <div className="text-lg font-bold text-accent-2">
                        <AnimatedNumber value={73} />
                    </div>
                    <div className="text-[10px] text-white/45">הזמנות היום</div>
                </div>
                <div className="rounded-xl bg-white/4 border border-white/6 p-2.5">
                    <div className="text-lg font-bold text-cyan">
                        ₪<AnimatedNumber value={5920} />
                    </div>
                    <div className="text-[10px] text-white/45">מכירות היום</div>
                </div>
            </div>
            <div className="flex-1 space-y-2">
                {orders.map((o, i) => (
                    <div key={o.id} className="ticket-in flex items-center justify-between rounded-xl bg-white/4 border border-white/6 px-3 py-2" style={{ animationDelay: `${0.3 + i * 0.3}s` }}>
                        <div>
                            <div className="text-[12px] font-semibold text-white/80" dir="ltr">{o.id}</div>
                            <div className="text-[10px] text-white/45">{o.items}</div>
                        </div>
                        <span className="rounded-full px-2.5 py-1 text-[10px] font-medium" style={{ color: o.color, background: `${o.color}18` }}>
                            {o.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

function AppointedScreen() {
    const days = ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳']
    const slots = [
        { time: '09:00', name: 'דנה לוי — תספורת', filled: true },
        { time: '10:30', name: 'יוסי כהן — פגישת ייעוץ', filled: true },
        { time: '12:00', name: 'פנוי', filled: false },
        { time: '13:30', name: 'מיכל אברהם — טיפול', filled: true },
    ]
    return (
        <div className="flex h-full flex-col gap-3 p-4">
            <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-white/70">יומן תורים — היום</span>
                <span className="text-[11px] font-bold text-violet">
                    <AnimatedNumber value={18} /> תורים השבוע
                </span>
            </div>
            <div className="grid grid-cols-5 gap-1.5">
                {days.map((d, i) => (
                    <div key={d} className={`rounded-lg py-1.5 text-center text-[11px] font-medium ${i === 2 ? 'bg-gradient-to-b from-violet/70 to-violet/40 text-white' : 'bg-white/4 text-white/40'}`}>
                        {d}
                    </div>
                ))}
            </div>
            <div className="flex-1 space-y-2">
                {slots.map((s, i) => (
                    <div
                        key={s.time}
                        className={`ticket-in flex items-center gap-3 rounded-xl border px-3 py-2 ${s.filled ? 'bg-white/4 border-white/6' : 'border-dashed border-white/12 bg-transparent'}`}
                        style={{ animationDelay: `${0.3 + i * 0.22}s` }}
                    >
                        <span className="text-[11px] font-bold text-white/70 tabular-nums" dir="ltr">{s.time}</span>
                        <span className={`text-[11px] ${s.filled ? 'text-white/60' : 'text-white/30'}`}>{s.name}</span>
                        {s.filled && <span className="mr-auto h-1.5 w-1.5 rounded-full bg-violet live-dot" />}
                    </div>
                ))}
            </div>
        </div>
    )
}

const systems = [
    { key: 'buildix', name: 'Buildix', url: 'buildix.site', logo: '/images/buildixLogo.png', accent: '#ff7a1a', Screen: BuildixScreen },
    { key: 'takeeat', name: 'TakeEat', url: 'takeeat.co.il', logo: '/images/takeEatLogo.png', accent: '#35d0ff', Screen: TakeEatScreen },
    { key: 'appointed', name: 'Appointed', url: 'appointed.cloud', logo: '/images/appointedCloud.png', accent: '#7c5cff', Screen: AppointedScreen },
]

export default function LiveShowcase() {
    const [active, setActive] = useState(0)

    useEffect(() => {
        const t = setInterval(() => setActive((a) => (a + 1) % systems.length), 5000)
        return () => clearInterval(t)
    }, [])

    const current = systems[active]

    return (
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* glow behind */}
            <div
                className="absolute -inset-8 rounded-[3rem] blur-3xl transition-colors duration-1000 opacity-25"
                style={{ background: `radial-gradient(ellipse at center, ${current.accent}, transparent 70%)` }}
            />

            <div className="glass-strong relative overflow-hidden rounded-3xl shadow-[0_48px_120px_-32px_rgba(0,0,0,0.85)]">
                <WindowChrome logo={current.logo} name={current.name} url={current.url} accent={current.accent} />
                <div className="relative h-[340px] sm:h-[360px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.key}
                            initial={{ opacity: 0, y: 24, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -16, scale: 0.99 }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0"
                        >
                            <current.Screen />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* system switcher */}
            <div className="mt-5 flex items-center justify-center gap-2">
                {systems.map((s, i) => (
                    <button
                        key={s.key}
                        onClick={() => setActive(i)}
                        aria-label={`הצגת ${s.name}`}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-400 ${i === active ? 'glass-strong text-white shadow-lg' : 'text-white/40 hover:text-white/70'
                            }`}
                    >
                        <img src={s.logo} alt="" className="h-4.5 w-4.5 rounded object-contain" />
                        {s.name}
                    </button>
                ))}
            </div>

            {/* floating chips */}
            <div className="float-slow absolute -right-4 -top-6 hidden rounded-2xl glass px-4 py-2.5 text-[12px] font-medium text-white/75 shadow-xl lg:block" style={{ '--rot': '3deg' }}>
                ⚡ מערכות שרצות בשטח
            </div>
            <div className="float-slow absolute -left-6 bottom-16 hidden rounded-2xl glass px-4 py-2.5 text-[12px] font-medium text-white/75 shadow-xl lg:block" style={{ '--rot': '-2deg', animationDelay: '1.6s' }}>
                🟢 Live
            </div>
        </div>
    )
}
