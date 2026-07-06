import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Icon from './Icon'
import { Reveal, TextReveal } from './primitives'
import { getWhatsAppUrl } from '../lib/constants'

const processSteps = ['רעיון', 'אפיון', 'פיתוח', 'השקה', 'ליווי']

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yImg = useTransform(scrollYProgress, [0, 1], [60, -60])
  const scaleImg = useTransform(scrollYProgress, [0, 0.5], [1.12, 1])

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(124,92,255,0.08),transparent_65%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_48px_120px_-32px_rgba(0,0,0,0.85)]">
              <motion.img
                style={{ y: yImg, scale: scaleImg }}
                src="/images/photo_2025-01-04_02-16-56.jpg"
                alt="איתי הרוש"
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="glass-strong absolute bottom-4 right-4 left-4 rounded-2xl px-5 py-3.5">
                <p className="font-bold">איתי הרוש</p>
                <p className="text-sm text-mist">מייסד Itay Solutions</p>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium tracking-wide text-accent-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent live-dot" />
                עלי
              </span>
            </Reveal>
            <TextReveal
              as="h2"
              text="לא בונה אתרים — בונה פתרונות לעסקים"
              delay={0.1}
              className="mt-5 block text-3xl font-extrabold leading-[1.15] tracking-tight text-gradient-soft sm:text-4xl md:text-[2.6rem]"
            />
            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-relaxed text-mist">
                אני איתי הרוש, מייסד Itay Solutions. עובד עם עסקים קטנים ובינוניים בישראל — קבלנים, מסעדות, מורים, אדריכלים ובעלי מקצוע.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 text-lg leading-relaxed text-mist">
                לא מוסר קובץ ונעלם. מלווה מהרעיון, דרך הפיתוח והניהול הדיגיטלי, ועד שהמערכת או האתר עובדים בשטח — כולל Buildix, TakeEat ו-Appointix.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-1.5">
                {processSteps.map((step, i) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="glass rounded-full px-4 py-2 text-sm font-semibold text-white/85 transition-colors duration-300 hover:bg-accent/15 hover:text-accent-2">
                      {step}
                    </span>
                    {i < processSteps.length - 1 && (
                      <Icon name="chevronLeft" size={15} className="text-white/30" />
                    )}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow mt-9 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-l from-accent to-accent-2 px-8 py-4 text-base font-bold text-ink"
              >
                <Icon name="whatsapp" size={20} />
                בואו נעבוד יחד
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
