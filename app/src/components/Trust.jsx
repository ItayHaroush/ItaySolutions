import CrystalBallLogo from './CrystalBallLogo'
import { Reveal, SectionHeader } from './primitives'
import restaurants from '../data/restaurants.json'
import retail from '../data/retail.json'

/*
 * Two clearly labeled, curated groups instead of one mixed marquee — TakeEat clients
 * (pulled live from the same JSON RestaurantPartners/FoodAndCommerce use, so it can't drift)
 * are never mixed with Itay Solutions' own clients/projects.
 */
const takeEatClients = restaurants.map((r) => ({ name: r.name, image: r.logo, photos: r.menuPhotos }))
const retailClients = retail.map((r) => ({ name: r.name, image: r.logo, photos: r.menuPhotos }))
/* La France is a TakeEat case study client, not part of restaurants.json — added manually so its logo isn't missing here. */
const leFranceClient = { name: 'הצרפתייה הקטנה', image: '/images/le-france/logo-green.png', fit: 'contain' }
const takeEatGroup = [...takeEatClients, ...retailClients, leFranceClient]

/* Real, but not in the landing-partners feed — no real menu/item photos to show, so plain logo only. */
const itaySolutionsGroup = [
    { name: 'Buildix', image: '/images/buildixLogo.png', fit: 'contain' },
    { name: 'NA Construction', image: '/images/naConstructionLogo.png', fit: 'contain' },
    { name: 'בינה לבנייה', image: '/images/fulllogo_nobuffer.jpeg', fit: 'contain' },
    { name: 'בר בן אבו', image: '/images/barLogo.png', fit: 'contain' },
]

function LogoRow({ logos }) {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {logos.map((logo) => (
                <div key={logo.name} className="flex w-28 flex-col items-center gap-2.5">
                    <CrystalBallLogo
                        logo={logo.image}
                        name={logo.name}
                        photos={logo.photos || []}
                        fit={logo.fit || 'cover'}
                        size="h-14 w-14"
                    />
                    <span className="text-center text-xs font-semibold text-white/60">{logo.name}</span>
                </div>
            ))}
        </div>
    )
}

export default function Trust() {
    return (
        <section id="trust" className="relative py-24 md:py-28">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-5xl px-5">
                <SectionHeader
                    subtitle="למה לעבוד איתי"
                    title="מוצרים ועסקים אמיתיים. לא רק תיק עבודות."
                />

                <div className="grid gap-14 sm:grid-cols-2">
                    <Reveal>
                        <h3 className="mb-6 text-center text-sm font-bold tracking-wide text-accent-2">לקוחות TakeEat</h3>
                        <LogoRow logos={takeEatGroup} />
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h3 className="mb-6 text-center text-sm font-bold tracking-wide text-accent-2">
                            לקוחות ופרויקטים · Itay Solutions
                        </h3>
                        <LogoRow logos={itaySolutionsGroup} />
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
