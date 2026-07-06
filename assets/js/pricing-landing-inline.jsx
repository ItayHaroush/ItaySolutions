const CONTACT_EMAIL = 'itay@itaysolutions.com';
const getMailtoUrl = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || 'פנייה מ-Itay Solutions')}`;

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    React.useEffect(() => {
        const checkWhatsApp = () => {
            const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const hasWhatsApp = isMobile || navigator.userAgent.includes('WhatsApp');

            console.log('📱 Device info:', {
                isMobile,
                hasWhatsApp,
                userAgent: navigator.userAgent
            });

            return { isMobile, hasWhatsApp };
        };

        window.deviceInfo = checkWhatsApp();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('🔍 Form submitted with data:', formData);

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('⚠️ אנא מלאו את כל השדות החובה המסומנים ב-*');
            return;
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

תודה 🚀`;

        const phoneNumber = '972547466508';
        console.log('📱 WhatsApp number:', phoneNumber);
        console.log('💬 Message to send:', message);

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        console.log('🔗 WhatsApp URL:', whatsappURL);

        const confirmSend = confirm(`📱 האם ברצונכם לשלוח את ההודעה לוואטסאפ?

ההודעה תישלח ל: +${phoneNumber}

לחצו "אישור" לפתיחת וואטסאפ או "ביטול" לעריכה.`);

        if (confirmSend) {
            try {
                const opened = window.open(whatsappURL, '_blank');

                if (opened) {
                    console.log('✅ WhatsApp opened successfully');

                    setTimeout(() => {
                        const success = confirm(`✅ וואטסאפ נפתח בהצלחה!

🔔 חשוב: אל תשכחו ללחוץ על כפתור השליחה בוואטסאפ!

האם ברצונכם לנקות את הטופס?`);

                        if (success) {
                            setFormData({
                                name: '',
                                email: '',
                                phone: '',
                                subject: '',
                                message: ''
                            });
                            console.log('🧹 Form cleared');
                        }
                    }, 1000);

                } else {
                    throw new Error('Failed to open WhatsApp');
                }

            } catch (error) {
                console.error('❌ Error opening WhatsApp:', error);

                navigator.clipboard.writeText(`Message: ${message}\nPhone: +${phoneNumber}`).then(() => {
                    alert(`⚠️ לא ניתן לפתוח וואטסאפ אוטומטית.

📋 הפרטים הועתקו ללוח!
📱 פתחו וואטסאפ ידנית ושלחו ל: +${phoneNumber}`);
                }).catch(() => {
                    alert(`⚠️ לא ניתן לפתוח וואטסאפ אוטומטית.

📱 אנא פנו ישירות:
טלפון: +${phoneNumber}
אימייל: ${CONTACT_EMAIL}`);
                });
            }
        }
    };

    const contactMethods = [
        {
            icon: 'bxl-whatsapp',
            title: '<i class="fas fa-comment-dots"></i> וואטסאפ - תגובה מהירה',
            info: 'קבלו הצעת מחיר תוך 24 שעות',
            link: 'https://wa.me/+972547466508?text=היי איתי! אני מעוניין לשמוע על שירותי הפיתוח שלך',
            color: '#25D366'
        },
        {
            icon: 'bx-phone',
            title: '<i class="fas fa-phone"></i> שיחת ייעוץ חינמית',
            info: 'חייג עכשיו לשיחת ייעוץ',
            link: 'tel:+972547466508',
            color: '#4f46e5'
        },
        {
            icon: 'bx-envelope',
            title: '<i class="fas fa-envelope"></i> אימייל עסקי',
            info: CONTACT_EMAIL,
            link: getMailtoUrl('פנייה עסקית - פיתוח'),
            color: '#EA4335'
        },
        {
            icon: 'bxl-linkedin',
            title: '<i class="fas fa-briefcase"></i> רשת מקצועית',
            info: 'חיבור עסקי ב-LinkedIn',
            link: 'https://www.linkedin.com/in/itay-haroush-94710b229/?originalSubdomain=il',
            color: '#0A66C2'
        },
        {
            icon: 'bxl-github',
            title: '<i class="fab fa-github"></i> GitHub - קוד פתוח',
            info: 'צפו בפרוייקטים שלי ב-GitHub',
            link: 'https://github.com/itayHaroush',
            color: '#171515'
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info" data-aos="fade-right">
                        <div className="contact-intro">
                            <h3 dangerouslySetInnerHTML={{ __html: '<i class="fas fa-rocket"></i> מוכנים להגדיל את העסק?' }}></h3>
                            <p>
                                <strong>קבלו הצעת מחיר מקצועית ללא התחייבות תוך 24 שעות!</strong>
                                <br /><br />
                                <i className="fas fa-bullseye"></i> יעוץ חינם לבחירת הפתרון המתאים<br />
                                💰 מחירים הוגנים ושקופים<br />
                                ⚡ מסירה מהירה ואמינה<br />
                                🛠️ תמיכה מלאה לאחר המסירה
                            </p>
                        </div>

                        <div className="contact-methods">
                            {contactMethods.map((method, index) => (
                                <a
                                    key={index}
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-method"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="method-icon" style={{ backgroundColor: method.color }}>
                                        <i className={`bx ${method.icon}`}></i>
                                    </div>
                                    <div className="method-info">
                                        <h4 dangerouslySetInnerHTML={{ __html: method.title }}></h4>
                                        <p>{method.info}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="section-header" data-aos="fade-up">
                        <h2>בואו ניצור קשר</h2>
                        <p>מוכנים להפוך את הרעיון שלכם למציאות? אשמח לשמוע על הפרוייקט שלכם</p>

                        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-left">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="השם שלך *"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="כתובת אימייל *"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="מספר טלפון"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="נושא הפרוייקט *"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="ספרו לי על הפרוייקט שלכם... *"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-full">
                                <i className='bx bx-send'></i>
                                שלח הודעה
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
});

const container = document.getElementById('pricing-container');
const root = ReactDOM.createRoot(container);
root.render(<PricingQuote />);

const contactContainer = document.getElementById('contact-container');
if (contactContainer) {
    const contactRoot = ReactDOM.createRoot(contactContainer);
    contactRoot.render(<Contact />);
}
