// Cookie Consent Manager
class CookieConsent {
    constructor() {
        this.consentKey = 'itay_solutions_cookie_consent';
        this.analyticsKey = 'itay_solutions_analytics_consent';
        this.init();
    }

    init() {
        // Check if user already gave consent
        const consent = this.getConsent();

        if (consent === null) {
            // Show banner if no consent given
            this.showBanner();
        } else if (consent === 'accepted') {
            // Load analytics if consent was given
            this.loadAnalytics();
        }
    }

    getConsent() {
        const consent = localStorage.getItem(this.consentKey);
        return consent;
    }

    setConsent(value) {
        localStorage.setItem(this.consentKey, value);
        localStorage.setItem(this.analyticsKey, value);
    }

    showBanner() {
        // Create banner HTML
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <div class="cookie-icon">🍪</div>
                    <div class="cookie-message">
                        <h3>אנחנו משתמשים בעוגיות</h3>
                        <p>אתר זה משתמש בעוגיות כדי לשפר את חוויית המשתמש ולנתח את תנועת הגולשים באתר באמצעות Google Analytics. המשך גלישה באתר מהווה הסכמה לשימוש בעוגיות.</p>
                    </div>
                </div>
                <div class="cookie-consent-actions">
                    <button id="cookie-accept" class="cookie-btn cookie-accept">אני מסכים/ה</button>
                    <button id="cookie-decline" class="cookie-btn cookie-decline">דחה</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Add event listeners
        document.getElementById('cookie-accept').addEventListener('click', () => {
            this.acceptCookies();
        });

        document.getElementById('cookie-decline').addEventListener('click', () => {
            this.declineCookies();
        });

        // Animate banner in
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);
    }

    hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('show');
            setTimeout(() => {
                banner.remove();
            }, 300);
        }
    }

    acceptCookies() {
        this.setConsent('accepted');
        this.hideBanner();
        this.loadAnalytics();
    }

    declineCookies() {
        this.setConsent('declined');
        this.hideBanner();
        this.disableAnalytics();
    }

    loadAnalytics() {
        // Check if gtag is already loaded
        if (typeof gtag === 'function') {
            // Analytics is already loaded, just enable it
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
            return;
        }

        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WJZH1Y4MFK';
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-WJZH1Y4MFK', {
                'anonymize_ip': true
            });
        };
    }

    disableAnalytics() {
        // Disable Google Analytics
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }

        // Set GA to not track
        window['ga-disable-G-WJZH1Y4MFK'] = true;
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cookie-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CookieConsent();
    });
} else {
    new CookieConsent();
}
