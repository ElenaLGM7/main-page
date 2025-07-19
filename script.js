const translations = {
  es: {
    title: "Desarrollo Web Profesional",
    subtitle: "Transformo ideas en páginas web funcionales y atractivas",
    about_title: "Sobre mí",
    about_text:
      "Soy desarrolladora web FullStack junior, especializada en Frontend y con experiencia práctica en integración de funcionalidades Backend, como bases de datos y formularios. Trabajo con tecnologías modernas para crear páginas web atractivas, accesibles y funcionales, adaptadas a las necesidades reales de cada proyecto. Mi objetivo es acompañarte desde el diseño hasta la puesta en marcha, garantizando soluciones efectivas y profesionales. Estoy en constante aprendizaje para ofrecer cada día mejores servicios, y siempre priorizo la transparencia y la comunicación clara con mis clientes.",
    services_title: "Servicios",
    services_desc: "Ofrezco desarrollo web responsive, moderno y optimizado para tu negocio.",
    prices_title: "Tarifas",
    price_webpage: "Página web informativa desde <strong>150€</strong>",
    price_landing: "Landing page moderna desde <strong>180€</strong>",
    price_store: "Tienda online básica desde <strong>300€</strong>",
    contact_title: "Contacto",
    contact_desc:
      "Puedes escribirme por correo a <a href='mailto:elenaguardia.dev@gmail.com'>elenaguardia.dev@gmail.com</a>",
    footer_text: "© 2025 Elena Guardia · Desarrollo Web"
  },
  gl: {
    title: "Desenvolvemento Web Profesional",
    subtitle: "Transformo ideas en páxinas web funcionais e atractivas",
    about_title: "Sobre min",
    about_text:
      "Son desenvolvedora web FullStack junior, especializada en Frontend e con experiencia práctica na integración de funcionalidades Backend, como bases de datos e formularios. Traballo con tecnoloxías modernas para crear páxinas web atractivas, accesibles e funcionais, adaptadas ás necesidades reais de cada proxecto. O meu obxectivo é acompañarte desde o deseño ata a posta en marcha, garantindo solucións efectivas e profesionais. Estou en constante aprendizaxe para ofrecer cada día mellores servizos, e sempre priorizo a transparencia e a comunicación clara cos meus clientes.",
    services_title: "Servizos",
    services_desc: "Ofrezo desenvolvemento web responsive, moderno e optimizado para o teu negocio.",
    prices_title: "Tarifas",
    price_webpage: "Páxina web informativa desde <strong>150€</strong>",
    price_landing: "Landing page moderna desde <strong>180€</strong>",
    price_store: "Tenda en liña básica desde <strong>300€</strong>",
    contact_title: "Contacto",
    contact_desc:
      "Podes escribirme por correo a <a href='mailto:elenaguardia.dev@gmail.com'>elenaguardia.dev@gmail.com</a>",
    footer_text: "© 2025 Elena Guardia · Desenvolvemento Web"
  },
  en: {
    title: "Professional Web Development",
    subtitle: "I turn ideas into functional and attractive websites",
    about_title: "About me",
    about_text:
      "I am a junior FullStack web developer, specialized in Frontend with practical experience integrating Backend functionalities such as databases and forms. I work with modern technologies to create attractive, accessible, and functional websites tailored to the real needs of each project. My goal is to accompany you from design to deployment, ensuring effective and professional solutions. I am continuously learning to offer better services every day, always prioritizing transparency and clear communication with my clients.",
    services_title: "Services",
    services_desc: "I offer responsive, modern, and optimized web development for your business.",
    prices_title: "Pricing",
    price_webpage: "Informational website from <strong>150€</strong>",
    price_landing: "Modern landing page from <strong>180€</strong>",
    price_store: "Basic online store from <strong>300€</strong>",
    contact_title: "Contact",
    contact_desc: "You can email me at <a href='mailto:elenaguardia.dev@gmail.com'>elenaguardia.dev@gmail.com</a>",
    footer_text: "© 2025 Elena Guardia · Web Development"
  }
};

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  });
});

