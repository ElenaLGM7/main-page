const languageSelector = document.getElementById('language-selector');

const translations = {
  es: {
    title: "Página de presentación",
    headerName: "Elena Guardia",
    welcomeTitle: "Bienvenida",
    welcomeText: "Soy desarrolladora web freelance. Creo páginas profesionales, responsivas y adaptadas a tus necesidades.",
    servicesTitle: "Servicios",
    service1: "Landing pages para negocios",
    service2: "Portfolios personales",
    service3: "Webs multilingües",
    service4: "Formularios de contacto",
    startingAt: "Tarifas desde 150 €",
    pricingTitle: "Tarifas orientativas",
    projectType: "Tipo de proyecto",
    description: "Descripción",
    price: "Precio desde",
    basicPage: "Página básica",
    basicDesc: "1 sección estática (tipo presentación o carta digital)",
    mediumPage: "Página intermedia",
    mediumDesc: "3 secciones, portfolio o formulario de contacto",
    advancedPage: "Página avanzada",
    advancedDesc: "Web multilenguaje, animaciones y diseño responsive",
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
    servicesTitle: "Services",
    service1: "Landing pages for businesses",
    service2: "Personal portfolios",
    service3: "Multilingual websites",
    service4: "Contact forms",
    startingAt: "Prices from 150 €",
    pricingTitle: "Pricing guidelines",
    projectType: "Project type",
    description: "Description",
    price: "Price from",
    basicPage: "Basic page",
    basicDesc: "1 static section (like presentation or digital menu)",
    mediumPage: "Intermediate page",
    mediumDesc: "3 sections, portfolio or contact form",
    advancedPage: "Advanced page",
    advancedDesc: "Multilingual web, animations and responsive design",
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
    servicesTitle: "Servizos",
    service1: "Landing pages para negocios",
    service2: "Portfolios persoais",
    service3: "Webs multilingües",
    service4: "Formularios de contacto",
    startingAt: "Tarifas dende 150 €",
    pricingTitle: "Tarifas orientativas",
    projectType: "Tipo de proxecto",
    description: "Descrición",
    price: "Prezo dende",
    basicPage: "Páxina básica",
    basicDesc: "1 sección estática (tipo presentación ou carta dixital)",
    mediumPage: "Páxina intermedia",
    mediumDesc: "3 seccións, portfolio ou formulario de contacto",
    advancedPage: "Páxina avanzada",
    advancedDesc: "Web multilingüe, animacións e deseño responsive",
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

