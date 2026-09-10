import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { Reveal } from '../primitives'

export default function DigitalManagementProof() {
    return (
        <section className="relative py-8">
            <div className="mx-auto max-w-6xl px-5">
                <Reveal>
                    <Link
                        to="/services#lemlem-case-study"
                        className="card-premium mx-auto flex max-w-3xl flex-col items-center gap-4 p-6 text-center transition-all hover:-translate-y-0.5 sm:flex-row sm:text-right"
                    >
                        <span className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl bg-[#1877F2]/15 text-[#1877F2]">
                            <Icon name="facebook" size={22} />
                        </span>
                        <div className="flex-1">
                            <h3 className="font-bold text-white">ניהול דיגיטל שעובד בשטח</h3>
                            <p className="mt-1 text-sm leading-relaxed text-mist">
                                לא רק בונה מערכות — גם דואג לנוכחות הדיגיטלית של העסק, כמו אצל Lemlem.
                            </p>
                        </div>
                        <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-accent-2">
                            לצפייה בשירות ובמקרה הבוחן
                            <Icon name="arrowLeft" size={15} />
                        </span>
                    </Link>
                </Reveal>
            </div>
        </section>
    )
}
