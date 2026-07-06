import { useState } from 'react'
import Icon from './Icon'
import { Reveal, SectionHeader } from './primitives'
import { getWhatsAppUrl, getMailtoUrl, CONTACT_EMAIL, WHATSAPP_NUMBER } from '../lib/constants'

const contactMethods = [
  {
    icon: 'whatsapp',
    title: 'וואטסאפ — הדרך הכי מהירה',
    info: 'שיחה קצרה, בלי התחייבות',
    link: getWhatsAppUrl(),
    color: '#25D366',
  },
  {
    icon: 'phone',
    title: 'שיחת ייעוץ',
    info: '054-746-6508',
    link: 'tel:+972547466508',
    color: '#4f46e5',
  },
  {
    icon: 'mail',
    title: 'אימייל',
    info: CONTACT_EMAIL,
    link: getMailtoUrl('פנייה מ-Itay Solutions'),
    color: '#EA4335',
  },
  {
    icon: 'linkedin',
    title: 'LinkedIn',
    info: 'חיבור מקצועי',
    link: 'https://www.linkedin.com/in/itay-haroush-94710b229/?originalSubdomain=il',
    color: '#0A66C2',
  },
]

const inputClass =
  'w-full rounded-xl border border-white/10 bg-white/4 px-5 py-3.5 text-[15px] text-white placeholder:text-white/35 outline-none transition-all duration-300 focus:border-accent/60 focus:bg-white/6 focus:shadow-[0_0_0_4px_rgba(255,122,26,0.12)]'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('⚠️ אנא מלאו את כל השדות החובה המסומנים ב-*')
      return
    }

    const message = `⭐ *פנייה חדשה מהאתר!*

👤 *פרטים אישיים:*
• שם: ${formData.name}
• אימייל: ${formData.email}
${formData.phone ? `• טלפון: ${formData.phone}` : ''}

🎯 *פרטי הפרוייקט:*
• נושא: ${formData.subject}
• תיאור: ${formData.message}

💼 *בקשה:*
מעוניין לקבל הצעת מחיר מקצועית.
אשמח לייעוץ ופגישה! 

תודה 🚀`

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

    const confirmSend = confirm(`📱 האם ברצונכם לשלוח את ההודעה לוואטסאפ?
    
ההודעה תישלח ל: +${WHATSAPP_NUMBER}
    
לחצו "אישור" לפתיחת וואטסאפ או "ביטול" לעריכה.`)

    if (confirmSend) {
      const opened = window.open(whatsappURL, '_blank', 'noopener')
      if (opened) {
        setTimeout(() => {
          const success = confirm(`✅ וואטסאפ נפתח בהצלחה!
                    
🔔 חשוב: אל תשכחו ללחוץ על כפתור השליחה בוואטסאפ!
                    
האם ברצונכם לנקות את הטופס?`)
          if (success) {
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
          }
        }, 1000)
      } else {
        alert(`⚠️ לא ניתן לפתוח וואטסאפ אוטומטית.
                
📱 אנא פנו ישירות:
טלפון: +${WHATSAPP_NUMBER}
אימייל: ${CONTACT_EMAIL}`)
      }
    }
  }

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 bottom-0 h-[36rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,122,26,0.09),transparent_65%)]" />
      </div>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeader
          subtitle="צור קשר"
          title="יש לכם רעיון? בואו נדבר"
          description="שיחה קצרה בוואטסאפ — בלי התחייבות, בלי טפסים ארוכים"
        />

        <Reveal className="-mt-8 mb-16 text-center md:-mt-12">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-3 rounded-full bg-gradient-to-l from-[#128C7E] to-[#25D366] px-9 py-4.5 text-lg font-bold text-white shadow-[0_8px_32px_-8px_rgba(37,211,102,0.55)]"
          >
            <Icon name="whatsapp" size={23} />
            שלחו הודעה בוואטסאפ
          </a>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactMethods.map((method, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-400 hover:bg-white/7 hover:-translate-y-0.5"
                >
                  <span
                    className="grid h-13 w-13 shrink-0 place-items-center rounded-2xl text-white transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: method.color, boxShadow: `0 10px 28px -8px ${method.color}88` }}
                  >
                    <Icon name={method.icon} size={22} />
                  </span>
                  <span>
                    <h4 className="font-bold">{method.title}</h4>
                    <p className="mt-0.5 text-sm text-mist" dir={method.icon === 'phone' || method.icon === 'mail' ? 'ltr' : undefined} style={{ textAlign: 'start' }}>
                      {method.info}
                    </p>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="glass-strong rounded-3xl p-7 md:p-9">
              <p className="mb-6 text-center font-semibold text-white/80">או השאירו פרטים ואחזור אליכם</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="השם שלך *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="כתובת אימייל *"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="מספר טלפון"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={inputClass}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="נושא הפרוייקט *"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={inputClass}
                />
                <textarea
                  name="message"
                  placeholder="ספרו לי על הפרוייקט שלכם... *"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="btn-glow flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-l from-accent to-accent-2 px-7 py-4 text-base font-bold text-ink"
                >
                  <Icon name="send" size={19} />
                  שלח הודעה
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
