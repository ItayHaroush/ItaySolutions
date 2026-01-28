// React Components for Modern Portfolio Landing Page

// Main App Component
const App = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeSection, setActiveSection] = React.useState('home');

    React.useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 200,
        });

        // Handle scroll for active section
        const handleScroll = () => {
            const sections = ['home', 'services', 'portfolio', 'pricing', 'contact'];
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
            <Services />
            <Portfolio />
            <CertificatesCarousel />
            <PricingQuote />
            <Contact />
            <Footer />
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
        { id: 'home', label: 'בית', icon: 'bx-home' },
        { id: 'services', label: 'שירותים', icon: 'bx-briefcase' },
        { id: 'portfolio', label: 'פרוייקטים', icon: 'bx-folder' },
        { id: 'certificates', label: 'תעודות', icon: 'bx-medal' },
        { id: 'pricing', label: 'הצעת מחיר', icon: 'bx-calculator' },
        { id: 'contact', label: 'צור קשר', icon: 'bx-message' }
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <div className="nav-brand" onClick={() => scrollToSection('home')}>
                    <i className='bx bx-code-alt'></i>
                    <span>איתי הרוש | Itay Solutions</span>
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
    const [currentText, setCurrentText] = React.useState(0);
    const texts = [
        'פתרונות פיתוח מתקדמים',
        'אתרים רספונסיביים',
        'אפליקציות מותאמות אישית',
        'חוויות דיגיטליות מרשימות'
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(prev => (prev + 1) % texts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text" data-aos="fade-up">
                    <h1>
                        הפתרון הדיגיטלי
                        <span className="highlight"> שלך</span>
                    </h1>
                    <h2 className="typing-text">
                        <span className="text-cycle">{texts[currentText]}</span>
                        <span className="cursor">|</span>
                    </h2>
                    <p style={{ color: 'white' }}>
                        <i className="fas fa-rocket"></i> מפתח Full Stack מקצועי עם מעל 3 שנות ניסיון בפיתוח פתרונות דיגיטליים מתקדמים.
                        מתמחה ביצירת אתרים ואפליקציות שמניבות תוצאות עסקיות מדידות ומשפרות את חוויית המשתמש.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
                            <span className="stat-number">11+</span>
                            <span className="stat-label">פרוייקטים</span>
                        </div>
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">שנות ניסיון</span>
                        </div>
                        <div className="stat-item" data-aos="fade-up" data-aos-delay="400">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">שביעות רצון</span>
                        </div>
                    </div>

                    <div className="hero-buttons" data-aos="fade-up" data-aos-delay="500">
                        <button
                            className="btn btn-primary btn-hero-main"
                            onClick={() => scrollToSection('contact')}
                        >
                            <i className='bx bx-phone'></i>
                            בואו נתחיל
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('portfolio')}
                        >
                            <i className='bx bx-folder'></i>
                            הפרוייקטים שלי
                        </button>
                        <button className="btn btn-outline" onClick={() => scrollToSection('services')}>
                            <i className='bx bx-briefcase'></i>
                            <span>השירותים</span>
                        </button>
                        <button className="btn btn-outline" onClick={() => scrollToSection('pricing')}>
                            <i className='bx bx-calculator'></i>
                            <span>הצעת מחיר</span>
                        </button>
                    </div>
                </div>

                <div className="hero-visual" data-aos="fade-left" data-aos-delay="300">
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src="assets/images/photo_2025-01-04_02-16-56.jpg" alt="איתי הרוש" />
                            <div className="status-indicator"></div>
                        </div>
                        <div className="profile-info">
                            <h3>איתי הרוש | Itay Solutions</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>

                    <div className="floating-elements">
                        <div className="tech-stack">
                            <div className="tech-item">React</div>
                            <div className="tech-item">JavaScript</div>
                            <div className="tech-item">PHP</div>
                            <div className="tech-item">MySQL</div>
                            <div className="tech-item">Node.js</div>
                            <div className="tech-item">HTML5</div>
                            <div className="tech-item">CSS3</div>
                            <div className="tech-item">SEO</div>
                            <div className="tech-item">UI/UX</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator" onClick={() => scrollToSection('services')}>
                <div className="scroll-arrow">
                    <i className='bx bx-chevron-down'></i>
                </div>
            </div>
        </section>
    );
};

// Services Section Component
const Services = () => {
    const services = [
        {
            icon: 'bx-building-house',
            title: '<i class="fas fa-building"></i> אתרי תדמית לעסקים',
            description: 'אתרים מקצועיים שמייצגים את העסק שלך ומביאים לקוחות חדשים',
            features: ['עיצוב מותאם למותג', 'SEO מובנה להופעה בגוגל', 'מותאם לכל המכשירים', 'מערכת ניהול תוכן פשוטה'],
            exampleLink: '#',
            exampleName: 'בינה לבנייה',
            linkDisabled: true
        },
        {
            icon: 'bx-id-card',
            title: '<i class="fas fa-credit-card"></i> אתר כרטיס ביקור',
            description: 'אתר מינימליסטי להצגת פרטי התקשרות, מיקום, קישורים לרשתות חברתיות וטופס יצירת קשר מהיר',
            features: ['עיצוב ממוקד וקליל', 'מותאם למובייל', 'קישור מהיר לוואטסאפ', 'טופס יצירת קשר פשוט', 'קישורים לרשתות חברתיות'],
            exampleLink: '',
            exampleName: ''
        },
        {
            icon: 'bx-envelope',
            title: '<i class="fas fa-envelope"></i> דפי נחיתה + ניוזלטר',
            description: 'פתרון מושלם לעסקים קטנים, רופאים, מכוני יופי ומאמני כושר - להמרת גולשים ללקוחות',
            features: ['דף נחיתה ממיר', 'מערכת ניוזלטר אוטומטית', 'טפסי הרשמה חכמים', 'אינטגרציה עם רשתות חברתיות']
        },
        {
            icon: 'bx-mobile',
            title: '<i class="fas fa-mobile-alt"></i> אפליקציות מובייל',
            description: 'פיתוח אפליקציות מותאמות אישית למובייל עם חוויית משתמש מעולה',
            features: ['פיתוח Native ו-Cross-Platform', 'UI/UX מותאם למובייל', 'אינטגרציה עם API', 'בדיקות איכות קפדניות'],
        },
        {
            icon: 'bx-wrench',
            title: '<i class="fas fa-wrench"></i> שירות תחזוקה שוטפת',
            description: 'שמירה על האתר שלך מעודכן, מאובטח ומהיר לאורך זמן',
            features: ['עדכוני אבטחה שוטפים', 'גיבויים אוטומטיים', 'תמיכה טכנית מתמשכת', 'שיפורים ואופטימיזציה']
        }
    ];

    return (
        <section id="services" className="services">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <h2>השירותים שלי</h2>
                    <p>פתרונות טכנולוגיים מותאמים אישית לכל צורך עסקי</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div

                            key={index}
                            className="service-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="service-icon">
                                <i className={`bx ${service.icon}`}></i>
                            </div>
                            <h3 dangerouslySetInnerHTML={{ __html: service.title }}></h3>
                            <p>
                                {service.description}
                                {service.exampleLink && !service.linkDisabled && (
                                    <> - כמו <a href={service.exampleLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>{service.exampleName}</a></>
                                )}
                                {service.exampleLink && service.linkDisabled && (
                                    <> - כמו <span style={{ color: 'var(--text-secondary)', textDecoration: 'line-through', cursor: 'not-allowed' }}>{service.exampleName}</span></>
                                )}
                                {service.exampleLinks && (
                                    <> - כמו {service.exampleLinks.map((link, i) => (
                                        <span key={i}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', textDecoration: 'underline' }}>{link.name}</a>
                                            {i < service.exampleLinks.length - 1 && ' ו-'}
                                        </span>
                                    ))}</>
                                )}
                            </p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <i className='bx bx-check'></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Portfolio Section Component
const Portfolio = () => {
    const [activeFilter, setActiveFilter] = React.useState('all');

    // רענון AOS כשמשתנה הפילטר
    React.useEffect(() => {
        if (typeof AOS !== 'undefined') {
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        }
    }, [activeFilter]);

    // פרוייקטים - אתרים, משחקים, אפליקציות בלבד
    const projects = [
        {
            id: 1,
            title: 'Portfolio Website',
            category: 'websites',
            type: 'project',
            image: 'assets/images/MyPortfolio.png',
            description: 'אתר פורטפוליו אישי המציג את הכישורים והפרוייקטים שלי. בנוי עם HTML & CSS.',
            technologies: ['HTML5', 'CSS3', 'Responsive Design'],
            link: 'https://itayharoush.github.io/MyPortfolio/index.html',
            github: '#',
            featured: true,

        },
        {
            id: 2,
            title: 'Rotem Nails App',
            category: 'applications',
            type: 'project',
            image: 'assets/images/rhNails.png',
            description: 'אפליקציה לניהול לקוחות ומעקב אחרי טיפולי ציפורניים',
            technologies: ['React', 'Node.js', 'API Development'],
            link: 'https://rotemamosnails.great-site.net/rhNails.php?i=1',
            github: '#',
            featured: true,
            status: '',
            date: '2025',
            skills: ['PHP', 'MySQL', 'APIs', 'Async Programming']

        },
        {
            id: 3,
            title: 'ChefSync IL App',
            category: 'applications',
            type: 'project',
            image: 'assets/images/ChefSyncIL.png',
            description: 'אפליקציה לניהול הזמנות ושירותי מטבח מקצועיים בישראל',
            technologies: ['React', 'Node.js', 'API Development'],
            link: 'https://tefenorders.great-site.net/landingPage.php?i=1',
            github: '#',
            featured: true,
            status: '',
            date: '2025',
            skills: ['MySQL', 'PHP', 'APIs', 'Async Programming']
        },
        {
            id: 19,
            title: 'ChefSync IL 2.0',
            category: 'applications',
            type: 'project',
            image: 'assets/images/ChefSyncIL.png',
            description: 'גרסה 2.0 משופרת של אפליקציית ChefSync IL עם ממשק מודרני ופיצ\'רים מתקדמים',
            technologies: ['React', 'Node.js', 'MySQL', 'PHP', 'API Development'],
            link: 'https://chefsyncil.great-site.net',
            github: '#',
            featured: true,
            status: 'new',
            date: '2026',
            skills: ['MySQL', 'PHP', 'APIs', 'Modern UI/UX'],
            isExternal: true
        },
        {
            id: 20,
            title: 'TakeEat App',
            category: 'applications',
            type: 'project',
            image: 'assets/images/takeEatLogo.jpeg',
            description: 'אפליקציה להזמנת אוכל עם ממשק משתמש מודרני ופיצ\'רים מתקדמים',
            technologies: ['React', 'Node.js', 'MySQL', 'PHP', 'Laravel', 'API Development'],
            link: 'https://takeeat.co.il',
            github: '#',
            featured: true,
            status: 'new',
            date: '2026',
            skills: ['MySQL', 'PHP', 'APIs', 'Modern UI/UX'],
            isExternal: true

        },
        {
            id: 4,
            title: 'Itay Solutions Portfolio',
            category: 'websites',
            type: 'project',
            image: 'assets/images/itaySolutionsLogoIconOrange.png',
            description: 'פורטפוליו מתקדם זה עם React, אנימציות ועיצוב responsive מודרני.',
            technologies: ['React', 'CSS Grid', 'JavaScript ES6+', 'Mobile First'],
            link: 'https://itayharoush.github.io/Portfolio/index.html',
            github: '#',
            featured: true,

        },
        {
            id: 5,
            title: 'ContactApp',
            category: 'websites',
            type: 'project',
            image: 'assets/images/logoContactApp.png',
            description: 'אפליקציית אנשי קשר אישית עם עיצוב מודרני סטייל WhatsApp ותגובותי.',
            technologies: ['HTML5', 'React', 'Node.js', 'CSS3', 'JavaScript'],
            link: 'https://contact-app-orpin-one.vercel.app',
            github: '#',
            featured: true,
        },
        {
            id: 6,
            title: 'Bina Bnya Website',
            category: 'websites',
            type: 'project',
            image: 'assets/images/fulllogo_nobuffer.jpeg',
            description: 'אתר תדמית לעסק בניה ובנייה עם עיצוב מודרני ותגובותי.',
            technologies: ['HTML5', 'React', 'Node.js', 'CSS3', 'JavaScript'],
            // link: 'https://www.binalb.com/',
            github: '#',
            featured: true,
            linkDisabled: true
        },
        {
            id: 7,
            title: 'Pacman Game',
            category: 'games',
            type: 'project',
            image: 'assets/images/PacmanGame2.png',
            description: 'משחק פקמן פשוט הבנוי עם HTML, CSS ו-JavaScript. זמין כרגע למחשב בלבד, בקרוב גם למובייל.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
            link: 'https://itayharoush.github.io/PacmanGame/',
            github: 'https://github.com/itayHaroush/PacmanGame',
            featured: true,
            isExternal: true
        },
        {
            id: 9,
            title: 'MyLearn-App',
            category: 'applications',
            type: 'project',
            image: 'assets/images/MyLearn.jpg',
            description: 'אפליקציית למידה מתקדמת עם תכנים אינטראקטיביים ומערכת דירוג לסרטונים לפי משתמשים.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            link: '#',
            github: '#',
            status: 'coming-soon'
        },
        {
            id: 16,
            title: 'Linoy H Teaching Website',
            category: 'websites',
            type: 'project',
            image: 'assets/images/logoLinoy.png',
            description: 'אתר תדמית למורה פרטית עם עיצוב נקי ותגובותי',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
            link: 'https://linoy-app.vercel.app/',
            github: '#',
            isExternal: true,
            featured: true
        },
        {
            id: 17,
            title: 'Bar Ben Abu Website',
            category: 'websites',
            type: 'project',
            image: 'assets/images/barLogo.png',
            description: 'אתר תדמית לאדריכל בר בן אבו עם עיצוב מודרני ותגובותי.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React'],
            link: 'https://bar-app-self.vercel.app/',
            github: '#',
            isExternal: true,
            featured: true
        },
        {
            id: 18,
            title: 'App Weather',
            category: 'applications',
            type: 'project',
            image: 'assets/images/logoAppWeather.png',
            description: 'אפליקציית מזג אוויר פשוטה המציגה תחזית יומית לשבוע עם עיצוב מודרני ותגובותי.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'API Integration'],
            link: 'https://web2026-sandy.vercel.app',
            github: '#',
            isExternal: true,
            featured: true
        }
    ];

    // תעודות הסמכה - רשימה נפרדת לקרוסלה
    const certificates = [
        {
            id: 8,
            title: 'React Development',
            image: 'assets/images/React.jpg',
            issuer: 'אקדמיה דיגיטלית',
            date: '2024',
            skills: ['React', 'JSX', 'Hooks', 'State Management']
        },
        {
            id: 10,
            title: 'CSS Mastery',
            image: 'assets/images/Css.jpg',
            issuer: 'מכללה טכנולוגית',
            date: '2025',
            skills: ['CSS', 'Responsive Design', 'UX/UI']
        },
        {
            id: 11,
            title: 'Java Development',
            image: 'assets/images/Java.jpg',
            issuer: 'מכללה טכנולוגית',
            date: '2025',
            skills: ['Java', 'API Development', 'OOP']
        },
        {
            id: 12,
            title: 'TypeScript Basics',
            image: 'assets/images/TypeScript.jpg',
            issuer: 'מכללה טכנולוגית',
            date: '2025',
            skills: ['TypeScript', 'Data Types']
        },
        {
            id: 13,
            title: 'Web Development',
            image: 'assets/images/Html.jpg',
            issuer: 'מכון טכנולוגי מתקדם',
            date: '2024',
            skills: ['HTML5', 'CSS3', 'JavaScript']
        },
        {
            id: 14,
            title: 'JavaScript Advanced',
            image: 'assets/images/javaScript.jpg',
            issuer: 'פלטפורמת קודינג מקוונת',
            date: '2024',
            skills: ['ES6+', 'DOM', 'APIs']
        },
        {
            id: 15,
            title: 'Frontend Development',
            image: 'assets/images/FrontEndDevelopment.jpg',
            issuer: 'מכללה טכנולוגית',
            date: '2023',
            skills: ['Frontend', 'UX/UI', 'Mobile First']
        }
    ];

    const categories = [
        { id: 'all', label: 'הכל', icon: 'bx-grid-alt' },
        { id: 'websites', label: 'אתרים', icon: 'bx-world' },
        { id: 'games', label: 'משחקים', icon: 'bx-joystick' },
        { id: 'applications', label: 'אפליקציות', icon: 'bx-mobile' }
    ];

    // חישוב הפריטים המסוננים - תלוי רק ב-activeFilter
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(item => item.category === activeFilter);

    return (
        <section id="portfolio" className="portfolio section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">עבודות שלי</span>
                    <h2 className="section-title">הפרוייקטים שלי</h2>
                    <p className="section-description">
                        אוסף הפרוייקטים שפיתחתי - אתרים, אפליקציות ומשחקים
                    </p>
                </div>

                {/* מסנני קטגוריות */}
                <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(category.id)}
                        >
                            <i className={`bx ${category.icon}`}></i>
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* רשת הפרוייקטים */}
                <div className="portfolio-grid">
                    {filteredProjects.map((item, index) => (
                        <div
                            key={item.id}
                            className={`portfolio-item project-item ${item.featured ? 'featured' : ''}`}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="portfolio-image">
                                <img src={item.image} alt={item.title} />

                                {/* מספר פרוייקט */}
                                {item.number && (
                                    <span className="project-number">{item.number}</span>
                                )}

                                {/* תגיות מיוחדות */}
                                {item.featured && <span className="featured-badge">מומלץ</span>}
                                {item.status === 'coming-soon' && <span className="coming-soon-badge">בקרוב</span>}
                                {item.status === 'new' && <span className="new-badge">חדש</span>}

                                <div className="portfolio-overlay">
                                    <div className="portfolio-actions">
                                        <a
                                            href={item.link}
                                            className="action-btn view-btn"
                                            title="צפה בפרוייקט"
                                            target={item.isExternal ? "_blank" : "_self"}
                                            rel={item.isExternal ? "noopener noreferrer" : ""}
                                        >
                                            <i className='bx bx-link-external'></i>
                                            <span>צפה בפרוייקט</span>
                                        </a>
                                        {item.github !== '#' && (
                                            <a
                                                href={item.github}
                                                className="action-btn github-btn"
                                                title="קוד ב-GitHub"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <i className='bx bxl-github'></i>
                                                <span>GitHub</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-content">
                                <h3 className="portfolio-title">{item.title}</h3>
                                <p className="portfolio-description">{item.description}</p>
                                <div className="technologies">
                                    {item.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* סטטיסטיקות מעודכנות */}
                <div className="portfolio-stats" data-aos="fade-up">
                    <div className="stat-item">
                        <span className="stat-number">{projects.length}</span>
                        <span className="stat-label">פרוייקטים</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{projects.filter(p => p.category === 'websites').length}</span>
                        <span className="stat-label">אתרים</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{projects.filter(p => p.category === 'applications').length}</span>
                        <span className="stat-label">אפליקציות</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{projects.filter(p => p.featured).length}</span>
                        <span className="stat-label">פרוייקטים מומלצים</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Certificates Carousel Component - קרוסלה אינפיניטית לתעודות
const CertificatesCarousel = () => {
    const certificatesData = [
        {
            id: 8,
            title: 'React Development',
            image: 'assets/images/React.jpg',
            issuer: 'אקדמיה דיגיטלית',
            date: '2024',
            skills: ['React', 'JSX', 'Hooks']
        },
        {
            id: 10,
            title: 'CSS Mastery',
            image: 'assets/images/Css.jpg',
            issuer: 'מכללה טכנולוגית',
            date: '2025',
            skills: ['CSS', 'Responsive']
        },
        {
            id: 11,
            title: 'Java Development',
            image: 'assets/images/Java.jpg',
            issuer: 'מכללה טכנולוגית',
            date: '2025',
            skills: ['Java', 'OOP']
        },
        {
            id: 12,
            title: 'TypeScript Basics',
            image: 'assets/images/TypeScript.jpg',
            issuer: 'מכללה טכנולוגית',
            date: '2025',
            skills: ['TypeScript']
        },
        {
            id: 13,
            title: 'Web Development',
            image: 'assets/images/Html.jpg',
            issuer: 'מכון טכנולוגי',
            date: '2024',
            skills: ['HTML5', 'CSS3']
        },
        {
            id: 14,
            title: 'JavaScript Advanced',
            image: 'assets/images/javaScript.jpg',
            issuer: 'פלטפורמת קודינג',
            date: '2024',
            skills: ['ES6+', 'APIs']
        },
        {
            id: 15,
            title: 'Frontend Development',
            image: 'assets/images/FrontEndDevelopment.jpg',
            issuer: 'מכללה טכנולוגית',
            date: '2023',
            skills: ['Frontend', 'UX/UI']
        }
    ];

    // כפילת התעודות פי 3 לקרוסלה רציפה
    const duplicatedCertificates = [...certificatesData, ...certificatesData, ...certificatesData];

    return (
        <section id="certificates" className="certificates-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">הכשרות והסמכות</span>
                    <h2 className="section-title">תעודות ההסמכה שלי</h2>
                    <p className="section-description">
                        אוסף התעודות וההסמכות המקצועיות שרכשתי במהלך הדרך
                    </p>
                </div>

                <div className="certificates-carousel-wrapper" data-aos="fade-up" data-aos-delay="100">
                    <div className="certificates-carousel">
                        {duplicatedCertificates.map((cert, index) => (
                            <div key={`${cert.id}-${index}`} className="certificate-card">
                                <div className="certificate-image">
                                    <img src={cert.image} alt={cert.title} />
                                    <div className="certificate-overlay">
                                        <i className='bx bx-medal'></i>
                                    </div>
                                </div>
                                <div className="certificate-info">
                                    <h3>{cert.title}</h3>
                                    <div className="issuer">
                                        <i className='bx bx-building'></i>
                                        <span>{cert.issuer}</span>
                                    </div>
                                    <div className="date">
                                        <i className='bx bx-calendar'></i>
                                        <span>{cert.date}</span>
                                    </div>
                                    <div className="skills">
                                        {cert.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="certificates-stats" data-aos="fade-up">
                    <div className="stat-item">
                        <i className='bx bx-medal'></i>
                        <span className="stat-number">{certificatesData.length}</span>
                        <span className="stat-label">תעודות הסמכה</span>
                    </div>
                    <div className="stat-item">
                        <i className='bx bx-code-alt'></i>
                        <span className="stat-number">10+</span>
                        <span className="stat-label">טכנולוגיות</span>
                    </div>
                    <div className="stat-item">
                        <i className='bx bx-trending-up'></i>
                        <span className="stat-number">100%</span>
                        <span className="stat-label">מחויבות ללמידה</span>
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
אימייל: itay666@icloud.com`);
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
            info: 'itayyharoush@gmail.com',
            link: 'mailto:itayyharoush@gmail.com?subject=פנייה עסקית - פיתוח',
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

// Footer Component
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>איתי הרוש | Itay Solutions</h3>
                        <p>פתרונות פיתוח דיגיטליים מתקדמים</p>
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
                        <a href="#services">שירותים</a>
                        <a href="#portfolio">פרוייקטים</a>
                        <a href="#certificates">תעודות</a>
                        <a href="#pricing">הצעות מחיר</a>
                        <a href="#contact">צור קשר</a>
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