import { Link } from 'react-router-dom'
import { Reveal, SectionHeader } from '../primitives'

export default function AboutTeaser() {
    return (
        <section className="relative py-24 md:py-32">
            <div className="mx-auto max-w-3xl px-5 text-center">
                <SectionHeader subtitle="עליי" title="מי עומד מאחורי המערכות?" />

                <Reveal>
                    <img
                        src="/images/photo_2025-01-04_02-16-56.jpg"
                        alt="איתי הרוש"
                        loading="lazy"
                        className="mx-auto h-24 w-24 rounded-full border border-white/10 object-cover"
                    />
                    <p className="mt-4 font-bold text-white">איתי הרוש</p>
                    <p className="text-sm text-mist">Founder & Full Stack Developer</p>
                    <p className="mx-auto mt-5 max-w-xl leading-relaxed text-mist">
                        אני בונה מוצרים ומערכות דיגיטליות מקצה לקצה — מאפיון ו-UX/UI ועד Frontend, Backend, API,
                        פרודקשן ותחזוקה. המטרה שלי היא לא רק שהמערכת תיראה טוב — היא צריכה לעבוד באמת.
                    </p>
                    <Link
                        to="/about"
                        className="mt-7 inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
                    >
                        קצת עליי
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
