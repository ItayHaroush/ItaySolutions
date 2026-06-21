(function () {
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
        return;
    }

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WJZH1Y4MFK';
    document.head.appendChild(script);

    script.onload = function () {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-WJZH1Y4MFK', { anonymize_ip: true });
    };
})();
