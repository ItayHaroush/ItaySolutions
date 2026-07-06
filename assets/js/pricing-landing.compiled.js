const CONTACT_EMAIL = "itay@itaysolutions.com";
const getMailtoUrl = (subject) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject || "\u05E4\u05E0\u05D9\u05D9\u05D4 \u05DE-Itay Solutions")}`;
const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  React.useEffect(() => {
    const checkWhatsApp = () => {
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const hasWhatsApp = isMobile || navigator.userAgent.includes("WhatsApp");
      console.log("\u{1F4F1} Device info:", {
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
    console.log("\u{1F50D} Form submitted with data:", formData);
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("\u26A0\uFE0F \u05D0\u05E0\u05D0 \u05DE\u05DC\u05D0\u05D5 \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D3\u05D5\u05EA \u05D4\u05D7\u05D5\u05D1\u05D4 \u05D4\u05DE\u05E1\u05D5\u05DE\u05E0\u05D9\u05DD \u05D1-*");
      return;
    }
    const message = `\u2B50 *\u05E4\u05E0\u05D9\u05D9\u05D4 \u05D7\u05D3\u05E9\u05D4 \u05DE\u05D4\u05D0\u05EA\u05E8!*

\u{1F464} *\u05E4\u05E8\u05D8\u05D9\u05DD \u05D0\u05D9\u05E9\u05D9\u05D9\u05DD:*
\u2022 \u05E9\u05DD: ${formData.name}
\u2022 \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ${formData.email}
${formData.phone ? `\u2022 \u05D8\u05DC\u05E4\u05D5\u05DF: ${formData.phone}` : ""}

\u{1F3AF} *\u05E4\u05E8\u05D8\u05D9 \u05D4\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8:*
\u2022 \u05E0\u05D5\u05E9\u05D0: ${formData.subject}
\u2022 \u05EA\u05D9\u05D0\u05D5\u05E8: ${formData.message}

\u{1F4BC} *\u05D1\u05E7\u05E9\u05D4:*
\u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05DF \u05DC\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA.
\u05D0\u05E9\u05DE\u05D7 \u05DC\u05D9\u05D9\u05E2\u05D5\u05E5 \u05D5\u05E4\u05D2\u05D9\u05E9\u05D4! 

\u05EA\u05D5\u05D3\u05D4 \u{1F680}`;
    const phoneNumber = "972547466508";
    console.log("\u{1F4F1} WhatsApp number:", phoneNumber);
    console.log("\u{1F4AC} Message to send:", message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    console.log("\u{1F517} WhatsApp URL:", whatsappURL);
    const confirmSend = confirm(`\u{1F4F1} \u05D4\u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DB\u05DD \u05DC\u05E9\u05DC\u05D5\u05D7 \u05D0\u05EA \u05D4\u05D4\u05D5\u05D3\u05E2\u05D4 \u05DC\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4?

\u05D4\u05D4\u05D5\u05D3\u05E2\u05D4 \u05EA\u05D9\u05E9\u05DC\u05D7 \u05DC: +${phoneNumber}

\u05DC\u05D7\u05E6\u05D5 "\u05D0\u05D9\u05E9\u05D5\u05E8" \u05DC\u05E4\u05EA\u05D9\u05D7\u05EA \u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05D0\u05D5 "\u05D1\u05D9\u05D8\u05D5\u05DC" \u05DC\u05E2\u05E8\u05D9\u05DB\u05D4.`);
    if (confirmSend) {
      try {
        const opened = window.open(whatsappURL, "_blank");
        if (opened) {
          console.log("\u2705 WhatsApp opened successfully");
          setTimeout(() => {
            const success = confirm(`\u2705 \u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05E0\u05E4\u05EA\u05D7 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4!

\u{1F514} \u05D7\u05E9\u05D5\u05D1: \u05D0\u05DC \u05EA\u05E9\u05DB\u05D7\u05D5 \u05DC\u05DC\u05D7\u05D5\u05E5 \u05E2\u05DC \u05DB\u05E4\u05EA\u05D5\u05E8 \u05D4\u05E9\u05DC\u05D9\u05D7\u05D4 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4!

\u05D4\u05D0\u05DD \u05D1\u05E8\u05E6\u05D5\u05E0\u05DB\u05DD \u05DC\u05E0\u05E7\u05D5\u05EA \u05D0\u05EA \u05D4\u05D8\u05D5\u05E4\u05E1?`);
            if (success) {
              setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
              });
              console.log("\u{1F9F9} Form cleared");
            }
          }, 1e3);
        } else {
          throw new Error("Failed to open WhatsApp");
        }
      } catch (error) {
        console.error("\u274C Error opening WhatsApp:", error);
        navigator.clipboard.writeText(`Message: ${message}
Phone: +${phoneNumber}`).then(() => {
          alert(`\u26A0\uFE0F \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA.

\u{1F4CB} \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05D4\u05D5\u05E2\u05EA\u05E7\u05D5 \u05DC\u05DC\u05D5\u05D7!
\u{1F4F1} \u05E4\u05EA\u05D7\u05D5 \u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05D9\u05D3\u05E0\u05D9\u05EA \u05D5\u05E9\u05DC\u05D7\u05D5 \u05DC: +${phoneNumber}`);
        }).catch(() => {
          alert(`\u26A0\uFE0F \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05EA\u05D5\u05D7 \u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA.

\u{1F4F1} \u05D0\u05E0\u05D0 \u05E4\u05E0\u05D5 \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA:
\u05D8\u05DC\u05E4\u05D5\u05DF: +${phoneNumber}
\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC: ${CONTACT_EMAIL}`);
        });
      }
    }
  };
  const contactMethods = [
    {
      icon: "bxl-whatsapp",
      title: '<i class="fas fa-comment-dots"></i> \u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4 - \u05EA\u05D2\u05D5\u05D1\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4',
      info: "\u05E7\u05D1\u05DC\u05D5 \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05EA\u05D5\u05DA 24 \u05E9\u05E2\u05D5\u05EA",
      link: "https://wa.me/+972547466508?text=\u05D4\u05D9\u05D9 \u05D0\u05D9\u05EA\u05D9! \u05D0\u05E0\u05D9 \u05DE\u05E2\u05D5\u05E0\u05D9\u05D9\u05DF \u05DC\u05E9\u05DE\u05D5\u05E2 \u05E2\u05DC \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05D4\u05E4\u05D9\u05EA\u05D5\u05D7 \u05E9\u05DC\u05DA",
      color: "#25D366"
    },
    {
      icon: "bx-phone",
      title: '<i class="fas fa-phone"></i> \u05E9\u05D9\u05D7\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5 \u05D7\u05D9\u05E0\u05DE\u05D9\u05EA',
      info: "\u05D7\u05D9\u05D9\u05D2 \u05E2\u05DB\u05E9\u05D9\u05D5 \u05DC\u05E9\u05D9\u05D7\u05EA \u05D9\u05D9\u05E2\u05D5\u05E5",
      link: "tel:+972547466508",
      color: "#4f46e5"
    },
    {
      icon: "bx-envelope",
      title: '<i class="fas fa-envelope"></i> \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E2\u05E1\u05E7\u05D9',
      info: CONTACT_EMAIL,
      link: getMailtoUrl("\u05E4\u05E0\u05D9\u05D9\u05D4 \u05E2\u05E1\u05E7\u05D9\u05EA - \u05E4\u05D9\u05EA\u05D5\u05D7"),
      color: "#EA4335"
    },
    {
      icon: "bxl-linkedin",
      title: '<i class="fas fa-briefcase"></i> \u05E8\u05E9\u05EA \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA',
      info: "\u05D7\u05D9\u05D1\u05D5\u05E8 \u05E2\u05E1\u05E7\u05D9 \u05D1-LinkedIn",
      link: "https://www.linkedin.com/in/itay-haroush-94710b229/?originalSubdomain=il",
      color: "#0A66C2"
    },
    {
      icon: "bxl-github",
      title: '<i class="fab fa-github"></i> GitHub - \u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7',
      info: "\u05E6\u05E4\u05D5 \u05D1\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8\u05D9\u05DD \u05E9\u05DC\u05D9 \u05D1-GitHub",
      link: "https://github.com/itayHaroush",
      color: "#171515"
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "contact" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "contact-content" }, /* @__PURE__ */ React.createElement("div", { className: "contact-info", "data-aos": "fade-right" }, /* @__PURE__ */ React.createElement("div", { className: "contact-intro" }, /* @__PURE__ */ React.createElement("h3", { dangerouslySetInnerHTML: { __html: '<i class="fas fa-rocket"></i> \u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05D4\u05D2\u05D3\u05D9\u05DC \u05D0\u05EA \u05D4\u05E2\u05E1\u05E7?' } }), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "\u05E7\u05D1\u05DC\u05D5 \u05D4\u05E6\u05E2\u05EA \u05DE\u05D7\u05D9\u05E8 \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA \u05DC\u05DC\u05D0 \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05D5\u05EA \u05EA\u05D5\u05DA 24 \u05E9\u05E2\u05D5\u05EA!"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("i", { className: "fas fa-bullseye" }), " \u05D9\u05E2\u05D5\u05E5 \u05D7\u05D9\u05E0\u05DD \u05DC\u05D1\u05D7\u05D9\u05E8\u05EA \u05D4\u05E4\u05EA\u05E8\u05D5\u05DF \u05D4\u05DE\u05EA\u05D0\u05D9\u05DD", /* @__PURE__ */ React.createElement("br", null), "\u{1F4B0} \u05DE\u05D7\u05D9\u05E8\u05D9\u05DD \u05D4\u05D5\u05D2\u05E0\u05D9\u05DD \u05D5\u05E9\u05E7\u05D5\u05E4\u05D9\u05DD", /* @__PURE__ */ React.createElement("br", null), "\u26A1 \u05DE\u05E1\u05D9\u05E8\u05D4 \u05DE\u05D4\u05D9\u05E8\u05D4 \u05D5\u05D0\u05DE\u05D9\u05E0\u05D4", /* @__PURE__ */ React.createElement("br", null), "\u{1F6E0}\uFE0F \u05EA\u05DE\u05D9\u05DB\u05D4 \u05DE\u05DC\u05D0\u05D4 \u05DC\u05D0\u05D7\u05E8 \u05D4\u05DE\u05E1\u05D9\u05E8\u05D4")), /* @__PURE__ */ React.createElement("div", { className: "contact-methods" }, contactMethods.map((method, index) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: index,
      href: method.link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "contact-method",
      "data-aos": "fade-up",
      "data-aos-delay": index * 100
    },
    /* @__PURE__ */ React.createElement("div", { className: "method-icon", style: { backgroundColor: method.color } }, /* @__PURE__ */ React.createElement("i", { className: `bx ${method.icon}` })),
    /* @__PURE__ */ React.createElement("div", { className: "method-info" }, /* @__PURE__ */ React.createElement("h4", { dangerouslySetInnerHTML: { __html: method.title } }), /* @__PURE__ */ React.createElement("p", null, method.info))
  )))), /* @__PURE__ */ React.createElement("div", { className: "section-header", "data-aos": "fade-up" }, /* @__PURE__ */ React.createElement("h2", null, "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05D9\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8"), /* @__PURE__ */ React.createElement("p", null, "\u05DE\u05D5\u05DB\u05E0\u05D9\u05DD \u05DC\u05D4\u05E4\u05D5\u05DA \u05D0\u05EA \u05D4\u05E8\u05E2\u05D9\u05D5\u05DF \u05E9\u05DC\u05DB\u05DD \u05DC\u05DE\u05E6\u05D9\u05D0\u05D5\u05EA? \u05D0\u05E9\u05DE\u05D7 \u05DC\u05E9\u05DE\u05D5\u05E2 \u05E2\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8 \u05E9\u05DC\u05DB\u05DD"), /* @__PURE__ */ React.createElement("form", { className: "contact-form", onSubmit: handleSubmit, "data-aos": "fade-left" }, /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "name",
      placeholder: "\u05D4\u05E9\u05DD \u05E9\u05DC\u05DA *",
      value: formData.name,
      onChange: handleInputChange,
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "form-row" }, /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "email",
      name: "email",
      placeholder: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC *",
      value: formData.email,
      onChange: handleInputChange,
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "tel",
      name: "phone",
      placeholder: "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF",
      value: formData.phone,
      onChange: handleInputChange
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      name: "subject",
      placeholder: "\u05E0\u05D5\u05E9\u05D0 \u05D4\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8 *",
      value: formData.subject,
      onChange: handleInputChange,
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "form-group" }, /* @__PURE__ */ React.createElement(
    "textarea",
    {
      name: "message",
      placeholder: "\u05E1\u05E4\u05E8\u05D5 \u05DC\u05D9 \u05E2\u05DC \u05D4\u05E4\u05E8\u05D5\u05D9\u05D9\u05E7\u05D8 \u05E9\u05DC\u05DB\u05DD... *",
      rows: "6",
      value: formData.message,
      onChange: handleInputChange,
      required: true
    }
  )), /* @__PURE__ */ React.createElement("button", { type: "submit", className: "btn btn-primary btn-full" }, /* @__PURE__ */ React.createElement("i", { className: "bx bx-send" }), "\u05E9\u05DC\u05D7 \u05D4\u05D5\u05D3\u05E2\u05D4"))))));
};
AOS.init({
  duration: 1e3,
  once: true,
  offset: 100
});
const container = document.getElementById("pricing-container");
const root = ReactDOM.createRoot(container);
root.render(/* @__PURE__ */ React.createElement(PricingQuote, null));
const contactContainer = document.getElementById("contact-container");
if (contactContainer) {
  const contactRoot = ReactDOM.createRoot(contactContainer);
  contactRoot.render(/* @__PURE__ */ React.createElement(Contact, null));
}
