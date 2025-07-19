const languageSelector = document.getElementById("language");

const translations = {
  es: {
    home: "Inicio",
    services: "Servicios",
    pricing: "Tarifas",
    contact: "Contacto",
    welcomeMessage: "¡Hola! Soy Elena, desarrolladora web.",
    serviceTitle: "Servicios que ofrezco",
    pricingTitle: "Tarifas",
    contactTitle: "Contacto",
    labelName: "Nombre",
    labelEmail: "Correo electrónico",
    labelMessage: "Mensaje",
    sendMessage: "Enviar mensaje"
  },
  en: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    contact: "Contact",
    welcomeMessage: "Hi! I'm Elena, a web developer.",
    serviceTitle: "Services I Offer",
    pricingTitle: "Rates",
    contactTitle: "Contact",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    sendMessage: "Send message"
  },
  gl: {
    home: "Inicio",
    services: "Servizos",
    pricing: "Tarifas",
    contact: "Contacto",
    welcomeMessage: "Ola! Son Elena, desenvolvedora web.",
    serviceTitle: "Servizos que ofrezo",
    pricingTitle: "Tarifas",
    contactTitle: "Contacto",
    labelName: "Nome",
    labelEmail: "Correo electrónico",
    labelMessage: "Mensaxe",
    sendMessage: "Enviar mensaxe"
  }
};

function updateContent(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

languageSelector.addEventListener('change', (e) => {
  const selectedLang = e.target.value;
  updateContent(selectedLang);
});

window.addEventListener('DOMContentLoaded', () => {
  updateContent(languageSelector.value || 'es');
});
