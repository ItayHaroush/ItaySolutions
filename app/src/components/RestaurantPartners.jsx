import Icon from './Icon'
import CrystalBallLogo from './CrystalBallLogo'
import { Reveal, SectionHeader } from './primitives'
import restaurants from '../data/restaurants.json'

/* הנתונים (כולל תמונות התפריט לאפקט "כדור הבדולח") נמשכים
   מ-api.chefsync.co.il ע"י npm run sync:restaurants */

/* עסקים עם Case Study אמיתי (מספרים מוכחים) — מוצג כמשושי-נתון נוספים
   בהובר על הלוגו, במקום סקשן נפרד בדף הבית. מפתח = slug מ-restaurants.json.
   restaurants.json עצמו נדרס ע"י ה-sync script, אז הנתונים האלה נשמרים כאן. */
const CASE_STUDY_STATS = {
    'silbis-taim': [
        { value: '+6 חוד׳', label: 'עובדים עם TakeEat ברצף' },
        { value: '~350', label: 'לקוחות פעילים באפליקציה' },
        { value: '1 מערכת', label: 'לתפריט, הזמנות וניהול' },
    ],
}

/* הצרפתייה הקטנה: מערכת הזמנות פרטית במיתוג מלא (לא תפריט משותף ב-takeeat.co.il),
   ולכן ה-API הפומבי של landing-partners לא מחזיר אותה — נשארת סטטית כאן
   כדי לא להימחק בכל הרצה של npm run sync:restaurants. */
const EXTRA_RESTAURANTS = [
    {
        id: 'le-france',
        name: 'הצרפתייה הקטנה',
        slug: 'le-france',
        logo: '/images/le-france/logo-green.png',
        href: 'https://la-france-omega.vercel.app/',
        menuPhotos: [],
    },
]

function trackMouse(e) {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

function RestaurantCard({ restaurant, index }) {
    const stats = CASE_STUDY_STATS[restaurant.slug]

    return (
        <Reveal delay={Math.min(index, 5) * 0.08}>
            <a
                href={restaurant.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={trackMouse}
                className="card-premium group flex h-full flex-col items-center gap-4 p-6 text-center transition-transform duration-500 hover:-translate-y-1.5"
            >
                <CrystalBallLogo logo={restaurant.logo} name={restaurant.name} photos={restaurant.menuPhotos || []} stats={stats || []} />

                <h3 className="text-base font-bold leading-snug text-white/90">{restaurant.name}</h3>

                {stats && (
                    <span className="-mt-2 inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] font-medium tracking-wide text-accent-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent live-dot" />
                        Case Study · עברו עם העכבר על הלוגו
                    </span>
                )}

                <span className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-2 transition-colors group-hover:text-white">
                    לתפריט
                    <Icon name="external" size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:-translate-x-0.5" />
                </span>
            </a>
        </Reveal>
    )
}

const allRestaurants = [...EXTRA_RESTAURANTS, ...restaurants]

export default function RestaurantPartners() {
    if (allRestaurants.length === 0) return null

    return (
        <section id="restaurants" className="relative py-28 md:py-32">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeader
                    subtitle="לקוחות TakeEat"
                    title="מסעדות שרצות על המערכת שלי"
                    description="עסקים אמיתיים שמקבלים הזמנות דרך TakeEat כל יום — לחצו כדי לראות תפריט חי"
                />

                <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                    {allRestaurants.map((restaurant, index) => (
                        <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />
                    ))}
                </div>

                <Reveal delay={0.2}>
                    <div className="mt-12 text-center">
                        <a
                            href="https://takeeat.co.il"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white"
                        >
                            צפו במערכת TakeEat
                            <Icon name="external" size={16} />
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
