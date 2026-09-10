const PricingQuote = () => {
  const packages = [
    {
      id: "takeeat",
      icon: "bx-food-menu",
      title: '<i class="fas fa-utensils"></i> אתר הזמנות דיגיטלי (TakeEat)',
      description: "מערכת הזמנות מוכנה לעסקי מזון - תפריט דיגיטלי, הזמנות עצמאיות וניהול פשוט מהיום הראשון",
      priceType: "setup-monthly",
      setupPrice: 2e3,
      monthlyPrice: 350,
      currency: "₪",
      timeline: "עד 7 ימי עבודה",
      features: [
        "אתר הזמנות מותאם לעסק שלך",
        "תפריט דיגיטלי מעוצב עם קוד QR",
        "ניהול תפריט ומחירים בזמן אמת",
        "ניהול שעות פעילות ואזורי משלוח / איסוף",
        "קבלת הזמנות ישירות מהלקוחות",
        "תמיכה טכנית שוטפת"
      ],
      badge: "הפתרון המהיר ביותר",
      badgeIcon: "bxs-bolt-circle",
      gradient: "linear-gradient(135deg, #ff7a1a, #f59e0b)"
    },
    {
      id: "branded",
      icon: "bxs-crown",
      title: '<i class="fas fa-crown"></i> מערכת הזמנות פרטית במיתוג מלא',
      description: "אתר ומערכת הזמנות עצמאיים בבעלות מלאה של העסק - מיתוג ייחודי, ללא תלות בפלטפורמת צד ג׳",
      priceType: "onetime-renewal",
      oneTimePrice: 12e3,
      renewalMonthly: 250,
      renewalYearly: 2500,
      currency: "₪",
      timeline: "כולל 36 חודשי שימוש",
      features: [
        "מיתוג מלא - לוגו, צבעי מותג ותמונות",
        "עיצוב ייחודי ובלעדי לעסק",
        "שליטה מלאה בתפריט, במחירים ובתוכן",
        "דומיין ואחסון עצמאיים",
        "36 חודשי שימוש כלולים במחיר ההקמה",
        "חידוש שירות בתום התקופה - חודשי או שנתי"
      ],
      popular: true,
      badge: "הכי משתלם לטווח ארוך",
      badgeIcon: "bxs-star",
      gradient: "linear-gradient(135deg, #6366f1, #ff7a1a)"
    }
  ];
  const formatShekel = (value) => value.toLocaleString("he-IL") + "₪";
  const handleSelectPricing = (pkg) => {
    let priceLines;
    if (pkg.priceType === "setup-monthly") {
      priceLines = `הקמה חד פעמית: ${formatShekel(pkg.setupPrice)}
מנוי חודשי: ${formatShekel(pkg.monthlyPrice)}`;
    } else {
      priceLines = `תשלום חד פעמי (כולל 36 חודשי שימוש): ${formatShekel(pkg.oneTimePrice)}
חידוש בתום התקופה: ${formatShekel(pkg.renewalMonthly)}/חודש או ${formatShekel(pkg.renewalYearly)}/שנה`;
    }
    const message = `*התעניינות בהצעת מחיר מהאתר!*

*חבילה נבחרת:*
${pkg.title.replace(/<[^>]*>/g, "")}

*מחיר:*
${priceLines}

*זמן ביצוע משוער:* ${pkg.timeline}

אשמח לקבל פרטים נוספים!`;
    const phoneNumber = "972547466508";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  const handleContactCustom = () => {
    const message = "היי איתי! מעוניין/ת בפיתוח אתר או מערכת מותאמת אישית לעסק שלי. אשמח לשמוע פרטים ולקבל הצעת מחיר.";
    const phoneNumber = "972547466508";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };
  return /* @__PURE__ */ React.createElement("section", { id: "pricing", className: "pricing-quote" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "section-header", "data-aos": "fade-up" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-purchase-tag" }), "חבילות ומחירים"), /* @__PURE__ */ React.createElement("p", { className: "section-description" }, "שתי חבילות מוכנות למערכות הזמנות לעסקי מזון - ומעבר לכך, פיתוח תוכנה מותאם אישית לכל צורך עסקי")), /* @__PURE__ */ React.createElement("div", { className: "individual-packages", "data-aos": "fade-up" }, /* @__PURE__ */ React.createElement("h3", { className: "packages-title" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-store-alt" }), "מערכות הזמנות לעסקי מזון"), /* @__PURE__ */ React.createElement("p", { className: "packages-subtitle" }, "בחרו את המסלול המתאים לעסק שלכם")), /* @__PURE__ */ React.createElement("div", { className: "pricing-grid pricing-grid-static", "data-aos": "fade-up", "data-aos-delay": "100" }, packages.map((pkg) => /* @__PURE__ */ React.createElement("div", { key: pkg.id, className: `pricing-card-slide ${pkg.popular ? "popular" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "pricing-card" }, pkg.popular && /* @__PURE__ */ React.createElement("span", { className: "popular-badge" }, /* @__PURE__ */ React.createElement("i", { className: "bx bxs-star" }), "הכי פופולרי"), pkg.badge && /* @__PURE__ */ React.createElement("div", { className: "deal-badge-top", style: { background: pkg.gradient } }, /* @__PURE__ */ React.createElement("i", { className: `bx ${pkg.badgeIcon}` }), /* @__PURE__ */ React.createElement("span", null, pkg.badge)), /* @__PURE__ */ React.createElement("div", { className: "pricing-header" }, /* @__PURE__ */ React.createElement("div", { className: "pricing-icon", style: { background: pkg.gradient } }, /* @__PURE__ */ React.createElement("i", { className: `bx ${pkg.icon}` })), /* @__PURE__ */ React.createElement("h3", { dangerouslySetInnerHTML: { __html: pkg.title } }), /* @__PURE__ */ React.createElement("p", { className: "pricing-description" }, pkg.description)), /* @__PURE__ */ React.createElement("div", { className: "pricing-price" }, pkg.priceType === "setup-monthly" ? /* @__PURE__ */ React.createElement("div", { className: "dual-price" }, /* @__PURE__ */ React.createElement("div", { className: "dual-price-item" }, /* @__PURE__ */ React.createElement("span", { className: "dual-price-label" }, "הקמה חד פעמית"), /* @__PURE__ */ React.createElement("span", { className: "dual-price-value" }, pkg.setupPrice.toLocaleString(), pkg.currency)), /* @__PURE__ */ React.createElement("div", { className: "dual-price-item" }, /* @__PURE__ */ React.createElement("span", { className: "dual-price-label" }, "מנוי חודשי"), /* @__PURE__ */ React.createElement("span", { className: "dual-price-value" }, pkg.monthlyPrice.toLocaleString(), pkg.currency))) : /* @__PURE__ */ React.createElement("div", { className: "dual-price" }, /* @__PURE__ */ React.createElement("div", { className: "dual-price-item dual-price-item-main" }, /* @__PURE__ */ React.createElement("span", { className: "dual-price-label" }, "תשלום חד פעמי"), /* @__PURE__ */ React.createElement("span", { className: "dual-price-value" }, pkg.oneTimePrice.toLocaleString(), pkg.currency)), /* @__PURE__ */ React.createElement("div", { className: "dual-price-note" }, "חידוש בתום התקופה: ", pkg.renewalMonthly.toLocaleString(), pkg.currency, "/חודש או ", pkg.renewalYearly.toLocaleString(), pkg.currency, "/שנה"))), /* @__PURE__ */ React.createElement("div", { className: "pricing-timeline" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-time-five" }), /* @__PURE__ */ React.createElement("span", null, pkg.timeline)), /* @__PURE__ */ React.createElement("ul", { className: "pricing-features" }, pkg.features.map((feature, i) => /* @__PURE__ */ React.createElement("li", { key: i }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-check-circle" }), /* @__PURE__ */ React.createElement("span", null, feature)))), /* @__PURE__ */ React.createElement("button", { className: "btn-pricing", onClick: () => handleSelectPricing(pkg) }, /* @__PURE__ */ React.createElement("i", { className: "bx bxl-whatsapp" }), "מעוניין/ת בחבילה זו")))), /* @__PURE__ */ React.createElement("div", { className: "pricing-card-slide" }, /* @__PURE__ */ React.createElement("div", { className: "pricing-card pricing-card-custom" }, /* @__PURE__ */ React.createElement("div", { className: "pricing-header" }, /* @__PURE__ */ React.createElement("div", { className: "pricing-icon", style: { background: "linear-gradient(135deg, #3b82f6, #6366f1)" } }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-code-alt" })), /* @__PURE__ */ React.createElement("h3", null, "פיתוח תוכנה מותאם אישית"), /* @__PURE__ */ React.createElement("p", { className: "pricing-description" }, "בניית אתרים, מערכות ניהול ופתרונות דיגיטליים לפי הצורך המדויק של העסק שלך - מעבר לחבילות הקבועות")), /* @__PURE__ */ React.createElement("div", { className: "pricing-price" }, /* @__PURE__ */ React.createElement("div", { className: "custom-price-label" }, "מחיר לפי היקף הפרויקט")), /* @__PURE__ */ React.createElement("ul", { className: "pricing-features" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", { className: "bx bx-check-circle" }), /* @__PURE__ */ React.createElement("span", null, "ייעוץ ואפיון ראשוני")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", { className: "bx bx-check-circle" }), /* @__PURE__ */ React.createElement("span", null, "פיתוח Full Stack מותאם")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", { className: "bx bx-check-circle" }), /* @__PURE__ */ React.createElement("span", null, "אינטגרציות (CRM, תשלומים, ניהול)")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("i", { className: "bx bx-check-circle" }), /* @__PURE__ */ React.createElement("span", null, "תחזוקה ותמיכה לפי הסכם"))), /* @__PURE__ */ React.createElement("button", { className: "btn-pricing btn-pricing-outline", onClick: handleContactCustom }, /* @__PURE__ */ React.createElement("i", { className: "bx bxl-whatsapp" }), "צרו קשר לתמחור אישי")))), /* @__PURE__ */ React.createElement("div", { className: "pricing-notes", "data-aos": "fade-up", "data-aos-delay": "300" }, /* @__PURE__ */ React.createElement("div", { className: "note-card" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-info-circle" }), /* @__PURE__ */ React.createElement("div", { className: "note-content" }, /* @__PURE__ */ React.createElement("h4", { dangerouslySetInnerHTML: { __html: '<i class="fas fa-lightbulb"></i> מה ההבדל בין החבילות?' } }), /* @__PURE__ */ React.createElement("p", null, "TakeEat היא מערכת מוכנה עם התחלה מהירה ומנוי חודשי נמוך.", /* @__PURE__ */ React.createElement("strong", null, " החבילה במיתוג מלא מיועדת לעסקים שרוצים בעלות עצמאית ומראה ייחודי לטווח ארוך.")))), /* @__PURE__ */ React.createElement("div", { className: "note-card" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-gift" }), /* @__PURE__ */ React.createElement("div", { className: "note-content" }, /* @__PURE__ */ React.createElement("h4", { dangerouslySetInnerHTML: { __html: '<i class="fas fa-gift"></i> מה כלול בכל חבילה?' } }), /* @__PURE__ */ React.createElement("p", null, "ייעוץ ותכנון, הקמה מקצועית, הדרכה על המערכת,", /* @__PURE__ */ React.createElement("strong", null, " ותמיכה טכנית שוטפת לאורך כל תקופת השימוש.")))), /* @__PURE__ */ React.createElement("div", { className: "note-card" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-money" }), /* @__PURE__ */ React.createElement("div", { className: "note-content" }, /* @__PURE__ */ React.createElement("h4", { dangerouslySetInnerHTML: { __html: '<i class="fas fa-credit-card"></i> יש לכם צורך שונה?' } }), /* @__PURE__ */ React.createElement("p", null, "מעבר לחבילות ההזמנות, אני מפתח אתרים ומערכות מותאמות אישית לכל סוג עסק -", /* @__PURE__ */ React.createElement("strong", null, " צרו קשר לשיחת ייעוץ ותמחור לפי הפרויקט שלכם."))))), /* @__PURE__ */ React.createElement("div", { className: "pricing-cta", "data-aos": "fade-up", "data-aos-delay": "400" }, /* @__PURE__ */ React.createElement("h3", null, "לא בטוחים איזו חבילה מתאימה לכם?"), /* @__PURE__ */ React.createElement("p", null, "בואו נדבר! אני כאן כדי לעזור לכם למצוא את הפתרון המושלם"), /* @__PURE__ */ React.createElement("a", { href: "#contact", className: "btn btn-primary btn-large" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-phone" }), "צרו קשר לייעוץ חינם"))));
};
