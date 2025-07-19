const languageSelector = document.getElementById('language-selector');

const translations = {
  es: {
    title: "Página de presentación",
    headerName: "Elena Guardia",
    welcomeTitle: "Bienvenida",
    welcomeText: "Soy desarrolladora web freelance. Creo páginas profesionales, responsivas y adaptadas a tus necesidades.",

    servicesTitle: "Servicios profesionales",
    service1Title: "Landing pages para negocios",
    service1Desc: "Diseño profesional para captar clientes y mejorar tu presencia online.",
    service2Title: "Portfolios personales",
    service2Desc: "Muestra tus proyectos con estilo y claridad, adaptable a cualquier dispositivo.",
    service3Title: "Webs multilingües",
    service3Desc: "Conecta con clientes internacionales con sitios web en varios idiomas.",
    service4Title: "Formularios de contacto",
    service4Desc: "Facilita que tus visitantes se pongan en contacto contigo de manera sencilla.",
    startingAt: "Tarifas desde 150 €",

    pricingTitle: "Tarifas orientativas",
    basicTitle: "Página básica",
    basicDesc: "1 sección estática (tipo presentación o carta digital)",
    basicPrice: "Desde 150 €",
    mediumTitle: "Página intermedia",
    mediumDesc: "3 secciones, portfolio o formulario de contacto",
    mediumPrice: "200–250 €",
    advancedTitle: "Página avanzada",
    advancedDesc: "Web multilenguaje, animaciones y diseño responsive",
    advancedPrice: "300–400 €",
    customProject: "Proyecto personalizado",
    customDesc: "Incluye tiendas online, bases de datos o funcionalidades complejas",
    ask: "Consultar",

    portfolioTitle: "Portfolio",
    proj1Title: "Web Cafetería",
    proj1Desc: "Landing page responsive con Bootstrap y multilenguaje.",
    proj2Title: "Portfolio Personal",
    proj2Desc: "Web para mostrar mis proyectos y experiencia.",
    proj3Title: "Tienda Online",
    proj3Desc: "Diseño responsive y carrito básico con JavaScript.",
    viewPage: "Ver página",

    contactTitle: "Contacto",
    labelName: "Nombre",
    labelEmail: "Correo electrónico",
    labelMessage: "Mensaje",
    sendMessage: "Enviar mensaje"
  },
  en: {
    title: "Presentation page",
    headerName: "Elena Guardia",
    welcomeTitle: "Welcome",
    welcomeText: "I am a freelance web developer. I create professional, responsive pages tailored to your needs.",

    servicesTitle: "Professional services",
    service1Title: "Landing pages for businesses",
    service1Desc: "Professional design to attract customers and improve your online presence.",
    service2Title: "Personal portfolios",
    service2Desc: "Showcase your projects with style and clarity, adaptable to any device.",
    service3Title: "Multilingual websites",
    service3Desc: "Connect with international clients with websites in multiple languages.",
    service4Title: "Contact forms",
    service4Desc: "Make it easy for your visitors to contact you simply.",
    startingAt: "Prices from 150 €",

    pricingTitle: "Pricing guidelines",
    basicTitle: "Basic page",
    basicDesc: "1 static section (like presentation or digital menu)",
    basicPrice: "From 150 €",
    mediumTitle: "Intermediate page",
    mediumDesc: "3 sections, portfolio or contact form",
    mediumPrice: "200–250 €",
    advancedTitle: "Advanced page",
    advancedDesc: "Multilingual web, animations and responsive design",
    advancedPrice: "300–400 €",
    customProject: "Custom project",
    customDesc: "Includes online stores, databases or complex features",
    ask: "Contact us",

    portfolioTitle: "Portfolio",
    proj1Title: "Cafeteria Web",
    proj1Desc: "Responsive landing page with Bootstrap and multilingual support.",
    proj2Title: "Personal Portfolio",
    proj2Desc: "Website to showcase my projects and experience.",
    proj3Title: "Online Store",
    proj3Desc: "Responsive design and basic cart with JavaScript.",
    viewPage: "View page",

    contactTitle: "Contact",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    sendMessage: "Send message"
  },
  gl: {
    title: "Páxina de presentación",
    headerName: "Elena Guardia",
    welcomeTitle: "Benvida",
    welcomeText: "Son desenvolvedora web freelance. Creo páxinas profesionais, responsivas e adaptadas ás túas necesidades.",

    servicesTitle: "Servizos profesionais",
    service1Title: "Landing pages para negocios",
    service1Desc: "Deseño profesional para captar clientes e mellorar a túa presenza online.",
    service2Title: "Portfolios persoais",
    service2Desc: "Mostra os teus proxectos con estilo e claridade, adaptable a calquera dispositivo.",
    service3Title: "Webs multilingües",
    service3Desc: "Conecta con clientes internacionais con páxinas web en varios idiomas.",
    service4Title: "Formularios de contacto",
    service4Desc: "Facilita que os teus visitantes se poñan en contacto contigo de forma sinxela.",
    startingAt: "Tarifas dende 150 €",

    pricingTitle: "Tarifas orientativas",
    basicTitle: "Páxina básica",
    basicDesc: "1 sección estática (tipo presentación ou carta dixital)",
    basicPrice: "Dende 150 €",
    mediumTitle: "Páxina intermedia",
    mediumDesc: "3 seccións, portfolio ou formulario de contacto",
    mediumPrice: "200–250 €",
    advancedTitle: "Páxina avanzada",
    advancedDesc: "Web multilingüe, animacións e deseño responsive",
    advancedPrice: "300–400 €",
    customProject: "Proxecto personalizado",
    customDesc: "Inclúe tendas en liña, bases de datos ou funcionalidades complexas",
    ask: "Consultar",

    portfolioTitle: "Portfolio",
    proj1Title: "Web Cafetería",
    proj1Desc: "Landing page responsive con Bootstrap e multilingüe.",
    proj2Title: "Portfolio persoal",
    proj2Desc: "Web para amosar os meus proxectos e experiencia.",
    proj3Title: "Tenda en liña",
    proj3Desc: "Deseño responsive e carrito básico con JavaScript.",
    viewPage: "Ver páxina",

    contactTitle: "Contacto",
    labelName: "Nome",
    labelEmail: "Correo electrónico",
    labelMessage: "Mensaxe",
    sendMessage: "Enviar mensaxe"
  }
};

function translatePage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // Cambiar atributo lang en html para accesibilidad y SEO
  document.documentElement.lang = lang;
  // Cambiar título aparte
  if (translations[lang] && translations[lang].title) {
    document.title = translations[lang].title;
  }
}

// Evento selector de idioma
languageSelector.addEventListener('change', (e) => {
  translatePage(e.target.value);
});

// Traducción inicial (español por defecto)
translatePage('es');
