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
      id: "business-site",
      icon: "bx-building-house",
      title: '<i class="fas fa-building"></i> \u05D0\u05EA\u05E8 \u05EA\u05D3\u05DE\u05D9\u05EA \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD',
      description: "\u05D0\u05EA\u05E8 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05E9\u05DE\u05D9\u05D9\u05E6\u05D2 \u05D0\u05EA \u05D4\u05E2\u05E1\u05E7 \u05E9\u05DC\u05DA \u05D5\u05DE\u05D1\u05D9\u05D0 \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D7\u05D3\u05E9\u05D9\u05DD",
      basePrice: 3300,
      originalPrice: 4800,
      discount: 31,
      currency: "\u20AA",
      timeline: "2-4 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA",
      features: [
        "\u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05DE\u05D5\u05EA\u05D2 \u05D4\u05E2\u05E1\u05E7\u05D9",
        "\u05E2\u05D3 7 \u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05EA\u05D5\u05DB\u05DF",
        "SEO \u05DE\u05D5\u05D1\u05E0\u05D4 \u05DC\u05D4\u05D5\u05E4\u05E2\u05D4 \u05D1\u05D2\u05D5\u05D2\u05DC",
        "\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05DB\u05DC \u05D4\u05DE\u05DB\u05E9\u05D9\u05E8\u05D9\u05DD (Responsive)",
        "\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05D4\u05D5\u05DC \u05EA\u05D5\u05DB\u05DF \u05E4\u05E9\u05D5\u05D8\u05D4",
        "\u05D8\u05D5\u05E4\u05E1 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8",
        "\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05DC\u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA",
        "\u05D0\u05D7\u05E1\u05D5\u05DF \u05E9\u05E0\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4"
      ],
      addons: [
        { id: "extra-pages", name: "\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD (\u05DB\u05DC \u05E2\u05DE\u05D5\u05D3)", price: 300 },
        { id: "ecommerce-basic", name: "\u05D7\u05E0\u05D5\u05EA \u05D0\u05D5\u05E0\u05DC\u05D9\u05D9\u05DF \u05D1\u05E1\u05D9\u05E1\u05D9\u05EA (\u05E2\u05D3 20 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD)", price: 1450 },
        { id: "multilingual", name: "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05E8\u05D1-\u05DC\u05E9\u05D5\u05E0\u05D9\u05EA (\u05D0\u05E0\u05D2\u05DC\u05D9\u05EA)", price: 850 },
        { id: "blog", name: "\u05D1\u05DC\u05D5\u05D2 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9", price: 550 },
        { id: "custom-forms", name: "\u05D8\u05E4\u05E1\u05D9\u05DD \u05DE\u05D5\u05EA\u05D0\u05DE\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05EA", price: 420 }
      ],
      popular: true,
      dealBadge: "\u05DE\u05D1\u05E6\u05E2 \u05D4\u05E9\u05E7\u05D4",
      dealBadgeIcon: "bxs-hot",
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)"
    },
    {
      id: "business-card",
      icon: "bx-id-card",
      title: '<i class="fas fa-credit-card"></i> \u05D0\u05EA\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D1\u05D9\u05E7\u05D5\u05E8',
      description: "\u05D0\u05EA\u05E8 \u05DE\u05D9\u05E0\u05D9\u05DE\u05DC\u05D9\u05E1\u05D8\u05D9 \u05E2\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA \u05D5\u05D8\u05D5\u05E4\u05E1 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8",
      basePrice: 1350,
      originalPrice: 1900,
      discount: 29,
      currency: "\u20AA",
      timeline: "1-2 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA",
      features: [
        "\u05E2\u05DE\u05D5\u05D3 \u05D9\u05D7\u05D9\u05D3 \u05DE\u05E2\u05D5\u05E6\u05D1",
        "\u05E4\u05E8\u05D8\u05D9 \u05D4\u05EA\u05E7\u05E9\u05E8\u05D5\u05EA \u05D1\u05E8\u05D5\u05E8\u05D9\u05DD",
        "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D4\u05D9\u05E8 \u05DC\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4",
        "\u05D8\u05D5\u05E4\u05E1 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E7\u05E9\u05E8 \u05E4\u05E9\u05D5\u05D8",
        "\u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05DE\u05D5\u05D1\u05D9\u05D9\u05DC",
        "\u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD \u05DC\u05E8\u05E9\u05EA\u05D5\u05EA \u05D7\u05D1\u05E8\u05EA\u05D9\u05D5\u05EA",
        "\u05DE\u05E4\u05D4 \u05DC\u05E2\u05E1\u05E7 (Google Maps)",
        "\u05D0\u05D7\u05E1\u05D5\u05DF \u05E9\u05E0\u05D4 \u05E8\u05D0\u05E9\u05D5\u05E0\u05D4"
      ],
      addons: [
        { id: "gallery", name: "\u05D2\u05DC\u05E8\u05D9\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA", price: 300 },
        { id: "booking", name: "\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D9\u05EA Appointed.cloud \u05DC\u05E0\u05D9\u05D4\u05D5\u05DC \u05EA\u05D5\u05E8\u05D9\u05DD", price: 500 },
        { id: "reviews", name: "\u05DE\u05E2\u05E8\u05DB\u05EA \u05D4\u05DE\u05DC\u05E6\u05D5\u05EA \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA", price: 350 }
      ],
      dealBadge: "\u05DE\u05D7\u05D9\u05E8 \u05DE\u05D1\u05E6\u05E2",
      dealBadgeIcon: "bxs-zap",
      gradient: "linear-gradient(135deg, #10b981, #14b8a6)"
    },
    {
      id: "landing-newsletter",
      icon: "bx-envelope",
      title: '<i class="fas fa-envelope"></i> \u05D3\u05E3 \u05E0\u05D7\u05D9\u05EA\u05D4 + \u05E0\u05D9\u05D5\u05D6\u05DC\u05D8\u05E8',
      description: "\u05E4\u05EA\u05E8\u05D5\u05DF \u05E9\u05DE\u05DE\u05D9\u05E8 \u05D2\u05D5\u05DC\u05E9\u05D9\u05DD \u05DC\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E2\u05DD \u05E0\u05D9\u05D5\u05D6\u05DC\u05D8\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9",
      basePrice: 2400,
      originalPrice: 3400,
      discount: 29,
      currency: "\u20AA",
      timeline: "2-3 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA",
      features: [
        "\u05D3\u05E3 \u05E0\u05D7\u05D9\u05EA\u05D4 \u05DE\u05DE\u05D5\u05E7\u05D3 \u05D4\u05DE\u05E8\u05D5\u05EA",
        "\u05DE\u05E2\u05E8\u05DB\u05EA \u05E0\u05D9\u05D5\u05D6\u05DC\u05D8\u05E8 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA",
        "\u05D8\u05E4\u05E1\u05D9 \u05D4\u05E8\u05E9\u05DE\u05D4 \u05D7\u05DB\u05DE\u05D9\u05DD",
        "\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05E2\u05DD \u05DB\u05DC\u05D9 \u05E9\u05D9\u05D5\u05D5\u05E7",
        "\u05D0\u05E0\u05DC\u05D9\u05D8\u05D9\u05E7\u05E1 \u05D5\u05DE\u05E2\u05E7\u05D1 \u05D4\u05DE\u05E8\u05D5\u05EA",
        "\u05E2\u05D9\u05E6\u05D5\u05D1 UI/UX \u05DE\u05DE\u05D9\u05E8",
        "\u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4 \u05DC\u05DE\u05D5\u05D1\u05D9\u05D9\u05DC",
        "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D7\u05D5\u05D3\u05E9 \u05E8\u05D0\u05E9\u05D5\u05DF"
      ],
      addons: [
        { id: "ab-testing", name: "\u05DE\u05E2\u05E8\u05DB\u05EA A/B Testing", price: 1050 },
        { id: "advanced-analytics", name: "\u05D0\u05E0\u05DC\u05D9\u05D8\u05D9\u05E7\u05E1 \u05DE\u05EA\u05E7\u05D3\u05DD", price: 550 },
        { id: "automation", name: "\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D5\u05EA \u05E9\u05D9\u05D5\u05D5\u05E7", price: 850 }
      ],
      dealBadge: "\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E9\u05D5\u05D5\u05D4",
      dealBadgeIcon: "bxs-diamond",
      gradient: "linear-gradient(135deg, #f59e0b, #f97316)"
    },
    {
      id: "mobile-app",
      icon: "bx-mobile",
      title: '<i class="fas fa-mobile-alt"></i> \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05DE\u05D5\u05D1\u05D9\u05D9\u05DC',
      description: "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05DE\u05D5\u05EA\u05D0\u05DE\u05D5\u05EA \u05D0\u05D9\u05E9\u05D9\u05EA \u05DC\u05DE\u05D5\u05D1\u05D9\u05D9\u05DC \u05E2\u05DD \u05D7\u05D5\u05D5\u05D9\u05D9\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9 \u05DE\u05E2\u05D5\u05DC\u05D4",
      basePrice: 8800,
      originalPrice: 13e3,
      discount: 32,
      currency: "\u20AA",
      timeline: "4-8 \u05E9\u05D1\u05D5\u05E2\u05D5\u05EA",
      features: [
        "\u05E4\u05D9\u05EA\u05D5\u05D7 Cross-Platform (iOS + Android)",
        "\u05E2\u05D9\u05E6\u05D5\u05D1 UI/UX \u05DE\u05D5\u05EA\u05D0\u05DD \u05DC\u05DE\u05D5\u05D1\u05D9\u05D9\u05DC",
        "\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D4 \u05E2\u05DD API \u05D5\u05E9\u05E8\u05EA\u05D9\u05DD",
        "\u05D4\u05EA\u05E8\u05D0\u05D5\u05EA Push",
        "\u05D1\u05D3\u05D9\u05E7\u05D5\u05EA \u05D0\u05D9\u05DB\u05D5\u05EA \u05DE\u05E7\u05D9\u05E4\u05D5\u05EA",
        "\u05E4\u05E8\u05E1\u05D5\u05DD \u05DC-App Store / Play Store",
        "\u05EA\u05D9\u05E2\u05D5\u05D3 \u05DE\u05E4\u05D5\u05E8\u05D8",
        "\u05EA\u05DE\u05D9\u05DB\u05D4 3 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD"
      ],
      addons: [
        { id: "native-dev", name: "\u05E4\u05D9\u05EA\u05D5\u05D7 Native (\u05D1\u05DE\u05E7\u05D5\u05DD Cross-Platform)", price: 3500 },
        { id: "backend", name: "\u05E4\u05D9\u05EA\u05D5\u05D7 Backend \u05DE\u05DC\u05D0", price: 4200 },
        { id: "admin-panel", name: "\u05E4\u05D0\u05E0\u05DC \u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05EA\u05E7\u05D3\u05DD", price: 2500 },
        { id: "payment-integration", name: "\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D9\u05EA \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD", price: 1400 }
      ],
      dealBadge: "\u05DE\u05D1\u05E6\u05E2 \u05E2\u05E0\u05E7",
      dealBadgeIcon: "bxs-rocket",
      gradient: "linear-gradient(135deg, #ec4899, #8b5cf6)"
    },
    {
      id: "maintenance",
      icon: "bx-wrench",
      title: '<i class="fas fa-wrench"></i> \u05EA\u05D7\u05D6\u05D5\u05E7\u05D4 \u05E9\u05D5\u05D8\u05E4\u05EA',
      description: "\u05E9\u05DE\u05D9\u05E8\u05D4 \u05E2\u05DC \u05D4\u05D0\u05EA\u05E8 \u05DE\u05E2\u05D5\u05D3\u05DB\u05DF, \u05DE\u05D0\u05D5\u05D1\u05D8\u05D7 \u05D5\u05DE\u05D4\u05D9\u05E8 \u05DC\u05D0\u05D5\u05E8\u05DA \u05D6\u05DE\u05DF",
      basePrice: 300,
      originalPrice: 450,
      discount: 33,
      currency: "\u20AA/\u05D7\u05D5\u05D3\u05E9",
      timeline: "\u05E9\u05D9\u05E8\u05D5\u05EA \u05D7\u05D5\u05D3\u05E9\u05D9",
      features: [
        "\u05E2\u05D3\u05DB\u05D5\u05E0\u05D9 \u05D0\u05D1\u05D8\u05D7\u05D4 \u05E9\u05D5\u05D8\u05E4\u05D9\u05DD",
        "\u05D2\u05D9\u05D1\u05D5\u05D9\u05D9\u05DD \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05D9\u05DD \u05D9\u05D5\u05DE\u05D9\u05D9\u05DD",
        "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D8\u05DB\u05E0\u05D9\u05EA \u05DE\u05D4\u05D9\u05E8\u05D4",
        "\u05EA\u05D9\u05E7\u05D5\u05E0\u05D9 \u05D1\u05D0\u05D2\u05D9\u05DD",
        "\u05E9\u05D9\u05E4\u05D5\u05E8\u05D9 \u05D1\u05D9\u05E6\u05D5\u05E2\u05D9\u05DD",
        "\u05E0\u05D9\u05D8\u05D5\u05E8 \u05D6\u05DE\u05D9\u05E0\u05D5\u05EA 24/7",
        "\u05E2\u05D3\u05DB\u05D5\u05E0\u05D9 \u05EA\u05D5\u05DB\u05DF (\u05E2\u05D3 2 \u05E9\u05E2\u05D5\u05EA/\u05D7\u05D5\u05D3\u05E9)",
        "\u05D3\u05D5\u05D7\u05D5\u05EA \u05D1\u05D9\u05E6\u05D5\u05E2\u05D9\u05DD \u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD"
      ],
      addons: [
        { id: "extra-hours", name: "\u05E9\u05E2\u05D5\u05EA \u05EA\u05D5\u05DB\u05DF \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA (\u05E9\u05E2\u05D4)", price: 110 },
        { id: "priority-support", name: "\u05EA\u05DE\u05D9\u05DB\u05D4 \u05E2\u05D3\u05D9\u05E4\u05D5\u05EA 24/7", price: 140 },
        { id: "seo-monthly", name: "\u05D0\u05D5\u05E4\u05D8\u05D9\u05DE\u05D9\u05D6\u05E6\u05D9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05EA SEO", price: 350 }
      ],
      dealBadge: "\u05DE\u05D7\u05D9\u05E8 \u05DE\u05D9\u05D5\u05D7\u05D3",
      dealBadgeIcon: "bxs-star",
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
    }
  ];
  const comboDeals = [
    {
      id: "startup-package",
      title: "\u05D7\u05D1\u05D9\u05DC\u05EA STARTUP \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA",
      icon: "bxs-rocket",
      items: ["\u05D0\u05EA\u05E8 \u05EA\u05D3\u05DE\u05D9\u05EA \u05DC\u05E2\u05E1\u05E7\u05D9\u05DD", "\u05D3\u05E3 \u05E0\u05D7\u05D9\u05EA\u05D4 + \u05E0\u05D9\u05D5\u05D6\u05DC\u05D8\u05E8", "\u05EA\u05D7\u05D6\u05D5\u05E7\u05D4 12 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD"],
      regularPrice: 8500,
      dealPrice: 6e3,
      savings: 2500,
      badge: "\u05DE\u05D1\u05E6\u05E2 \u05D1\u05DC\u05E2\u05D3\u05D9",
      badgeIcon: "bxs-flame",
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#6366f1"
    },
    {
      id: "digital-pro",
      title: "\u05D7\u05D1\u05D9\u05DC\u05EA DIGITAL PRO",
      icon: "bxs-briefcase-alt-2",
      items: ["\u05D0\u05EA\u05E8 \u05EA\u05D3\u05DE\u05D9\u05EA \u05DE\u05DC\u05D0", "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05DE\u05D5\u05D1\u05D9\u05D9\u05DC", "\u05EA\u05D7\u05D6\u05D5\u05E7\u05D4 12 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD", "SEO \u05D7\u05D5\u05D3\u05E9\u05D9"],
      regularPrice: 16500,
      dealPrice: 12e3,
      savings: 4500,
      badge: "\u05D4\u05D7\u05D1\u05D9\u05DC\u05D4 \u05D4\u05DB\u05D9 \u05DE\u05E9\u05EA\u05DC\u05DE\u05EA",
      badgeIcon: "bxs-crown",
      gradient: "linear-gradient(135deg, #f59e0b, #f97316)",
      color: "#f59e0b"
    },
    {
      id: "quick-start",
      title: "QUICK START",
      icon: "bxs-bolt",
      items: ["\u05D0\u05EA\u05E8 \u05DB\u05E8\u05D8\u05D9\u05E1 \u05D1\u05D9\u05E7\u05D5\u05E8", "\u05EA\u05D7\u05D6\u05D5\u05E7\u05D4 6 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD"],
      regularPrice: 3e3,
      dealPrice: 2100,
      savings: 900,
      badge: "\u05DE\u05EA\u05E0\u05D4 \u05DC\u05E2\u05E1\u05E7 \u05D7\u05D3\u05E9",
      badgeIcon: "bxs-gift",
      gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
      color: "#10b981"
    }
  ];
  const limitedTimeOffer = {
    endDate: "2026-03-31",
    discount: 15,
    message: "\u05DE\u05D1\u05E6\u05E2 \u05DC\u05D6\u05DE\u05DF \u05DE\u05D5\u05D2\u05D1\u05DC! \u05D4\u05E0\u05D7\u05D4 \u05E0\u05D5\u05E1\u05E4\u05EA \u05E9\u05DC 15% \u05E2\u05DC \u05DB\u05DC \u05D4\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05E2\u05D3 \u05E1\u05D5\u05E3 \u05DE\u05E8\u05E5",
    icon: "bx-time-five"
  };
  const toggleAddon = (packageId, addonId, price) => {
    setSelectedAddons((prev) => {
      const packageAddons = prev[packageId] || {};
      const newPackageAddons = {
        ...packageAddons,
        [addonId]: packageAddons[addonId] ? void 0 : price
      };
      return {
        ...prev,
        [packageId]: newPackageAddons
      };
    });
  };
  const calculateTotal = (packageId, basePrice) => {
    const addonsTotal = Object.values(selectedAddons[packageId] || {}).filter(Boolean).reduce((sum, price) => sum + price, 0);
    return basePrice + addonsTotal;
  };
  const handleSelectPricing = (packageId, pricing) => {
    var _a;
    const total = calculateTotal(packageId, pricing.basePrice);
    const selectedAddonsList = ((_a = pricing.addons) == null ? void 0 : _a.filter(
      (addon) => {
        var _a2;
        return (_a2 = selectedAddons[packageId]) == null ? void 0 : _a2[addon.id];
      }
    ).map((addon) => addon.name)) || [];
    const message = `*\u05D4\u05D6\u05DE\u05E0\u05EA \u05D7\u05D1\u05D9\u05DC\u05D4 \u05DE\u05D4\u05D0\u05EA\u05E8!*

*\u05D7\u05D1\u05D9\u05DC\u05D4 \u05E0\u05D1\u05D7\u05E8\u05EA:*
${pricing.title.replace(/<[^>]*>/g, "")}

*\u05DE\u05D7\u05D9\u05E8:*
\u05DE\u05D7\u05D9\u05E8 \u05D1\u05E1\u05D9\u05E1: ${pricing.basePrice.toLocaleString()}\u20AA
${selectedAddonsList.length > 0 ? `
*\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA \u05E9\u05E0\u05D1\u05D7\u05E8\u05D5:*
${selectedAddonsList.map((name) => `\u2022 ${name}`).join("\n")}` : ""}
*\u05E1\u05D4"\u05DB: ${total.toLocaleString()}\u20AA*

*\u05D6\u05DE\u05DF \u05D1\u05D9\u05E6\u05D5\u05E2 \u05DE\u05E9\u05D5\u05E2\u05E8:* ${pricing.timeline}

\u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05DF \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DE\u05E4\u05D5\u05E8\u05D8\u05EA!`;
    const phoneNumber = "972547466508";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  const handleSelectComboDeal = (deal) => {
    const message = `*\u05D4\u05EA\u05E2\u05E0\u05D9\u05D9\u05E0\u05D5\u05EA \u05D1\u05D7\u05D1\u05D9\u05DC\u05EA \u05DE\u05D1\u05E6\u05E2!*

${deal.badge} - ${deal.title}

*\u05D4\u05D7\u05D1\u05D9\u05DC\u05D4 \u05DB\u05D5\u05DC\u05DC\u05EA:*
${deal.items.map((item) => `\u2713 ${item}`).join("\n")}

*\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD:*
\u05DE\u05D7\u05D9\u05E8 \u05E8\u05D2\u05D9\u05DC: ~~${deal.regularPrice.toLocaleString()}\u20AA~~
*\u05DE\u05D7\u05D9\u05E8 \u05DE\u05D1\u05E6\u05E2: ${deal.dealPrice.toLocaleString()}\u20AA*
\u05D7\u05D5\u05E1\u05DB\u05D9\u05DD: ${deal.savings.toLocaleString()}\u20AA

\u05D0\u05E9\u05DE\u05D7 \u05DC\u05E9\u05DE\u05D5\u05E2 \u05E4\u05E8\u05D8\u05D9\u05DD \u05E0\u05D5\u05E1\u05E4\u05D9\u05DD!`;
    const phoneNumber = "972547466508";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
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
  React.useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
      if (currentSlide >= pricingData.length) {
        setCurrentSlide(0);
      } else if (currentSlide < 0) {
        setCurrentSlide(pricingData.length - 1);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [currentSlide, isTransitioning, pricingData.length]);
  const extendedPricingData = [
    pricingData[pricingData.length - 1],
    // Clone last at start
    ...pricingData,
    pricingData[0]
    // Clone first at end
  ];
  const getTransformValue = () => {
    return -(currentSlide + 1) * 100;
  };
  const toggleAddonsExpand = (packageId) => {
    setExpandedAddons((prev) => ({ ...prev, [packageId]: !prev[packageId] }));
  };
  return /* @__PURE__ */ React.createElement("section", { id: "pricing", className: "pricing-quote" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, showOfferPopup && /* @__PURE__ */ React.createElement("div", { className: "offer-popup-overlay", onClick: () => setShowOfferPopup(false) }, /* @__PURE__ */ React.createElement("div", { className: "offer-popup", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "popup-close", onClick: () => setShowOfferPopup(false) }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-x" })), /* @__PURE__ */ React.createElement("div", { className: "popup-icon" }, /* @__PURE__ */ React.createElement("i", { className: `bx ${limitedTimeOffer.icon}` })), /* @__PURE__ */ React.createElement("h3", { className: "popup-title" }, "\u05DE\u05D1\u05E6\u05E2 \u05DC\u05D6\u05DE\u05DF \u05DE\u05D5\u05D2\u05D1\u05DC!"), /* @__PURE__ */ React.createElement("p", { className: "popup-message" }, limitedTimeOffer.message), /* @__PURE__ */ React.createElement("button", { className: "popup-cta", onClick: () => setShowOfferPopup(false) }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-check" }), "\u05D4\u05D1\u05E0\u05EA\u05D9, \u05D1\u05D5\u05D0\u05D5 \u05E0\u05EA\u05D7\u05D9\u05DC!"))), /* @__PURE__ */ React.createElement("div", { className: "section-header", "data-aos": "fade-up" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("i", { className: "bx bxs-hot" }), "\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05E0\u05E8\u05D7\u05D1\u05D9\u05DD - \u05D7\u05D5\u05E1\u05DB\u05D9\u05DD \u05D0\u05DC\u05E4\u05D9 \u05E9\u05E7\u05DC\u05D9\u05DD!"), /* @__PURE__ */ React.createElement("p", { className: "section-description" }, "\u05D1\u05D7\u05E8\u05D5 \u05D7\u05D1\u05D9\u05DC\u05EA \u05D1\u05E1\u05D9\u05E1 \u05D5\u05D4\u05D5\u05E1\u05D9\u05E4\u05D5 \u05EA\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05E4\u05D9 \u05D4\u05E6\u05D5\u05E8\u05DA - \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05EA\u05D7\u05E8\u05D5\u05EA\u05D9\u05D9\u05DD \u05E2\u05DD \u05D4\u05E0\u05D7\u05D5\u05EA \u05E2\u05E0\u05E7!")), /* @__PURE__ */ React.createElement("div", { className: "combo-deals-section", "data-aos": "fade-up" }, /* @__PURE__ */ React.createElement("h3", { className: "combo-title" }, /* @__PURE__ */ React.createElement("i", { className: "bx bxs-gift" }), "\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05DE\u05E9\u05D5\u05DC\u05D1\u05D5\u05EA - \u05D4\u05D7\u05D9\u05E1\u05DB\u05D5\u05DF \u05D4\u05DB\u05D9 \u05D2\u05D3\u05D5\u05DC!"), /* @__PURE__ */ React.createElement("div", { className: "combo-deals-grid" }, comboDeals.map((deal, index) => /* @__PURE__ */ React.createElement(
    "div",
    {
      key: deal.id,
      className: "combo-deal-card",
      style: { borderTop: `4px solid ${deal.color}` },
      "data-aos": "flip-left",
      "data-aos-delay": index * 100
    },
    /* @__PURE__ */ React.createElement("div", { className: "combo-badge", style: { background: deal.gradient } }, /* @__PURE__ */ React.createElement("i", { className: `bx ${deal.badgeIcon}` }), /* @__PURE__ */ React.createElement("span", null, deal.badge)),
    /* @__PURE__ */ React.createElement("div", { className: "combo-icon", style: { background: deal.gradient } }, /* @__PURE__ */ React.createElement("i", { className: `bx ${deal.icon}` })),
    /* @__PURE__ */ React.createElement("h4", null, deal.title),
    /* @__PURE__ */ React.createElement("ul", { className: "combo-items" }, deal.items.map((item, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-check-double" }), item))),
    /* @__PURE__ */ React.createElement("div", { className: "combo-pricing" }, /* @__PURE__ */ React.createElement("div", { className: "price-comparison" }, /* @__PURE__ */ React.createElement("span", { className: "regular-price" }, "~~", deal.regularPrice.toLocaleString(), "\u20AA~~"), /* @__PURE__ */ React.createElement("span", { className: "deal-price" }, deal.dealPrice.toLocaleString(), "\u20AA")), /* @__PURE__ */ React.createElement("div", { className: "savings-badge" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-dollar-circle" }), "\u05D7\u05D5\u05E1\u05DB\u05D9\u05DD ", deal.savings.toLocaleString(), "\u20AA!")),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        className: "btn-combo-deal",
        style: { background: deal.gradient },
        onClick: () => handleSelectComboDeal(deal)
      },
      /* @__PURE__ */ React.createElement("i", { className: "bx bx-cart" }),
      "\u05D0\u05E0\u05D9 \u05E8\u05D5\u05E6\u05D4 \u05D0\u05EA \u05D4\u05D7\u05D1\u05D9\u05DC\u05D4!"
    )
  )))), /* @__PURE__ */ React.createElement("div", { className: "individual-packages", "data-aos": "fade-up" }, /* @__PURE__ */ React.createElement("h3", { className: "packages-title" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-customize" }), "\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05D1\u05D5\u05D3\u05D3\u05D5\u05EA"), /* @__PURE__ */ React.createElement("p", { className: "packages-subtitle" }, "\u05D1\u05D7\u05E8\u05D5 \u05D7\u05D1\u05D9\u05DC\u05D4 \u05D5\u05D4\u05D5\u05E1\u05D9\u05E4\u05D5 \u05EA\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05E4\u05D9 \u05D4\u05E6\u05D5\u05E8\u05DA")), /* @__PURE__ */ React.createElement("div", { className: "pricing-carousel-wrapper", "data-aos": "fade-up", "data-aos-delay": "100" }, /* @__PURE__ */ React.createElement("button", { className: "carousel-nav prev", onClick: prevSlide, "aria-label": "\u05DB\u05E8\u05D8\u05D9\u05E1 \u05E7\u05D5\u05D3\u05DD" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-chevron-left" })), /* @__PURE__ */ React.createElement("div", { className: "pricing-carousel" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "pricing-carousel-track",
      style: {
        transform: `translateX(${getTransformValue()}%)`,
        transition: isTransitioning ? "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none"
      }
    },
    extendedPricingData.map((pricing, index) => {
      const total = calculateTotal(pricing.id, pricing.basePrice);
      const hasAddons = Object.values(selectedAddons[pricing.id] || {}).some(Boolean);
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          key: `${pricing.id}-${index}`,
          className: `pricing-card-slide ${pricing.popular ? "popular" : ""}`
        },
        /* @__PURE__ */ React.createElement("div", { className: "pricing-card" }, pricing.popular && /* @__PURE__ */ React.createElement("span", { className: "popular-badge" }, /* @__PURE__ */ React.createElement("i", { className: "bx bxs-star" }), "\u05D4\u05DB\u05D9 \u05E4\u05D5\u05E4\u05D5\u05DC\u05E8\u05D9"), pricing.dealBadge && /* @__PURE__ */ React.createElement("div", { className: "deal-badge-top", style: { background: pricing.gradient } }, /* @__PURE__ */ React.createElement("i", { className: `bx ${pricing.dealBadgeIcon}` }), /* @__PURE__ */ React.createElement("span", null, pricing.dealBadge)), /* @__PURE__ */ React.createElement("div", { className: "pricing-header" }, /* @__PURE__ */ React.createElement("div", { className: "pricing-icon", style: { background: pricing.gradient } }, /* @__PURE__ */ React.createElement("i", { className: `bx ${pricing.icon}` })), /* @__PURE__ */ React.createElement("h3", { dangerouslySetInnerHTML: { __html: pricing.title } }), /* @__PURE__ */ React.createElement("p", { className: "pricing-description" }, pricing.description)), /* @__PURE__ */ React.createElement("div", { className: "pricing-price" }, pricing.discount > 0 && /* @__PURE__ */ React.createElement("div", { className: "original-price" }, /* @__PURE__ */ React.createElement("span", { className: "strikethrough" }, pricing.originalPrice.toLocaleString(), pricing.currency), /* @__PURE__ */ React.createElement("span", { className: "discount-badge" }, "-", pricing.discount, "%")), /* @__PURE__ */ React.createElement("div", { className: "current-price" }, /* @__PURE__ */ React.createElement("span", { className: "price-amount" }, pricing.basePrice.toLocaleString()), /* @__PURE__ */ React.createElement("span", { className: "price-currency" }, pricing.currency)), hasAddons && /* @__PURE__ */ React.createElement("div", { className: "total-with-addons" }, "+ \u05EA\u05D5\u05E1\u05E4\u05D5\u05EA: ", /* @__PURE__ */ React.createElement("strong", null, total.toLocaleString(), "\u20AA"))), /* @__PURE__ */ React.createElement("div", { className: "pricing-timeline" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-time-five" }), /* @__PURE__ */ React.createElement("span", null, pricing.timeline)), /* @__PURE__ */ React.createElement("ul", { className: "pricing-features" }, pricing.features.map((feature, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-check-circle" }), /* @__PURE__ */ React.createElement("span", null, feature)))), pricing.addons && pricing.addons.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "addons-section" }, /* @__PURE__ */ React.createElement(
          "h4",
          {
            className: "addons-title addons-toggle",
            onClick: () => toggleAddonsExpand(pricing.id),
            role: "button",
            tabIndex: 0,
            onKeyDown: (e) => e.key === "Enter" && toggleAddonsExpand(pricing.id),
            "aria-expanded": expandedAddons[pricing.id]
          },
          /* @__PURE__ */ React.createElement("i", { className: `bx ${expandedAddons[pricing.id] ? "bx-chevron-down" : "bx-chevron-left"}` }),
          "\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA \u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9\u05D5\u05EA",
          Object.values(selectedAddons[pricing.id] || {}).filter(Boolean).length > 0 && /* @__PURE__ */ React.createElement("span", { className: "addons-count" }, "(", Object.values(selectedAddons[pricing.id] || {}).filter(Boolean).length, ")")
        ), /* @__PURE__ */ React.createElement("div", { className: `addons-list ${expandedAddons[pricing.id] ? "expanded" : "collapsed"}` }, pricing.addons.map((addon) => {
          var _a;
          return /* @__PURE__ */ React.createElement("label", { key: addon.id, className: "addon-checkbox" }, /* @__PURE__ */ React.createElement(
            "input",
            {
              type: "checkbox",
              checked: !!((_a = selectedAddons[pricing.id]) == null ? void 0 : _a[addon.id]),
              onChange: () => toggleAddon(pricing.id, addon.id, addon.price)
            }
          ), /* @__PURE__ */ React.createElement("span", { className: "addon-name" }, addon.name), /* @__PURE__ */ React.createElement("span", { className: "addon-price" }, "+", addon.price.toLocaleString(), "\u20AA"));
        }))), /* @__PURE__ */ React.createElement(
          "button",
          {
            className: "btn-pricing",
            onClick: () => handleSelectPricing(pricing.id, pricing)
          },
          /* @__PURE__ */ React.createElement("i", { className: "bx bxl-whatsapp" }),
          hasAddons ? `\u05D4\u05D6\u05DE\u05DF \u05D1-${total.toLocaleString()}\u20AA` : "\u05D4\u05D6\u05DE\u05DF \u05E2\u05DB\u05E9\u05D9\u05D5"
        ))
      );
    })
  )), /* @__PURE__ */ React.createElement("button", { className: "carousel-nav next", onClick: nextSlide, "aria-label": "\u05DB\u05E8\u05D8\u05D9\u05E1 \u05D4\u05D1\u05D0" }, /* @__PURE__ */ React.createElement("i", { className: "fas fa-chevron-right" })), /* @__PURE__ */ React.createElement("div", { className: "carousel-indicators" }, pricingData.map((_, index) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: index,
      className: `indicator ${currentSlide === index ? "active" : ""}`,
      onClick: () => goToSlide(index)
    },
    /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, "\u05E2\u05D1\u05D5\u05E8 \u05DC\u05D7\u05D1\u05D9\u05DC\u05D4 ", index + 1)
  )))), /* @__PURE__ */ React.createElement("div", { className: "pricing-notes", "data-aos": "fade-up", "data-aos-delay": "300" }, /* @__PURE__ */ React.createElement("div", { className: "note-card" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-info-circle" }), /* @__PURE__ */ React.createElement("div", { className: "note-content" }, /* @__PURE__ */ React.createElement("h4", { dangerouslySetInnerHTML: { __html: '<i class="fas fa-lightbulb"></i> \u05DC\u05DE\u05D4 \u05D4\u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05D1\u05D8\u05D5\u05D5\u05D7?' } }), /* @__PURE__ */ React.createElement("p", null, "\u05D4\u05DE\u05D7\u05D9\u05E8 \u05D4\u05E1\u05D5\u05E4\u05D9 \u05EA\u05DC\u05D5\u05D9 \u05D1\u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8, \u05DB\u05DE\u05D5\u05EA \u05D4\u05E2\u05DE\u05D5\u05D3\u05D9\u05DD, \u05E4\u05D9\u05E6'\u05E8\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD \u05D5\u05D0\u05D9\u05E0\u05D8\u05D2\u05E8\u05E6\u05D9\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA.", /* @__PURE__ */ React.createElement("strong", null, " \u05E0\u05E1\u05E4\u05E7 \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DE\u05D3\u05D5\u05D9\u05E7\u05EA \u05DC\u05D0\u05D7\u05E8 \u05E9\u05D9\u05D7\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05E7\u05E6\u05E8\u05D4.")))), /* @__PURE__ */ React.createElement("div", { className: "note-card" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-gift" }), /* @__PURE__ */ React.createElement("div", { className: "note-content" }, /* @__PURE__ */ React.createElement("h4", { dangerouslySetInnerHTML: { __html: '<i class="fas fa-gift"></i> \u05DE\u05D4 \u05DB\u05DC\u05D5\u05DC \u05D1\u05DB\u05DC \u05D7\u05D1\u05D9\u05DC\u05D4?' } }), /* @__PURE__ */ React.createElement("p", null, "\u05DB\u05DC \u05D4\u05D7\u05D1\u05D9\u05DC\u05D5\u05EA \u05DB\u05D5\u05DC\u05DC\u05D5\u05EA: \u05D9\u05D9\u05E2\u05D5\u05E5 \u05D5\u05EA\u05DB\u05E0\u05D5\u05DF, \u05E7\u05D5\u05D3 \u05E0\u05E7\u05D9 \u05D5\u05DE\u05E1\u05D5\u05D3\u05E8, \u05D4\u05D3\u05E8\u05DB\u05D4 \u05D1\u05E1\u05D9\u05E1\u05D9\u05EA,", /* @__PURE__ */ React.createElement("strong", null, " \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DC\u05EA\u05E7\u05D5\u05E4\u05EA \u05D4\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05E0\u05E7\u05D5\u05D1\u05D4 \u05D5\u05EA\u05DE\u05D9\u05DB\u05D4 \u05D8\u05DB\u05E0\u05D9\u05EA.")))), /* @__PURE__ */ React.createElement("div", { className: "note-card" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-money" }), /* @__PURE__ */ React.createElement("div", { className: "note-content" }, /* @__PURE__ */ React.createElement("h4", { dangerouslySetInnerHTML: { __html: '<i class="fas fa-credit-card"></i> \u05EA\u05E0\u05D0\u05D9 \u05EA\u05E9\u05DC\u05D5\u05DD \u05D2\u05DE\u05D9\u05E9\u05D9\u05DD' } }), /* @__PURE__ */ React.createElement("p", null, "50% \u05DE\u05E7\u05D3\u05DE\u05D4 \u05D1\u05EA\u05D7\u05D9\u05DC\u05EA \u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8,", /* @__PURE__ */ React.createElement("strong", null, " 50% \u05D9\u05EA\u05E8\u05D4 \u05E2\u05DD \u05DE\u05E1\u05D9\u05E8\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4."), " \u05D0\u05E4\u05E9\u05E8\u05D5\u05EA \u05DC\u05E4\u05E8\u05D9\u05E1\u05EA \u05EA\u05E9\u05DC\u05D5\u05DE\u05D9\u05DD \u05D1\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05D2\u05D3\u05D5\u05DC\u05D9\u05DD.")))), /* @__PURE__ */ React.createElement("div", { className: "pricing-cta", "data-aos": "fade-up", "data-aos-delay": "400" }, /* @__PURE__ */ React.createElement("h3", null, "\u05DC\u05D0 \u05D1\u05D8\u05D5\u05D7\u05D9\u05DD \u05D0\u05D9\u05D6\u05D5 \u05D7\u05D1\u05D9\u05DC\u05D4 \u05DE\u05EA\u05D0\u05D9\u05DE\u05D4 \u05DC\u05DB\u05DD?"), /* @__PURE__ */ React.createElement("p", null, "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05D3\u05D1\u05E8! \u05D0\u05E0\u05D9 \u05DB\u05D0\u05DF \u05DB\u05D3\u05D9 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DB\u05DD \u05DC\u05DE\u05E6\u05D5\u05D0 \u05D0\u05EA \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF \u05D4\u05DE\u05D5\u05E9\u05DC\u05DD"), /* @__PURE__ */ React.createElement("a", { href: "#contact", className: "btn btn-primary btn-large" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-phone" }), "\u05E6\u05E8\u05D5 \u05E7\u05E9\u05E8 \u05DC\u05D9\u05D9\u05E2\u05D5\u05E5 \u05D7\u05D9\u05E0\u05DD"))));
};
