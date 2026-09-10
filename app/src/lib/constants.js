export const WHATSAPP_NUMBER = '972547466508'
export const WHATSAPP_DEFAULT_MSG = 'היי איתי, ראיתי את האתר ורוצה לדבר על איך אפשר לקדם את העסק שלי'
export const CONTACT_EMAIL = 'itay@itaysolutions.com'

export const TAKEEAT_URL = 'https://takeeat.co.il'
export const BUILDIX_URL = 'https://www.buildix.site'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/itay-haroush-94710b229/?originalSubdomain=il'

/* TODO: Android is currently distributed outside the official Play Store — replace with the
   real direct-download / APK link once available. iOS is pending Apple App Store review. */
export const TAKEEAT_ANDROID_URL = null
export const TAKEEAT_IOS_STATUS = 'pending_review'

export const getWhatsAppUrl = (msg) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg || WHATSAPP_DEFAULT_MSG)}`

export const getMailtoUrl = (subject) =>
    `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || 'פנייה מ-Itay Solutions')}`
