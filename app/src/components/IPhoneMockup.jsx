/* Reusable realistic iPhone device frame — dynamic island, side buttons, dark bezel.
   Sizing is controlled purely via `className` (e.g. "w-[220px] sm:w-[240px]") so it can
   wrap anything: a stylized app screen, a real screenshot, or an embedded video. Height
   is driven by whatever's inside, not forced, so content isn't stretched to fit. */
export default function IPhoneMockup({ children, className = 'w-[220px]' }) {
    return (
        <div className={`relative mx-auto rounded-[3rem] border-[6px] border-[#232430] bg-[#0b0c14] shadow-[0_40px_100px_-24px_rgba(0,0,0,0.75)] ${className}`}>
            {/* side buttons */}
            <span aria-hidden="true" className="absolute -left-[7px] top-20 h-8 w-[6px] rounded-l-sm bg-[#232430]" />
            <span aria-hidden="true" className="absolute -left-[7px] top-32 h-12 w-[6px] rounded-l-sm bg-[#232430]" />
            <span aria-hidden="true" className="absolute -right-[7px] top-28 h-16 w-[6px] rounded-r-sm bg-[#232430]" />

            {/* dynamic island */}
            <div aria-hidden="true" className="absolute left-1/2 top-2.5 z-30 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

            {/* screen */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-black">{children}</div>
        </div>
    )
}
