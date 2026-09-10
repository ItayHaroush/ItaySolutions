# Media map — itaysolutions.com redesign

Real, on-disk media only. Paths are React-root-relative (served from `app/public/`).
No filenames were invented — anything the redesign needed but doesn't have real media for
is listed under **Missing / TODO** instead of being faked.

## TakeEat

| File | Used in | Notes |
|---|---|---|
| `/images/takeeat/logo.png` | Trust, Hero eyebrow badge | Real navbar logo, downloaded from `https://www.takeeat.co.il/icons/takeeat-logo.png` (found via the live site's own JS bundle, `wz="/icons/takeeat-logo.png"`) — replaces the old generic `/images/takeEatLogo.png` (now unused) |
| `/images/restaurants/silbis-taim.jpeg` | SilbisCaseStudy, FoodAndCommerce, RestaurantPartners, TakeEatHeroShowcase | Real client logo/photo |
| `/images/restaurants/lemlem.jpeg` | FoodAndCommerce, RestaurantPartners | Real client (Ethiopian food) |
| `/images/restaurants/bella-mia.png` | FoodAndCommerce, RestaurantPartners | Real client |
| `/images/restaurants/mikeys.png` | FoodAndCommerce, RestaurantPartners | Real client (pizza) |
| `/images/restaurants/khao-lak-thai-experience.jpg` | FoodAndCommerce, RestaurantPartners | Real client (Thai) |
| `/images/restaurants/al-halechem-udim.jpeg` | FoodAndCommerce, RestaurantPartners | Real client ("על הלחם") |

Restaurant list is pulled live from `app/src/data/restaurants.json`, kept in sync with
`api.chefsync.co.il` via `npm run sync:restaurants` (`app/scripts/sync-restaurants.mjs`) —
do not hand-edit that file.

**Brand match (2026-09-09):** confirmed directly from takeeat.co.il's own live JS/CSS
bundles that their navbar wordmark uses the **Rubik** font (`family=Rubik:wght@400;500;600;700`,
with Cairo as a secondary fallback) and their PWA theme color is `#1f2c38`. Rubik is now
loaded in `app/index.html` and applied specifically to the "TakeEat" wordmark in
`Hero.jsx`'s eyebrow badge and the in-mockup "TAKEEAT" label in `TakeEatHeroShowcase.jsx`
— scoped to those two spots, not applied site-wide, so the rest of the site keeps its own
Heebo/Inter type system.

`TakeEatInAction.jsx`'s three "system in action" panels (קטלוג/הזמנה/ניהול) now show real
client photos as backdrops (Bella Mia, Khao Lak, 7 Express Afula) instead of icon-only
cards, and `SilbisCaseStudy.jsx` embeds a real Facebook Reel from the client (Facebook's
own `plugins/video.php` iframe, not a downloaded file).

**Missing / TODO:**
- Real device screenshots of the TakeEat customer app, admin dashboard and tablet catalog
  view (Hero, TakeEatInAction currently use stylized illustrative mockups, not real
  screenshots — swap in real captures when available).
- Android direct-download link and iOS App Store URL (`TAKEEAT_ANDROID_URL` /
  App Store badge in `app/src/lib/constants.js` and `TakeEatApps.jsx` — currently `null` /
  "pending review" copy only).
- Delivery-partner logos (none exist yet — section is messaging-only by design, per the
  no-fabricated-partners rule).
- Desktop/mobile screenshots of the live הצרפתייה הקטנה site (see below) and the confirmed
  takeeat.co.il menu slug for it.

## Retail — 7 אקספרס עפולה (real, confirmed 2026-09-09)

| File | Used in | Source |
|---|---|---|
| `/images/retail/7-express-afula.jpg` | FoodAndCommerce (replaces the earlier placeholder) | Downloaded directly from the live menu page's `og:image` at `https://api.chefsync.co.il/storage/logos/4afad852-fc1a-44ef-864e-a31c8683a815.jpg`, verified via `https://www.takeeat.co.il/7-aksprs-epula/menu` (HTTP 200, og:description "חנות נוחות · מטבח חנות נוחות · עפולה · הזמנה אונליין, משלוח ואיסוף עצמי דרך TakeEat") |

Note: this business is a real live TakeEat tenant but is **not** in the public
`landing-partners` API that `restaurants.json` syncs from (checked directly — only the 6
restaurants are listed there), so it's added by hand in `FoodAndCommerce.jsx` rather than
via the sync script. If it's later added to `landing-partners`, remove the duplicate here.

## Social proof (real, added 2026-09-09)

- Lemlem Facebook page (ongoing content management client): `https://www.facebook.com/profile.php?id=61573735258450` — used in `DigitalManagement.jsx`. No specific reach/view numbers were given, so none are claimed on the site.
- TakeEat's official Facebook page: `https://www.facebook.com/TakeEat55/` — used in `TakeEatApps.jsx`.
- A real Facebook Reel from Silbis, embedded live via Facebook's own `plugins/video.php` iframe in `SilbisCaseStudy.jsx` (not a downloaded/self-hosted video file).

## Buildix

| File | Used in |
|---|---|
| `/images/buildixLogo.png` | Buildix.jsx, Trust |
| `/images/naConstructionLogo.png` | Buildix.jsx (real paying client), Trust |

## Other projects

| File | Used in | Status |
|---|---|---|
| `/images/fulllogo_nobuffer.jpeg` | SelectedProjects, Trust | בינה לבנייה — real website project |
| `/images/barLogo.png` | SelectedProjects, Trust | בר בן אבו — past project, not an active client |
| `/images/appointedCloud.png` | SelectedProjects | Appointed — demoted to "other projects" per new positioning |

## About

| File | Used in |
|---|---|
| `/images/photo_2025-01-04_02-16-56.jpg` | About.jsx |

## הצרפתייה הקטנה — confirmed live (2026-09-09)

Update: the client confirmed the TakeEat proposal was approved. The live site is
`https://la-france-omega.vercel.app/` — fetched and verified directly (HTTP 200, title
"הצרפתייה הקטנה · כשר מהדרין", og:description "מסעדה צרפתית־ישראלית בכשרות מהודרת").
The client also says the business is now listed as a restaurant tenant inside
ChefSync/TakeEat. `LeFranceCaseStudy.jsx` has been upgraded from the earlier
"pending proposal" placeholder to a live-status case study using this confirmed URL.

| File | Used in | Source |
|---|---|---|
| `/images/le-france/logo-green.png` | LeFranceCaseStudy.jsx, Trust | Downloaded directly from `https://la-france-omega.vercel.app/brand/logo-green.png` (HTTP 200, real brand asset) |

Still missing, don't invent:
- The exact `takeeat.co.il/<slug>/menu` URL for this business (not guessed — the
  7 Express Afula example shows the current URL pattern isn't the older `/r/<slug>`
  scheme, so guessing risks a dead link).
- Real desktop/mobile screenshots of the live site and dish/product photography.
