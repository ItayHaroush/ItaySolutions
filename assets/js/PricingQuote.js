// Pricing Quote Component with interactive pricing calculator
const PricingQuote = () => {
    const [selectedPackages, setSelectedPackages] = React.useState({});
    const [selectedAddons, setSelectedAddons] = React.useState({});
    const [showDealsModal, setShowDealsModal] = React.useState(false);
    const [showOfferPopup, setShowOfferPopup] = React.useState(true);
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);
    const [expandedAddons, setExpandedAddons] = React.useState({});

    const pricingData = [
        {
            id: 'business-site',
            icon: 'bx-building-house',
            title: '<i class="fas fa-building"></i> אתר תדמית לעסקים',
            description: 'אתר מקצועי שמייצג את העסק שלך ומביא לקוחות חדשים',
            basePrice: 3300,
            originalPrice: 4800,
            discount: 31,
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
            addons: [
                { id: 'extra-pages', name: 'עמודים נוספים (כל עמוד)', price: 300 },
                { id: 'ecommerce-basic', name: 'חנות אונליין בסיסית (עד 20 מוצרים)', price: 1450 },
                { id: 'multilingual', name: 'תמיכה רב-לשונית (אנגלית)', price: 850 },
                { id: 'blog', name: 'בלוג מקצועי', price: 550 },
                { id: 'custom-forms', name: 'טפסים מותאמים אישית', price: 420 }
            ],
            popular: true,
            dealBadge: 'מבצע השקה',
            dealBadgeIcon: 'bxs-hot',
            gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
        },
        {
            id: 'business-card',
            icon: 'bx-id-card',
            title: '<i class="fas fa-credit-card"></i> אתר כרטיס ביקור',
            description: 'אתר מינימליסטי עם פרטי התקשרות וטופס יצירת קשר',
            basePrice: 1350,
            originalPrice: 1900,
            discount: 29,
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
            ],
            addons: [
                { id: 'gallery', name: 'גלריית תמונות', price: 300 },
                { id: 'booking', name: 'אינטגרציית Appointed.cloud לניהול תורים', price: 500 },
                { id: 'reviews', name: 'מערכת המלצות לקוחות', price: 350 }
            ],
            dealBadge: 'מחיר מבצע',
            dealBadgeIcon: 'bxs-zap',
            gradient: 'linear-gradient(135deg, #10b981, #14b8a6)'
        },
        {
            id: 'landing-newsletter',
            icon: 'bx-envelope',
            title: '<i class="fas fa-envelope"></i> דף נחיתה + ניוזלטר',
            description: 'פתרון שממיר גולשים ללקוחות עם ניוזלטר אוטומטי',
            basePrice: 2400,
            originalPrice: 3400,
            discount: 29,
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
            ],
            addons: [
                { id: 'ab-testing', name: 'מערכת A/B Testing', price: 1050 },
                { id: 'advanced-analytics', name: 'אנליטיקס מתקדם', price: 550 },
                { id: 'automation', name: 'אוטומציות שיווק', price: 850 }
            ],
            dealBadge: 'חבילה שווה',
            dealBadgeIcon: 'bxs-diamond',
            gradient: 'linear-gradient(135deg, #f59e0b, #f97316)'
        },
        {
            id: 'mobile-app',
            icon: 'bx-mobile',
            title: '<i class="fas fa-mobile-alt"></i> אפליקציות מובייל',
            description: 'אפליקציות מותאמות אישית למובייל עם חוויית משתמש מעולה',
            basePrice: 8800,
            originalPrice: 13000,
            discount: 32,
            currency: '₪',
            timeline: '4-8 שבועות',
            features: [
                'פיתוח Cross-Platform (iOS + Android)',
                'עיצוב UI/UX מותאם למובייל',
                'אינטגרציה עם API ושרתים',
                'התראות Push',
                'בדיקות איכות מקיפות',
                'פרסום ל-App Store / Play Store',
                'תיעוד מפורט',
                'תמיכה 3 חודשים'
            ],
            addons: [
                { id: 'native-dev', name: 'פיתוח Native (במקום Cross-Platform)', price: 3500 },
                { id: 'backend', name: 'פיתוח Backend מלא', price: 4200 },
                { id: 'admin-panel', name: 'פאנל ניהול מתקדם', price: 2500 },
                { id: 'payment-integration', name: 'אינטגרציית תשלומים', price: 1400 }
            ],
            dealBadge: 'מבצע ענק',
            dealBadgeIcon: 'bxs-rocket',
            gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
        },
        {
            id: 'maintenance',
            icon: 'bx-wrench',
            title: '<i class="fas fa-wrench"></i> תחזוקה שוטפת',
            description: 'שמירה על האתר מעודכן, מאובטח ומהיר לאורך זמן',
            basePrice: 300,
            originalPrice: 450,
            discount: 33,
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
            ],
            addons: [
                { id: 'extra-hours', name: 'שעות תוכן נוספות (שעה)', price: 110 },
                { id: 'priority-support', name: 'תמיכה עדיפות 24/7', price: 140 },
                { id: 'seo-monthly', name: 'אופטימיזציה חודשית SEO', price: 350 }
            ],
            dealBadge: 'מחיר מיוחד',
            dealBadgeIcon: 'bxs-star',
            gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)'
        }
    ];

    const comboDeals = [
        {
            id: 'startup-package',
            title: 'חבילת STARTUP מושלמת',
            icon: 'bxs-rocket',
            items: ['אתר תדמית לעסקים', 'דף נחיתה + ניוזלטר', 'תחזוקה 12 חודשים'],
            regularPrice: 8500,
            dealPrice: 6000,
            savings: 2500,
            badge: 'מבצע בלעדי',
            badgeIcon: 'bxs-flame',
            gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#6366f1'
        },
        {
            id: 'digital-pro',
            title: 'חבילת DIGITAL PRO',
            icon: 'bxs-briefcase-alt-2',
            items: ['אתר תדמית מלא', 'אפליקציית מובייל', 'תחזוקה 12 חודשים', 'SEO חודשי'],
            regularPrice: 16500,
            dealPrice: 12000,
            savings: 4500,
            badge: 'החבילה הכי משתלמת',
            badgeIcon: 'bxs-crown',
            gradient: 'linear-gradient(135deg, #f59e0b, #f97316)',
            color: '#f59e0b'
        },
        {
            id: 'quick-start',
            title: 'QUICK START',
            icon: 'bxs-bolt',
            items: ['אתר כרטיס ביקור', 'תחזוקה 6 חודשים'],
            regularPrice: 3000,
            dealPrice: 2100,
            savings: 900,
            badge: 'מתנה לעסק חדש',
            badgeIcon: 'bxs-gift',
            gradient: 'linear-gradient(135deg, #10b981, #14b8a6)',
            color: '#10b981'
        }
    ];

    const limitedTimeOffer = {
        endDate: '2026-03-31',
        discount: 15,
        message: 'מבצע לזמן מוגבל! הנחה נוספת של 15% על כל החבילות עד סוף מרץ',
        icon: 'bx-time-five'
    };

    const toggleAddon = (packageId, addonId, price) => {
        setSelectedAddons(prev => {
            const packageAddons = prev[packageId] || {};
            const newPackageAddons = {
                ...packageAddons,
                [addonId]: packageAddons[addonId] ? undefined : price
            };
            return {
                ...prev,
                [packageId]: newPackageAddons
            };
        });
    };

    const calculateTotal = (packageId, basePrice) => {
        const addonsTotal = Object.values(selectedAddons[packageId] || {})
            .filter(Boolean)
            .reduce((sum, price) => sum + price, 0);
        return basePrice + addonsTotal;
    };

    const handleSelectPricing = (packageId, pricing) => {
        const total = calculateTotal(packageId, pricing.basePrice);
        const selectedAddonsList = pricing.addons?.filter(addon =>
            selectedAddons[packageId]?.[addon.id]
        ).map(addon => addon.name) || [];

        const message = `*הזמנת חבילה מהאתר!*

*חבילה נבחרת:*
${pricing.title.replace(/<[^>]*>/g, '')}

*מחיר:*
מחיר בסיס: ${pricing.basePrice.toLocaleString()}₪
${selectedAddonsList.length > 0 ? `\n*תוספות שנבחרו:*\n${selectedAddonsList.map(name => `• ${name}`).join('\n')}` : ''}
*סה"כ: ${total.toLocaleString()}₪*

*זמן ביצוע משוער:* ${pricing.timeline}

מעוניין לקבל הצעת מחיר מפורטת!`;

        const phoneNumber = '972547466508';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const handleSelectComboDeal = (deal) => {
        const message = `*התעניינות בחבילת מבצע!*

${deal.badge} - ${deal.title}

*החבילה כוללת:*
${deal.items.map(item => `✓ ${item}`).join('\n')}

*מחירים:*
מחיר רגיל: ~~${deal.regularPrice.toLocaleString()}₪~~
*מחיר מבצע: ${deal.dealPrice.toLocaleString()}₪*
חוסכים: ${deal.savings.toLocaleString()}₪

אשמח לשמוע פרטים נוספים!`;

        const phoneNumber = '972547466508';
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    };

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev + 1);
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide((prev) => prev - 1);
    };

    const goToSlide = (index) => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentSlide(index);
    };

    // Reset to actual position after transition
    React.useEffect(() => {
        if (!isTransitioning) return;

        const timer = setTimeout(() => {
            setIsTransitioning(false);

            if (currentSlide >= pricingData.length) {
                setCurrentSlide(0);
            } else if (currentSlide < 0) {
                setCurrentSlide(pricingData.length - 1);
            }
        }, 500); // Match transition duration

        return () => clearTimeout(timer);
    }, [currentSlide, isTransitioning, pricingData.length]);

    // Create extended array with clones for infinite effect
    const extendedPricingData = [
        pricingData[pricingData.length - 1], // Clone last at start
        ...pricingData,
        pricingData[0] // Clone first at end
    ];

    const getTransformValue = () => {
        return -(currentSlide + 1) * 100; // Negative to move track left, +1 for clone at start
    };

    const toggleAddonsExpand = (packageId) => {
        setExpandedAddons(prev => ({ ...prev, [packageId]: !prev[packageId] }));
    };

    return (
        <section id="pricing" className="pricing-quote">
            <div className="container">
                {/* Offer Popup */}
                {showOfferPopup && (
                    <div className="offer-popup-overlay" onClick={() => setShowOfferPopup(false)}>
                        <div className="offer-popup" onClick={(e) => e.stopPropagation()}>
                            <button className="popup-close" onClick={() => setShowOfferPopup(false)}>
                                <i className='bx bx-x'></i>
                            </button>
                            <div className="popup-icon">
                                <i className={`bx ${limitedTimeOffer.icon}`}></i>
                            </div>
                            <h3 className="popup-title">מבצע לזמן מוגבל!</h3>
                            <p className="popup-message">{limitedTimeOffer.message}</p>
                            <button className="popup-cta" onClick={() => setShowOfferPopup(false)}>
                                <i className='bx bx-check'></i>
                                הבנתי, בואו נתחיל!
                            </button>
                        </div>
                    </div>
                )}

                <div className="section-header" data-aos="fade-up">
                    <h2 className="section-title">
                        <i className='bx bxs-hot'></i>
                        מבצעים נרחבים - חוסכים אלפי שקלים!
                    </h2>
                    <p className="section-description">
                        בחרו חבילת בסיס והוסיפו תוספות לפי הצורך - מחירים תחרותיים עם הנחות ענק!
                    </p>
                </div>

                {/* Combo Deals Section */}
                <div className="combo-deals-section" data-aos="fade-up">
                    <h3 className="combo-title">
                        <i className='bx bxs-gift'></i>
                        חבילות משולבות - החיסכון הכי גדול!
                    </h3>
                    <div className="combo-deals-grid">
                        {comboDeals.map((deal, index) => (
                            <div
                                key={deal.id}
                                className="combo-deal-card"
                                style={{ borderTop: `4px solid ${deal.color}` }}
                                data-aos="flip-left"
                                data-aos-delay={index * 100}
                            >
                                <div className="combo-badge" style={{ background: deal.gradient }}>
                                    <i className={`bx ${deal.badgeIcon}`}></i>
                                    <span>{deal.badge}</span>
                                </div>
                                <div className="combo-icon" style={{ background: deal.gradient }}>
                                    <i className={`bx ${deal.icon}`}></i>
                                </div>
                                <h4>{deal.title}</h4>

                                <ul className="combo-items">
                                    {deal.items.map((item, i) => (
                                        <li key={i}>
                                            <i className='bx bx-check-double'></i>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="combo-pricing">
                                    <div className="price-comparison">
                                        <span className="regular-price">
                                            ~~{deal.regularPrice.toLocaleString()}₪~~
                                        </span>
                                        <span className="deal-price">
                                            {deal.dealPrice.toLocaleString()}₪
                                        </span>
                                    </div>
                                    <div className="savings-badge">
                                        <i className='bx bx-dollar-circle'></i>
                                        חוסכים {deal.savings.toLocaleString()}₪!
                                    </div>
                                </div>

                                <button
                                    className="btn-combo-deal"
                                    style={{ background: deal.gradient }}
                                    onClick={() => handleSelectComboDeal(deal)}
                                >
                                    <i className='bx bx-cart'></i>
                                    אני רוצה את החבילה!
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Individual Packages */}
                <div className="individual-packages" data-aos="fade-up">
                    <h3 className="packages-title">
                        <i className='bx bx-customize'></i>
                        חבילות בודדות
                    </h3>
                    <p className="packages-subtitle">בחרו חבילה והוסיפו תוספות לפי הצורך</p>
                </div>

                {/* Pricing Carousel */}
                <div className="pricing-carousel-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <button className="carousel-nav prev" onClick={prevSlide} aria-label="כרטיס קודם">
                        <i className="fas fa-chevron-left"></i>
                    </button>

                    <div className="pricing-carousel">
                        <div
                            className="pricing-carousel-track"
                            style={{
                                transform: `translateX(${getTransformValue()}%)`,
                                transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                            }}
                        >
                            {extendedPricingData.map((pricing, index) => {
                                const total = calculateTotal(pricing.id, pricing.basePrice);
                                const hasAddons = Object.values(selectedAddons[pricing.id] || {}).some(Boolean);

                                return (
                                    <div
                                        key={`${pricing.id}-${index}`}
                                        className={`pricing-card-slide ${pricing.popular ? 'popular' : ''}`}
                                    >
                                        <div className="pricing-card">
                                            {pricing.popular && <span className="popular-badge">
                                                <i className='bx bxs-star'></i>
                                                הכי פופולרי
                                            </span>}

                                            {pricing.dealBadge && (
                                                <div className="deal-badge-top" style={{ background: pricing.gradient }}>
                                                    <i className={`bx ${pricing.dealBadgeIcon}`}></i>
                                                    <span>{pricing.dealBadge}</span>
                                                </div>
                                            )}

                                            <div className="pricing-header">
                                                <div className="pricing-icon" style={{ background: pricing.gradient }}>
                                                    <i className={`bx ${pricing.icon}`}></i>
                                                </div>
                                                <h3 dangerouslySetInnerHTML={{ __html: pricing.title }}></h3>
                                                <p className="pricing-description">{pricing.description}</p>
                                            </div>

                                            <div className="pricing-price">
                                                {pricing.discount > 0 && (
                                                    <div className="original-price">
                                                        <span className="strikethrough">{pricing.originalPrice.toLocaleString()}{pricing.currency}</span>
                                                        <span className="discount-badge">-{pricing.discount}%</span>
                                                    </div>
                                                )}
                                                <div className="current-price">
                                                    <span className="price-amount">{pricing.basePrice.toLocaleString()}</span>
                                                    <span className="price-currency">{pricing.currency}</span>
                                                </div>
                                                {hasAddons && (
                                                    <div className="total-with-addons">
                                                        + תוספות: <strong>{total.toLocaleString()}₪</strong>
                                                    </div>
                                                )}
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

                                            {/* Addons Selection - Collapsible */}
                                            {pricing.addons && pricing.addons.length > 0 && (
                                                <div className="addons-section">
                                                    <h4
                                                        className="addons-title addons-toggle"
                                                        onClick={() => toggleAddonsExpand(pricing.id)}
                                                        role="button"
                                                        tabIndex={0}
                                                        onKeyDown={(e) => e.key === 'Enter' && toggleAddonsExpand(pricing.id)}
                                                        aria-expanded={expandedAddons[pricing.id]}
                                                    >
                                                        <i className={`bx ${expandedAddons[pricing.id] ? 'bx-chevron-down' : 'bx-chevron-left'}`}></i>
                                                        תוספות אופציונליות
                                                        {Object.values(selectedAddons[pricing.id] || {}).filter(Boolean).length > 0 && (
                                                            <span className="addons-count">({Object.values(selectedAddons[pricing.id] || {}).filter(Boolean).length})</span>
                                                        )}
                                                    </h4>
                                                    <div className={`addons-list ${expandedAddons[pricing.id] ? 'expanded' : 'collapsed'}`}>
                                                        {pricing.addons.map((addon) => (
                                                            <label key={addon.id} className="addon-checkbox">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={!!selectedAddons[pricing.id]?.[addon.id]}
                                                                    onChange={() => toggleAddon(pricing.id, addon.id, addon.price)}
                                                                />
                                                                <span className="addon-name">{addon.name}</span>
                                                                <span className="addon-price">+{addon.price.toLocaleString()}₪</span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            <button
                                                className="btn-pricing"
                                                onClick={() => handleSelectPricing(pricing.id, pricing)}
                                            >
                                                <i className='bx bxl-whatsapp'></i>
                                                {hasAddons ? `הזמן ב-${total.toLocaleString()}₪` : 'הזמן עכשיו'}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <button className="carousel-nav next" onClick={nextSlide} aria-label="כרטיס הבא">
                        <i className="fas fa-chevron-right"></i>
                    </button>

                    {/* Carousel Indicators */}
                    <div className="carousel-indicators">
                        {pricingData.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            >
                                <span className="sr-only">עבור לחבילה {index + 1}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pricing-notes" data-aos="fade-up" data-aos-delay="300">
                    <div className="note-card">
                        <i className='bx bx-info-circle'></i>
                        <div className="note-content">
                            <h4 dangerouslySetInnerHTML={{ __html: '<i class="fas fa-lightbulb"></i> למה המחירים בטווח?' }}></h4>
                            <p>
                                המחיר הסופי תלוי במורכבות הפרויקט, כמות העמודים, פיצ'רים מיוחדים ואינטגרציות נוספות.
                                <strong> נספק הצעת מחיר מדויקת לאחר שיחת ייעוץ קצרה.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="note-card">
                        <i className='bx bx-gift'></i>
                        <div className="note-content">
                            <h4 dangerouslySetInnerHTML={{ __html: '<i class="fas fa-gift"></i> מה כלול בכל חבילה?' }}></h4>
                            <p>
                                כל החבילות כוללות: ייעוץ ותכנון, קוד נקי ומסודר, הדרכה בסיסית,
                                <strong> אחריות לתקופת האחריות הנקובה ותמיכה טכנית.</strong>
                            </p>
                        </div>
                    </div>

                    <div className="note-card">
                        <i className='bx bx-money'></i>
                        <div className="note-content">
                            <h4 dangerouslySetInnerHTML={{ __html: '<i class="fas fa-credit-card"></i> תנאי תשלום גמישים' }}></h4>
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
