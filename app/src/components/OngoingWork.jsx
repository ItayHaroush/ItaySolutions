import { motion } from 'framer-motion'
import Icon from './Icon'
import { Reveal, SectionHeader } from './primitives'
import { getWhatsAppUrl } from '../lib/constants'

const items = ['ניהול רשתות חברתיות', 'עדכוני אתר', 'יצירת תוכן', 'מענה לפניות', 'פרסום ממומן', 'שיפורים ופיתוחים']

export default function OngoingWork() {
  return (
    <section id="ongoing" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,122,26,0.07),transparent_65%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeader
          subtitle="שותפות מתמשכת"
          title="ליווי שוטף לעסקים"
          description="לא רק פרויקט חד-פעמי — שותפות שמקדמת את העסק כל יום"
        />

        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-center text-xl font-medium leading-relaxed text-white/85">
              רוב העסקים לא צריכים "עוד אתר" — הם צריכים מישהו שידאג שהדיגיטל שלהם יעבוד כל יום.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="glass flex items-center gap-3 rounded-2xl px-5 py-4 font-medium text-white/80 transition-colors duration-300 hover:bg-white/8"
              >
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-2">
                  <Icon name="check" size={14} strokeWidth={2.6} />
                </span>
                {item}
              </motion.li>
            ))}
          </ul>

          <Reveal delay={0.3} className="mt-12 text-center">
            <a
              href={getWhatsAppUrl('היי איתי, אני מעוניין לשמוע על ליווי שוטף לעסק שלי')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-accent to-accent-2 px-8 py-4 text-base font-bold text-ink"
            >
              <Icon name="whatsapp" size={20} />
              בואו נדבר על ליווי שוטף
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
