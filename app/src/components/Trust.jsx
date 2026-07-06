import { SectionHeader } from './primitives'

const trustLogos = [
  { name: 'NA Construction', image: '/images/naConstructionLogo.png' },
  { name: 'בינה לבנייה', image: '/images/fulllogo_nobuffer.jpeg' },
  { name: 'בר בן אבו', image: '/images/barLogo.png' },
  { name: 'TakeEat', image: '/images/takeEatLogo.png' },
  { name: 'Buildix', image: '/images/buildixLogo.png' },
  { name: 'Appointed', image: '/images/appointedCloud.png' },
]

export default function Trust() {
  const doubled = [...trustLogos, ...trustLogos]

  return (
    <section id="trust" className="relative py-28 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          subtitle="למה לעבוד איתי"
          title="עסקים אמיתיים. מערכות אמיתיות."
          description="לקוחות ומוצרים שעובדים בשטח — לא רק על המסך"
        />
      </div>

      <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_left,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee-track flex w-max gap-6" dir="ltr">
          {doubled.map((logo, index) => (
            <div
              key={index}
              className="glass flex w-52 flex-col items-center gap-3 rounded-2xl px-6 py-7 transition-all duration-500 hover:bg-white/8 hover:-translate-y-1"
            >
              <img src={logo.image} alt={logo.name} loading="lazy" className="h-16 w-16 rounded-xl object-contain" />
              <span className="text-sm font-semibold text-white/70">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
