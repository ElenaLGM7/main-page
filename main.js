// Traducciones
const translations = {
  es: {
    title: "Desarrolladora Web FullStack Junior",
    intro: "Ayudo a profesionales a destacar con páginas modernas, accesibles y efectivas.",
    servicesTitle: "Servicios",
    service1: "Diseño y desarrollo web responsive",
    service2: "Optimización de rendimiento",
    service3: "Páginas accesibles y modernas",
    ratesTitle: "Tarifas",
    rate1: "Landing page: desde 100 €",
    rate2b: "Proyecto intermedio: desde 150 €",
    rate2: "Web completa: desde 250 €",
    rate3: "Mantenimiento: desde 25 €/mes",
    contactTitle: "Contacto",
    availability: "Disponible para proyectos freelance",
    footer: "© 2025 Elena Guardia. Todos los derechos reservados.",
    btnBudget: "Solicita presupuesto sin compromiso"
  },
  en: {
    title: "FullStack Web Developer Junior",
    intro: "I help professionals stand out with modern, accessible and effective websites.",
    servicesTitle: "Services",
    service1: "Responsive web design & development",
    service2: "Performance optimization",
    service3: "Accessible and modern websites",
    ratesTitle: "Rates",
    rate1: "Landing page: from €100",
    rate2b: "Intermediate project: from €150",
    rate2: "Full website: from €250",
    rate3: "Maintenance: from €25/month",
    contactTitle: "Contact",
    availability: "Available for freelance projects",
    footer: "© 2025 Elena Guardia. All rights reserved.",
    btnBudget: "Request a free quote"
  },
  gl: {
    title: "Desenvolvedora Web FullStack Junior",
    intro: "Axudo a profesionais a destacar con páxinas modernas, accesibles e efectivas.",
    servicesTitle: "Servizos",
    service1: "Deseño e desenvolvemento web responsive",
    service2: "Optimización de rendemento",
    service3: "Páxinas accesibles e modernas",
    ratesTitle: "Tarifas",
    rate1: "Landing page: dende 100 €",
    rate2b: "Proxecto intermedio: dende 150 €",
    rate2: "Web completa: dende 250 €",
    rate3: "Mantemento: dende 25 €/mes",
    contactTitle: "Contacto",
    availability: "Dispoñible para proxectos freelance",
    footer: "© 2025 Elena Guardia. Tódolos dereitos reservados.",
    btnBudget: "Solicita orzamento sen compromiso"
  }
};

// Función para actualizar textos según idioma
function updateTexts(lang) {
  document.getElementById('title').textContent = translations[lang].title;
  document.getElementById('intro').textContent = translations[lang].intro;
  document.getElementById('services-title').textContent = translations[lang].servicesTitle;
  document.getElementById('service1').textContent = translations[lang].service1;
  document.getElementById('service2').textContent = translations[lang].service2;
  document.getElementById('service3').textContent = translations[lang].service3;
  document.getElementById('rates-title').textContent = translations[lang].ratesTitle;
  document.getElementById('rate1').textContent = translations[lang].rate1;
  document.getElementById('rate2b').textContent = translations[lang].rate2b;
  document.getElementById('rate2').textContent = translations[lang].rate2;
  document.getElementById('rate3').textContent = translations[lang].rate3;
  document.getElementById('contact-title').textContent = translations[lang].contactTitle;
  document.getElementById('availability').textContent = translations[lang].availability;
  document.getElementById('footer').textContent = translations[lang].footer;
  document.getElementById('btn-budget').textContent = translations[lang].btnBudget;
}

// Detectar idioma guardado o idioma del navegador
const savedLang = localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'es';
const supportedLangs = ['es', 'en', 'gl'];
const lang = supportedLangs.includes(savedLang) ? savedLang : 'es';

// Inicializar idioma
updateTexts(lang);

// Botones para cambiar idioma
document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.getAttribute('data-lang');
    if (supportedLangs.includes(selectedLang)) {
      updateTexts(selectedLang);
      localStorage.setItem('lang', selectedLang);
    }
  });
});

// Botón de presupuesto: despliega alert (puedes personalizarlo)
document.getElementById('btn-budget').addEventListener('click', () => {
  alert('Gracias por tu interés. Puedes enviarme un mensaje en el formulario de contacto para solicitar presupuesto.');
});

