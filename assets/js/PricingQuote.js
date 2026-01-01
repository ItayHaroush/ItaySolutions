// Pricing Quote Component with detailed pricing
const PricingQuote = () => {
    const pricingData = [
        {
            id: 'business-site',
            icon: 'bx-building-house',
            title: '🏢 אתר תדמית לעסקים',
            description: 'אתר מקצועי שמייצג את העסק שלך ומביא לקוחות חדשים',
            priceRange: '3,000 - 8,000',
            currency: '₪',
            timeline: '2-4 שבועות',
            features: [
                'עיצוב מותאם למותג העסקי',
                'עד 7 עמודים תוכן',
                'SEO מובנה להופעה בגוגל',
                'מותאם לכל המכשירים (Responsive)',
                'מערכת ניהול תוכן פשוטה',
                'טופס יצירת קשר',
                'אינטגרציה לרשתות חברתיות',
                'אחסון שנה ראשונה'
            ],
            popular: true
        },
        {
            id: 'business-card',
            icon: 'bx-id-card',
            title: '💳 אתר כרטיס ביקור',
            description: 'אתר מינימליסטי עם פרטי התקשרות וטופס יצירת קשר',
            priceRange: '1,500 - 3,000',
            currency: '₪',
            timeline: '1-2 שבועות',
            features: [
                'עמוד יחיד מעוצב',
                'פרטי התקשרות ברורים',
                'קישור מהיר לוואטסאפ',
                'טופס יצירת קשר פשוט',
                'מותאם למובייל',
                'קישורים לרשתות חברתיות',
                'מפה לעסק (Google Maps)',
                'אחסון שנה ראשונה'
            ]
        },
        {
            id: 'landing-newsletter',
            icon: 'bx-envelope',
            title: '📧 דף נחיתה + ניוזלטר',
            description: 'פתרון שממיר גולשים ללקוחות עם ניוזלטר אוטומטי',
            priceRange: '2,500 - 5,000',
            currency: '₪',
            timeline: '2-3 שבועות',
            features: [
                'דף נחיתה ממוקד המרות',
                'מערכת ניוזלטר אוטומטית',
                'טפסי הרשמה חכמים',
                'אינטגרציה עם כלי שיווק',
                'אנליטיקס ומעקב המרות',
                'עיצוב UI/UX ממיר',
                'אופטימיזציה למובייל',
                'תמיכה חודש ראשון'
            ]
        },
        {
            id: 'mobile-app',
            icon: 'bx-mobile',
            title: '📱 אפליקציות מובייל',
            description: 'אפליקציות מותאמות אישית למובייל עם חוויית משתמש מעולה',
            priceRange: '8,000 - 20,000',
            currency: '₪',
            timeline: '4-8 שבועות',
            features: [
                'פיתוח Native או Cross-Platform',
                'עיצוב UI/UX מותאם למובייל',
                'אינטגרציה עם API ושרתים',
                'התראות Push',
                'בדיקות איכות מקיפות',
                'פרסום ל-App Store / Play Store',
                'תיעוד מפורט',
                'תמיכה 3 חודשים'
            ]
        },
        {
            id: 'maintenance',
            icon: 'bx-wrench',
            title: '🔧 תחזוקה שוטפת',
            description: 'שמירה על האתר מעודכן, מאובטח ומהיר לאורך זמן',
            priceRange: '300 - 800',
            currency: '₪/חודש',
            timeline: 'שירות חודשי',
            features: [
                'עדכוני אבטחה שוטפים',
                'גיבויים אוטומטיים יומיים',
                'תמיכה טכנית מהירה',
                'תיקוני באגים',
                'שיפורי ביצועים',
                'ניטור זמינות 24/7',
                'עדכוני תוכן (עד 2 שעות/חודש)',
                'דוחות ביצועים חודשיים'
            ]
        }
    ];

    const handleSelectPricing = (id) => {
        setTimeout(() => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <section id="pricing" className="pricing-quote">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">הצעות מחיר</span>
                    <h2 className="section-title">מחירים שקופים והוגנים</h2>
                    <p className="section-description">
                        בחרו את החבילה המתאימה לכם - מחירים תחרותיים ללא הפתעות
                    </p>
                </div>

                <div className="pricing-grid" data-aos="fade-up" data-aos-delay="100">
                    {pricingData.map((pricing, index) => (
                        <div
                            key={pricing.id}
                            className={`pricing-card ${pricing.popular ? 'popular' : ''}`}
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            {pricing.popular && <span className="popular-badge">⭐ הכי פופולרי</span>}

                            <div className="pricing-header">
                                <div className="pricing-icon">
                                    <i className={`bx ${pricing.icon}`}></i>
                                </div>
                                <h3>{pricing.title}</h3>
                                <p className="pricing-description">{pricing.description}</p>
                            </div>

                            <div className="pricing-price">
                                <span className="price-amount">{pricing.priceRange}</span>
                                <span className="price-currency">{pricing.currency}</span>
                            </div>

                            <div className="pricing-timeline">
                                <i className='bx bx-time-five'></i>
                                <span>{pricing.timeline}</span>
                            </div>

                            <ul className="pricing-features">
                                {pricing.features.map((feature, i) => (
                                    <li key={i}>
                                        <i className='bx bx-check-circle'></i>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className="btn-pricing"
                                onClick={() => handleSelectPricing(pricing.id)}
                            >
                                <i className='bx bx-message-detail'></i>
                                בואו נדבר
                            </button>
                        </div>
                    ))}
                </div>

                <div className="pricing-notes" data-aos="fade-up" data-aos-delay="300">
                    <div className="note-card">
                        <i className='bx bx-info-circle'></i>
                        <div className="note-content">
                            <h4>💡 למה המחירים בטווח?</h4>
                            <p>
                                המחיר הסופי תלוי במורכבות הפרויקט, כמות העמודים, פיצ'רים מיוחדים ואינטגרציות נוספות.
                                <strong> נספק הצעת מחיר מדויקת לאחר שיחת ייעוץ קצרה.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="note-card">
                        <i className='bx bx-gift'></i>
                        <div className="note-content">
                            <h4>🎁 מה כלול בכל חבילה?</h4>
                            <p>
                                כל החבילות כוללות: ייעוץ ותכנון, קוד נקי ומסודר, הדרכה בסיסית,
                                <strong> אחריות לתקופת האחריות הנקובה ותמיכה טכנית.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="note-card">
                        <i className='bx bx-money'></i>
                        <div className="note-content">
                            <h4>💳 תנאי תשלום גמישים</h4>
                            <p>
                                50% מקדמה בתחילת הפרויקט,
                                <strong> 50% יתרה עם מסירת העבודה.</strong> אפשרות לפריסת תשלומים בפרויקטים גדולים.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pricing-cta" data-aos="fade-up" data-aos-delay="400">
                    <h3>לא בטוחים איזו חבילה מתאימה לכם?</h3>
                    <p>בואו נדבר! אני כאן כדי לעזור לכם למצוא את הפתרון המושלם</p>
                    <a href="#contact" className="btn btn-primary btn-large">
                        <i className='bx bx-phone'></i>
                        צרו קשר לייעוץ חינם
                    </a>
                </div>
            </div>
        </section>
    );
};
