// Pricing Quote Component - real current offering (2026)
const PricingQuote = () => {
    const packages = [
        {
            id: 'basic',
            icon: 'bx-rocket',
            title: '<i class="fas fa-fire-alt"></i> Basic - התחלה חזקה',
            description: 'למי שרוצה להתחיל למכור ישירות ללקוחות בלי עמלות - תפריט דיגיטלי, הזמנות בזמן אמת וניהול מלא',
            priceType: 'monthly',
            monthlyPrice: 250,
            currency: '₪',
            timeline: '60 ימי ניסיון חינם',
            features: [
                'אתר הזמנות ממותג במלואו',
                'ניהול תפריט מלא עם עדכוני זמן אמת',
                'מסך הזמנות בזמן אמת',
                'אזורי משלוח ודמי משלוח',
                'דוחות בסיסיים של מכירות',
                'תפריט QR דיגיטלי',
                '0% עמלות על הזמנות ישירות'
            ],
            badge: 'הכי משתלם להתחלה',
            badgeIcon: 'bxs-bolt-circle',
            gradient: 'linear-gradient(135deg, #ff7a1a, #f59e0b)'
        },
        {
            id: 'pro',
            icon: 'bxs-crown',
            title: '<i class="fas fa-crown"></i> Pro - צמיחה וכלים חכמים',
            description: 'למי שרוצה להגדיל מכירות ולשמור על לקוחות - כל מה שב-Basic + מבצעים, מועדון נאמנות וכלים ניהול מתקדמים',
            priceType: 'monthly',
            monthlyPrice: 450,
            currency: '₪',
            timeline: '60 ימי ניסיון חינם',
            features: [
                'כל מה שב-Basic',
                'מבצעים וקופונים חכמים',
                'מועדון לקוחות ותוכנית נאמנות',
                'מסך מטבח + מסוף קופה (POS)',
                'דוחות מתקדמים ותובנות AI',
                'התראות Push ועדכונים בוואטסאפ',
                '0% עמלות על כל הזמנה'
            ],
            popular: true,
            badge: 'המבחר הפופולרי',
            badgeIcon: 'bxs-star',
            gradient: 'linear-gradient(135deg, #6366f1, #ff7a1a)'
        },
        {
            id: 'enterprise',
            icon: 'bx-building-house',
            title: '<i class="fas fa-sitemap"></i> Enterprise - רשתות וחברות גדולות',
            description: 'לרשתות עסקים, חברות פרנצ׳יזה ומפעלים - כל מה שב-Pro + מספר סניפים, התאמות ייעודיות וליווי אישי',
            priceType: 'custom',
            monthlyPrice: null,
            currency: '₪',
            timeline: 'ליווי מלא בהטמעה',
            features: [
                'כל מה שב-Pro',
                'תמיכה ב-מספר סניפים',
                'התאמות ייעודיות לצרכי העסק',
                'ליווי אישי בהטמעה',
                'SLA ותמיכה מורחבת 24/7',
                'דוחות מותאמים ואנליטיקה מתקדמת',
                'שילוב עם מערכות קיימות'
            ],
            badge: 'עבור עסקים גדולים',
            badgeIcon: 'bxs-rocket',
            gradient: 'linear-gradient(135deg, #3b82f6, #6366f1)'
        }
    ];

    const formatShekel = (value) => value.toLocaleString('he-IL') + '₪';

    const handleSelectPricing = (pkg) => {
        let priceLines;
        if (pkg.priceType === 'monthly') {
            priceLines = `מנוי חודשי: ${formatShekel(pkg.monthlyPrice)}\nניסיון חינם: 60 ימים`;
        } else if (pkg.priceType === 'custom') {
            priceLines = 'הצעת מחיר מותאמת - כדי לפרטים בואנו נדברים';
        }

        const message = `*התעניינות בהצעת מחיר מהאתר!*

*חבילה נבחרת:*
${pkg.title.replace(/<[^>]*>/g, '')}

*מחיר:*
${priceLines}

*זמן ביצוע משוער:* ${pkg.timeline}

אשמח לקבל פרטים נוספים!`;
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const handleContactCustom = () => {
        const message = 'היי איתי! מעוניין/ת בפיתוח אתר או מערכת מותאמת אישית לעסק שלי. אשמח לשמוע פרטים ולקבל הצעת מחיר.';
        const phoneNumber = '972547466508';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <section id="pricing" className="pricing-quote">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">
                        <i className='bx bx-purchase-tag'></i>
                        חבילות ומחירים
                    </h2>
                    <p className="section-description">
                        שלוש חבילות מוכנות למערכות הזמנות לעסקים - מחנויות וקפה בר ועד מסעדות ותוכניות אם רוצים לעסקים גדולים. בנוסף, פיתוח תוכנה מותאם אישית לכל צורך דיגיטלי.
                    </p>
                </div>

                <div className="individual-packages" data-aos="fade-up">
                    <h3 className="packages-title">
                        <i className='bx bx-store-alt'></i>
                        תוכניות הזמנות ללעסקים
                    </h3>
                    <p className="packages-subtitle">בחרו את התוכנית המתאימה לגודל וצרכי העסק שלכם</p>
                </div>

                <div className="pricing-grid pricing-grid-static swiper swiper-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">
                            <div className="pricing-card">
                                {pkg.popular && <span className="popular-badge">
                                    <i className='bx bxs-star'></i>
                                    הכי פופולרי
                                </span>}

                                {pkg.badge && (
                                    <div className="deal-badge-top" style={{ background: pkg.gradient }}>
                                        <i className={`bx ${pkg.badgeIcon}`}></i>
                                        <span>{pkg.badge}</span>
                                    </div>
                                )}

                                <div className="pricing-header">
                                    <div className="pricing-icon" style={{ background: pkg.gradient }}>
                                        <i className={`bx ${pkg.icon}`}></i>
                                    </div>
                                    <h3 dangerouslySetInnerHTML={{ __html: pkg.title }}></h3>
                                    <p className="pricing-description">{pkg.description}</p>
                                </div>

                                <div className="pricing-price">
                                    {pkg.priceType === 'monthly' ? (
                                        <div className="dual-price">
                                            <div className="dual-price-item dual-price-item-main">
                                                <span className="dual-price-label">מנוי חודשי</span>
                                                <span className="dual-price-value">{pkg.monthlyPrice.toLocaleString()}{pkg.currency}</span>
                                            </div>
                                            <div className="dual-price-note">
                                                <small>60 ימי ניסיון חינם • 12 חודשים כלולים בהקמה</small>
                                            </div>
                                        </div>
                                    ) : pkg.priceType === 'custom' ? (
                                        <div className="pricing-card-custom">
                                            <span className="custom-price-label">התאמה לעסק<br/>שלך בדיוק</span>
                                            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                                                צור קשר לפרטים והקמה מלאה
                                            </p>
                                            <button onClick={() => handleSelectPricing(pkg)} className="btn-pricing btn-pricing-outline" style={{ marginTop: '1rem', width: '100%' }}>
                                                <i className='bx bxs-message-dots'></i>
                                                דברו איתנו
                                            </button>
                                        </div>
                                    ) : null}
                                </div>

                                <div className="pricing-timeline">
                                    <i className='bx bx-time-five'></i>
                                    <span>{pkg.timeline}</span>
                                </div>

                                <ul className="pricing-features">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <i className='bx bx-check-circle'></i>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className="btn-pricing" onClick={() => handleSelectPricing(pkg)}>
                                    <i className='bx bxl-whatsapp'></i>
                                    מעוניין/ת בחבילה זו
                                </button>
                            </div>
                        </div>
                    ))}
                    </div>

                    {/* Swiper pagination and navigation buttons */}
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>

                <div className="pricing-notes" data-aos="fade-up" data-aos-delay="300">
                    <div className="note-card">
                        <i className='bx bx-info-circle'></i>
                        <div className="note-content">
                            <h4 dangerouslySetInnerHTML={{ __html: '<i class="fas fa-lightbulb"></i> איך בוחרים חבילה?' }}></h4>
                            <p>
                                <strong>Basic</strong> למי שרוצה להתחיל מהר עם תמיכה בעברית מלאה ואין עמלות על הזמנות.
                                <strong> Pro</strong> למי שרוצה כלים למרטינג ובניית לקוחות קבוצים. 
                                <strong>Enterprise</strong> לרשתות ועסקים גדולים שצריכים התאמות ייעודיות.
                            </p>
                        </div>
                    </div>

                    <div className="note-card">
                        <i className='bx bx-gift'></i>
                        <div className="note-content">
                            <h4 dangerouslySetInnerHTML={{ __html: '<i class="fas fa-gift"></i> מה כלול בכל חבילה?' }}></h4>
                            <p>
                                ייעוץ ותכנון, הקמה מקצועית, הדרכה על המערכת,
                                <strong> ותמיכה טכנית שוטפת לאורך כל תקופת השימוש.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="note-card">
                        <i className='bx bx-money'></i>
                        <div className="note-content">
                            <h4 dangerouslySetInnerHTML={{ __html: '<i class="fas fa-credit-card"></i> יש לכם צורך שונה?' }}></h4>
                            <p>
                                מעבר לחבילות ההזמנות, אני מפתח אתרים ומערכות מותאמות אישית לכל סוג עסק -
                                <strong> צרו קשר לשיחת ייעוץ ותמחור לפי הפרויקט שלכם.</strong>
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
