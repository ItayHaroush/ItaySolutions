export const WHATSAPP_NUMBER = '972547466508'
export const WHATSAPP_DEFAULT_MSG = 'היי איתי, ראיתי את האתר ורוצה לדבר על איך אפשר לקדם את העסק שלי'
export const CONTACT_EMAIL = 'itay@itaysolutions.com'

export const getWhatsAppUrl = (msg) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg || WHATSAPP_DEFAULT_MSG)}`

export const getMailtoUrl = (subject) =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || 'פנייה מ-Itay Solutions')}`
