// React Components for Modern Portfolio Landing Page

const WHATSAPP_NUMBER = '972547466508';
const WHATSAPP_DEFAULT_MSG = 'היי איתי, ראיתי את האתר ורוצה לדבר על איך אפשר לקדם את העסק שלי';
const CONTACT_EMAIL = 'itay@itaysolutions.com';
const getWhatsAppUrl = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg || WHATSAPP_DEFAULT_MSG)}`;
const getMailtoUrl = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || 'פנייה מ-Itay Solutions')}`;

// Main App Component
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');

    React.useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 200,
        });

        const handleScroll = () => {
            const sections = ['home', 'portfolio', 'ongoing', 'digital', 'about', 'trust', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <div className="app">
            <Header
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
            />
            <Hero scrollToSection={scrollToSection} />
            <FeaturedWork />
            <OngoingWork />
            <DigitalManagement />
            <AboutSection />
            <TrustSection />
            <Contact />
            <Footer />
            <a
                href={getWhatsAppUrl()}
                className="floating-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="שלחו הודעה בוואטסאפ"
            >
                <i className='bx bxl-whatsapp'></i>
            </a>
        </div>
    );
};

// Header Component
const Header = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollToSection }) => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { id: 'portfolio', label: 'פרויקטים', icon: 'bx-folder' },
        { id: 'ongoing', label: 'עבודה שוטפת', icon: 'bx-refresh' },
        { id: 'digital', label: 'ניהול דיגיטל', icon: 'bx-share-alt' },
        { id: 'about', label: 'עלי', icon: 'bx-user' },
        { id: 'contact', label: 'צור קשר', icon: 'bx-message' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="nav-brand" onClick={() => scrollToSection('home')}>
                    <i className='bx bx-code-alt'></i>
                    <span>Itay Solutions</span>
                </div>

                <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    {menuItems.map(item => (
                        <a
                            key={item.id}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => scrollToSection(item.id)}
                        >
                            <i className={`bx ${item.icon}`}></i>
                            <span>{item.label}</span>
                        </a>
                    ))}
                    <a
                        href={getWhatsAppUrl()}
                        className="nav-whatsapp-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className='bx bxl-whatsapp'></i>
                        <span>דברו בוואטסאפ</span>
                    </a>
                </div>

                <button
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
        </header>
    );
};

// Hero Section Component
const Hero = ({ scrollToSection }) => {
    return (
        <section id="home" className="hero hero-agency">
            <div className="hero-content">
                <div className="hero-text" data-aos="fade-up">
                    <p className="hero-eyebrow">Itay Solutions</p>
                    <h1>
                        בונה מערכות דיגיטליות, אתרים
                        <span className="highlight"> ונוכחות אונליין לעסקים</span>
                    </h1>
                    <p className="hero-tagline">
                        עסקים לא צריכים עוד אתר.
                        הם צריכים מערכת דיגיטלית שעוזרת להם לעבוד טוב יותר ולהביא יותר לקוחות.
                    </p>
                    <p className="hero-pillars">אתרים · מערכות עסקיות · ניהול דיגיטל</p>
                    <p className="hero-description">
                        משלב בניית אתרים, מערכות מותאמות אישית, ניהול דיגיטל ואוטומציות —
                        כדי לעזור לעסקים לעבוד חכם יותר ולהיראות מקצועיים יותר.
                    </p>
                    <p className="hero-partner">
                        לא עוד ספק שירות. שותף שמלווה את העסק מהרעיון ועד התוצאה.
                    </p>

                    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="300">
                        <a
                            href={getWhatsAppUrl()}
                            className="btn btn-primary btn-hero-main"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className='bx bxl-whatsapp'></i>
                            בואו נראה איך אפשר לקדם את העסק שלכם
                        </a>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('portfolio')}
                        >
                            <i className='bx bx-folder'></i>
                            צפו בעבודות
                        </button>
                    </div>
                </div>

                <div className="hero-visual" data-aos="fade-left" data-aos-delay="300">
                    <div className="hero-showcase">
                        <div className="showcase-card showcase-main">
                            <img src="assets/images/buildixLogo.png" alt="Buildix" />
                            <span>Buildix</span>
                        </div>
                        <div className="showcase-card showcase-secondary">
                            <img src="assets/images/takeEatLogo.png" alt="TakeEat" />
                            <span>TakeEat</span>
                        </div>
                        <div className="showcase-card showcase-secondary">
                            <img src="assets/images/fulllogo_nobuffer.jpeg" alt="בינה לבנייה" />
                            <span>בינה לבנייה</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection('portfolio')}>
                <div className="scroll-arrow">
                    <i className='bx bx-chevron-down'></i>
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => (
    <article
        className={`featured-card ${project.compact ? 'featured-card-compact' : ''}`}
        data-aos="fade-up"
        data-aos-delay={index * 80}
    >
        <div className="featured-card-image">
            {project.image ? (
                <img src={project.image} alt={project.title} />
            ) : (
                <div className="featured-logo-text">{project.title}</div>
            )}
            {project.status === 'new' && <span className="new-badge">חדש</span>}
        </div>
        <div className="featured-card-body">
            <span className="featured-card-type">{project.typeLabel}</span>
            <h3>{project.title}</h3>
            {project.subtitle && <p className="featured-card-subtitle">{project.subtitle}</p>}
            <div className="featured-card-details">
                <div className="detail-block">
                    <strong>אתגר</strong>
                    <p>{project.challenge}</p>
                </div>
                <div className="detail-block">
                    <strong>פתרון</strong>
                    <p>{project.solution}</p>
                </div>
                {project.result && (
                    <div className="detail-block">
                        <strong>תוצאה</strong>
                        <p>{project.result}</p>
                    </div>
                )}
            </div>
            {project.link && project.link !== '#' && (
                <div className="featured-card-links">
                    <a
                        href={project.link}
                        className="featured-card-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.ctaText || 'צפו בפרויקט'}
                        <i className='bx bx-link-external'></i>
                    </a>
                    {project.buildixLink && (
                        <a
                            href={project.buildixLink}
                            className="featured-card-link featured-card-link-buildix"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            דף ב-Buildix
                            <i className='bx bx-link-external'></i>
                        </a>
                    )}
                </div>
            )}
        </div>
    </article>
);

const BuildixFeaturedCard = () => {
    const features = [
        'הצעות מחיר',
        'ניהול פרויקטים',
        'מעקב לקוחות',
        'יומן עבודה',
        'דף עסקי',
        'גישה מכל מקום'
    ];

    return (
        <article className="buildix-featured" data-aos="fade-up">
            <div className="buildix-featured-inner">
                <div className="buildix-featured-visual">
                    <img src="assets/images/buildixLogo.png" alt="Buildix" />
                </div>
                <div className="buildix-featured-content">
                    <span className="featured-card-type">מוצר · מערכת עסקית</span>
                    <h3>Buildix — מערכת ניהול לעסקי בנייה ובעלי מקצוע</h3>
                    <p className="buildix-tagline">🏗️ פחות ניירת. פחות בלגן. יותר עבודה.</p>
                    <p className="buildix-desc">
                        Buildix מרכזת הצעות מחיר, פרויקטים, לקוחות, לידים ויומן עבודה במקום אחד.
                    </p>
                    <ul className="buildix-features">
                        {features.map((feature, i) => (
                            <li key={i}>
                                <i className='bx bx-check'></i>
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <p className="buildix-audience">
                        מתאים לקבלנים, שיפוצניקים, אדריכלים ובעלי מקצוע.
                    </p>
                    <a
                        href="https://www.buildix.site"
                        className="btn btn-buildix"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        צפו במערכת
                        <i className='bx bx-link-external'></i>
                    </a>
                </div>
            </div>
        </article>
    );
};

// Featured Work — לקוחות + מוצרים באותו סקשן
const FeaturedWork = () => {
    const clientProjects = [
        {
            id: 'na',
            title: 'NA Construction',
            subtitle: 'עסק בנייה — מנהלים ב-Buildix',
            typeLabel: 'לקוח · Buildix',
            image: 'assets/images/naConstructionLogo.png',
            challenge: 'ניהול הצעות מחיר, פרויקטים ולקוחות מפוזר בין וואטסאפ, טלפונים וניירת.',
            solution: 'מעבר ל-Buildix — מערכת אחת לניהול העסק, הצעות מחיר, דף עסקי ומעקב לקוחות.',
            result: 'עבודה מסודרת, פחות בלגן, ניהול מקצועי מהטלפון.',
            link: 'https://app.buildix.site/c/na-construction',
            ctaText: 'צפו בדף העסק'
        },
        {
            id: 'bina',
            title: 'בינה לבנייה',
            subtitle: 'אתר תדמית + דף עסקי ב-Buildix',
            typeLabel: 'לקוח · אתר + Buildix',
            image: 'assets/images/fulllogo_nobuffer.jpeg',
            challenge: 'עסק בנייה בלי נוכחות דיגיטלית מקצועית שמביאה פניות.',
            solution: 'אתר תדמית מותאם מותג + דף עסקי ב-Buildix, SEO ויצירת קשר מהירה.',
            result: 'נוכחות מקצועית ברשת ויותר פניות מגוגל.',
            link: 'https://www.binalb.com/',
            ctaText: 'צפו באתר',
            buildixLink: 'https://app.buildix.site/c/binalb'
        },
        {
            id: 'bar',
            title: 'בר בן אבו',
            subtitle: 'אדריכלות + דף עסקי ב-Buildix',
            typeLabel: 'לקוח · אתר + Buildix',
            image: 'assets/images/barLogo.png',
            challenge: 'הצגת פרויקטים וזהות מקצועית ברמת סטודיו.',
            solution: 'אתר מינימליסטי עם גלריה + דף עסקי ב-Buildix, UX נקי ומותאם מובייל.',
            result: 'מיתוג דיגיטלי ברמה גבוהה.',
            link: 'https://bar-app-self.vercel.app/',
            ctaText: 'צפו באתר',
            buildixLink: 'https://app.buildix.site/c/bar-ben-abu'
        }
    ];

    const products = [
        {
            id: 'takeeat',
            title: 'TakeEat',
            subtitle: 'פתיחת מסעדה אונליין',
            typeLabel: 'מוצר · SaaS',
            image: 'assets/images/takeEatLogo.png',
            challenge: 'מסעדות צריכות מערכת הזמנות בלי עלויות גבוהות ומורכבות טכנית.',
            solution: 'פלטפורמת הזמנות, תפריטים, ניהול משלוחים וממשק פשוט.',
            result: 'מסעדה אונליין פעילה תוך ימים, לא חודשים.',
            link: 'https://takeeat.co.il',
            status: 'new',
            ctaText: 'צפו במערכת'
        },
        {
            id: 'appointed',
            title: 'Appointed',
            subtitle: 'מערכת ניהול תורים לעסקים',
            typeLabel: 'מוצר · SaaS',
            image: 'assets/images/appointedCloud.png',
            challenge: 'עסקים מאבדים לקוחות בגלל תיאום ידני, ביטולים וחוסר תזכורות.',
            solution: 'מערכת תורים אונליין, יומן, תזכורות וניהול לקוחות מהטלפון.',
            result: 'פחות ביטולים, יותר תורים, ניהול פשוט.',
            link: 'https://appointed.cloud',
            status: 'new',
            ctaText: 'צפו במערכת'
        }
    ];

    return (
        <section id="portfolio" className="featured-work section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">תיק עבודות</span>
                    <h2 className="section-title">עבודות נבחרות</h2>
                    <p className="section-description">
                        פרויקטים אמיתיים לעסקים בישראל — ומערכות שבניתי מאפס
                    </p>
                </div>

                <div className="featured-subsection" data-aos="fade-up">
                    <h3 className="featured-subtitle">לקוחות</h3>
                    <div className="featured-grid">
                        {clientProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>

                <div className="featured-subsection" data-aos="fade-up">
                    <h3 className="featured-subtitle">מערכות שפיתחתי</h3>
                    <BuildixFeaturedCard />
                    <div className="featured-grid featured-grid-products">
                        {products.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const OngoingWork = () => {
    const items = [
        'ניהול רשתות חברתיות',
        'עדכוני אתר',
        'יצירת תוכן',
        'מענה לפניות',
        'פרסום ממומן',
        'שיפורים ופיתוחים'
    ];

    return (
        <section id="ongoing" className="ongoing-work section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">שותפות מתמשכת</span>
                    <h2 className="section-title">ליווי שוטף לעסקים</h2>
                    <p className="section-description">
                        לא רק פרויקט חד-פעמי — שותפות שמקדמת את העסק כל יום
                    </p>
                </div>
                <div className="ongoing-content" data-aos="fade-up">
                    <p className="ongoing-lead">
                        רוב העסקים לא צריכים "עוד אתר" — הם צריכים מישהו שידאג שהדיגיטל שלהם יעבוד כל יום.
                    </p>
                    <ul className="ongoing-list">
                        {items.map((item, i) => (
                            <li key={i}>
                                <i className='bx bx-check-circle'></i>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a
                        href={getWhatsAppUrl('היי איתי, אני מעוניין לשמוע על ליווי שוטף לעסק שלי')}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className='bx bxl-whatsapp'></i>
                        בואו נדבר על ליווי שוטף
                    </a>
                </div>
            </div>
        </section>
    );
};

const DigitalManagement = () => {
    const services = [
        { icon: 'bxl-facebook', title: 'ניהול פייסבוק', desc: 'עמוד, פוסטים, מענה וקהילה' },
        { icon: 'bxl-instagram', title: 'ניהול אינסטגרם', desc: 'פיד, Stories, Reels ועקביות מותג' },
        { icon: 'bx-edit', title: 'יצירת תוכן', desc: 'פוסטים, כיתובים וויזuals' },
        { icon: 'bx-mobile', title: 'יצירת Stories', desc: 'סטוריז יומיים, מבצעים ותוכן' },
        { icon: 'bx-message-dots', title: 'מענה ללקוחות', desc: 'הודעות, לידים ושירות מהיר' },
        { icon: 'bx-target-lock', title: 'פרסום ממומן', desc: 'קמפיינים, קהלים והמרות' }
    ];

    return (
        <section id="digital" className="digital-mgmt section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">ניהול דיגיטל</span>
                    <h2 className="section-title">העסק שלכם פעיל ברשת — בלי שתרדפו אחרי תוכן</h2>
                    <p className="section-description">
                        פייסבוק, אינסטגרם, אתר, תוכן, לידים ופרסום — הכל במקום אחד
                    </p>
                </div>
                <div className="digital-grid">
                    {services.map((service, index) => (
                        <div key={index} className="digital-card" data-aos="fade-up" data-aos-delay={index * 80}>
                            <i className={`bx ${service.icon}`}></i>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="digital-cta" data-aos="fade-up">
                    <a
                        href={getWhatsAppUrl('היי איתי, אני מעוניין לשמוע על ניהול דיגיטל לעסק שלי')}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className='bx bxl-whatsapp'></i>
                        בואו נדבר על הניהול הדיגיטלי שלכם
                    </a>
                </div>
            </div>
        </section>
    );
};

const AboutSection = () => (
    <section id="about" className="about-agency section">
        <div className="container">
            <div className="about-grid" data-aos="fade-up">
                <div className="about-image">
                    <img src="assets/images/photo_2025-01-04_02-16-56.jpg" alt="איתי הרוש" />
                </div>
                <div className="about-text">
                    <span className="section-subtitle">עלי</span>
                    <h2 className="section-title">לא בונה אתרים — בונה פתרונות לעסקים</h2>
                    <p>
                        אני איתי הרוש, מייסד Itay Solutions. עובד עם עסקים קטנים ובינוניים בישראל —
                        קבלנים, מסעדות, מורים, אדריכלים ובעלי מקצוע.
                    </p>
                    <p>
                        לא מוסר קובץ ונעלם. מלווה מהרעיון, דרך הפיתוח והניהול הדיגיטלי,
                        ועד שהמערכת או האתר עובדים בשטח — כולל Buildix, TakeEat ו-Appointix.
                    </p>
                    <div className="about-process">
                        <span>רעיון</span>
                        <i className='bx bx-chevron-left'></i>
                        <span>אפיון</span>
                        <i className='bx bx-chevron-left'></i>
                        <span>פיתוח</span>
                        <i className='bx bx-chevron-left'></i>
                        <span>השקה</span>
                        <i className='bx bx-chevron-left'></i>
                        <span>ליווי</span>
                    </div>
                    <a
                        href={getWhatsAppUrl()}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className='bx bxl-whatsapp'></i>
                        בואו נעבוד יחד
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const TrustSection = () => {
    const trustLogos = [
        { name: 'NA Construction', image: 'assets/images/naConstructionLogo.png' },
        { name: 'בינה לבנייה', image: 'assets/images/fulllogo_nobuffer.jpeg' },
        { name: 'בר בן אבו', image: 'assets/images/barLogo.png' },
        { name: 'TakeEat', image: 'assets/images/takeEatLogo.png' },
        { name: 'Buildix', image: 'assets/images/buildixLogo.png' },
        { name: 'Appointed', image: 'assets/images/appointedCloud.png' }
    ];

    return (
        <section id="trust" className="trust-section section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">למה לעבוד איתי</span>
                    <h2 className="section-title">עסקים אמיתיים. מערכות אמיתיות.</h2>
                    <p className="section-description">
                        לקוחות ומוצרים שעובדים בשטח — לא רק על המסך
                    </p>
                </div>
                <div className="trust-logos trust-logos-prominent" data-aos="fade-up">
                    <div className="trust-logo-list">
                        {trustLogos.map((logo, index) => (
                            <div key={index} className="trust-logo-item">
                                {logo.image ? (
                                    <img src={logo.image} alt={logo.name} />
                                ) : (
                                    <div className="trust-logo-text">{logo.name}</div>
                                )}
                                <span className="trust-logo-name">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};


// Contact Section Component
const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    React.useEffect(() => {
        // בדיקה אם וואטסאפ זמין
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

        console.log('🔍 Form submitted with data:', formData); // דיבוג

        // בדיקה שהשדות החובה מלאים
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('⚠️ אנא מלאו את כל השדות החובה המסומנים ב-*');
            return;
        }

        // יצירת הודעת וואטסאפ מפורטת
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

        // בדיקה שהמספר תקין
        const phoneNumber = '972547466508';
        console.log('📱 WhatsApp number:', phoneNumber); // דיבוג
        console.log('💬 Message to send:', message); // דיבוג

        // יצירת קישור וואטסאפ
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        console.log('🔗 WhatsApp URL:', whatsappURL); // דיבוג

        // הצגת הודעת אישור לפני הפתיחה
        const confirmSend = confirm(`📱 האם ברצונכם לשלוח את ההודעה לוואטסאפ?
    
ההודעה תישלח ל: +${phoneNumber}
    
לחצו "אישור" לפתיחת וואטסאפ או "ביטול" לעריכה.`);

        if (confirmSend) {
            try {
                // פתיחת וואטסאפ
                const opened = window.open(whatsappURL, '_blank');

                if (opened) {
                    console.log('✅ WhatsApp opened successfully'); // דיבוג

                    // הודעת הצלחה משופרת
                    setTimeout(() => {
                        const success = confirm(`✅ וואטסאפ נפתח בהצלחה!
                    
🔔 חשוב: אל תשכחו ללחוץ על כפתור השליחה בוואטסאפ!
                    
האם ברצונכם לנקות את הטופס?`);

                        if (success) {
                            // איפוס הטופס
                            setFormData({
                                name: '',
                                email: '',
                                phone: '',
                                subject: '',
                                message: ''
                            });
                            console.log('🧹 Form cleared'); // דיבוג
                        }
                    }, 1000);

                } else {
                    throw new Error('Failed to open WhatsApp');
                }

            } catch (error) {
                console.error('❌ Error opening WhatsApp:', error); // דיבוג

                // פתרון חלופי - העתקה ללוח
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
            title: 'וואטסאפ — הדרך הכי מהירה',
            info: 'שיחה קצרה, בלי התחייבות',
            link: getWhatsAppUrl(),
            color: '#25D366'
        },
        {
            icon: 'bx-phone',
            title: 'שיחת ייעוץ',
            info: '054-746-6508',
            link: 'tel:+972547466508',
            color: '#4f46e5'
        },
        {
            icon: 'bx-envelope',
            title: 'אימייל',
            info: CONTACT_EMAIL,
            link: getMailtoUrl('פנייה מ-Itay Solutions'),
            color: '#EA4335'
        },
        {
            icon: 'bxl-linkedin',
            title: 'LinkedIn',
            info: 'חיבור מקצועי',
            link: 'https://www.linkedin.com/in/itay-haroush-94710b229/?originalSubdomain=il',
            color: '#0A66C2'
        }
    ];

    return (
        <section id="contact" className="contact contact-agency">
            <div className="container">
                <div className="section-header contact-header" data-aos="fade-up">
                    <span className="section-subtitle">צור קשר</span>
                    <h2 className="section-title">יש לכם רעיון? בואו נדבר</h2>
                    <p className="section-description">
                        שיחה קצרה בוואטסאפ — בלי התחייבות, בלי טפסים ארוכים
                    </p>
                    <a
                        href={getWhatsAppUrl()}
                        className="btn btn-whatsapp-large"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className='bx bxl-whatsapp'></i>
                        שלחו הודעה בוואטסאפ
                    </a>
                </div>

                <div className="contact-content">
                    <div className="contact-info" data-aos="fade-right">
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
                                        <h4>{method.title}</h4>
                                        <p>{method.info}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="contact-form-wrap" data-aos="fade-up">
                        <p className="form-alt-label">או השאירו פרטים ואחזור אליכם</p>
                        <form className="contact-form" onSubmit={handleSubmit}>
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

// Footer Component
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>Itay Solutions</h3>
                        <p>פיתוח מערכות, אתרים וניהול דיגיטל לעסקים</p>
                    </div>

                    <div className="footer-google-section">
                        <div className="google-review-card">
                            <div className="google-icon">
                                <i className='bx bxl-google'></i>
                            </div>
                            <div className="google-content">
                                <h4>⭐ אהבתם? תנו כוכב!</h4>
                                <p>דרגו אותנו בגוגל בקלי קלות</p>
                                <a href="https://share.google/veRJmLN9PbwB475UZ" target="_blank" rel="noopener noreferrer" className="google-link">
                                    צפו בביקורות ודירוגים
                                    <i className='bx bx-link-external'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links">
                        <a href="#home">בית</a>
                        <a href="#portfolio">פרויקטים</a>
                        <a href="#ongoing">עבודה שוטפת</a>
                        <a href="#digital">ניהול דיגיטל</a>
                        <a href="#about">עלי</a>
                        <a href="#contact">צור קשר</a>
                        <a href="pricing-landing.html">מחירון</a>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} איתי הרוש. כל הזכויות שמורות.</p>
                    <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <i className='bx bx-up-arrow-alt'></i>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);