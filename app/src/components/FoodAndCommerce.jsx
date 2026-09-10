import Icon from './Icon'
import CrystalBallLogo from './CrystalBallLogo'
import { Reveal, SectionHeader } from './primitives'
import restaurants from '../data/restaurants.json'
import retail from '../data/retail.json'

/* נתוני החנות (כולל תמונות המוצרים לאפקט "כדור הבדולח") נמשכים
   מ-api.chefsync.co.il ע"י npm run sync:restaurants */
const store = retail[0]

/* לוגואים עגולים כמו בחנות — הובר מציג את תמונות התפריט האמיתיות שלהן (אותו CrystalBallLogo) */
function FoodGrid() {
    return (
        <div className="grid grid-cols-3 gap-x-2.5 gap-y-6 sm:grid-cols-3">
            {restaurants.map((r) => (
                <a
                    key={r.slug}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 text-center"
                >
                    <CrystalBallLogo logo={r.logo} name={r.name} photos={r.menuPhotos || []} size="h-16 w-16 sm:h-20 sm:w-20" />
                    <p className="truncate text-[11px] font-semibold text-white/70 transition-colors group-hover:text-white">{r.name}</p>
                </a>
            ))}
        </div>
    )
}

function CommerceCard() {
    if (!store) return null

    return (
        <a
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-premium group relative flex h-full flex-col items-center justify-center gap-4 p-10 text-center transition-transform duration-500 hover:-translate-y-1"
        >
            <span className="absolute right-4 top-4 rounded-full bg-gradient-to-l from-accent to-accent-2 px-3 py-1 text-xs font-bold text-ink">
                חדש
            </span>
            <CrystalBallLogo logo={store.logo} name={store.name} photos={store.menuPhotos || []} size="h-20 w-20 border border-white/10" />
            <div>
                <p className="font-bold text-white/90">{store.name}</p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-accent-2">חנות נוחות · פעילה עכשיו ב-TakeEat</p>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
                    לא רק מסעדות. אותה תשתית מריצה עכשיו גם חנות נוחות אמיתית — לקוחות בוחרים מוצרים ומזמינים
                    למשלוח או איסוף, בדיוק כמו במסעדה.
                </p>
            </div>
            <span className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-2 transition-colors group-hover:text-white">
                לצפייה בתפריט
                <Icon name="external" size={14} />
            </span>
        </a>
    )
}

export default function FoodAndCommerce() {
    return (
        <section id="use-cases" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="TakeEat מתרחבת"
                    title="אוכל שאפשר להזמין, מוצרים שאפשר להזמין"
                    description="TakeEat התחילה במסעדות — ועכשיו רצה גם על חנות נוחות אמיתית. אותה מערכת, בלי עמלה על כל הזמנה, תשלום חודשי קבוע"
                />

                <div className="grid gap-6 lg:grid-cols-2">
                    <Reveal>
                        <div>
                            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wide text-accent-2">
                                <Icon name="layers" size={16} />
                                אוכל · מנות אמיתיות שאפשר להזמין
                            </h3>
                            <FoodGrid />
                        </div>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <div className="flex h-full flex-col">
                            <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-wide text-white/50">
                                <Icon name="store" size={16} />
                                מסחר · מוצרים שאפשר להזמין
                            </h3>
                            <div className="flex-1">
                                <CommerceCard />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
