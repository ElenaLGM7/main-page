const translations = {
  es: {
    title: "Desarrollo Web Profesional",
    subtitle: "Transformo ideas en páginas web funcionales y atractivas",
    services_title: "Servicios",
    services_desc: "Ofrezco desarrollo web responsive, moderno y optimizado para tu negocio.",
    prices_title: "Tarifas",
    price_webpage: "Página web informativa desde <strong>150€</strong>",
    price_landing: "Landing page moderna desde <strong>180€</strong>",
    price_store: "Tienda online básica desde <strong>300€</strong>",
    contact_title: "Contacto",
    contact_desc: "Puedes escribirme por correo a <a href='mailto:elenaguardia.dev@gmail.com'>elenaguardia.dev@gmail.com</a>",
    footer_text: "© 2025 Elena Guardia · Desarrollo Web"
  },
  gl: {
    title: "Desenvolvemento Web Profesional",
    subtitle: "Transformo ideas en páxinas web funcionais e atractivas",
    services_title: "Servizos",
    services_desc: "Ofrezo desenvolvemento web responsive, moderno e optimizado para o teu negocio.",
    prices_title: "Tarifas",
    price_webpage: "Páxina web informativa desde <strong>150€</strong>",
    price_landing: "Landing page moderna desde <strong>180€</strong>",
    price_store: "Tenda en liña básica desde <strong>300€</strong>",
    contact_title: "Contacto",
    contact_desc: "Podes escribirme por correo a <a href='mailto:elenaguardia.dev@gmail.com'>elenaguardia.dev@gmail.com</a>",
    footer_text: "© 2025 Elena Guardia · Desenvolvemento Web"
  },
  en: {
    title: "Professional Web Development",
    subtitle: "I turn ideas into functional and attractive websites",
    services_title: "Services",
    services_desc: "I offer responsive, modern and optimized websites for your business.",
    prices_title: "Rates",
    price_webpage: "Informational website from <strong>150€</strong>",
    price_landing: "Modern landing page from <strong>180€</strong>",
    price_store: "Basic online store from <strong>300€</strong>",
    contact_title: "Contact",
    contact_desc: "You can email me at <a href='mailto:elenaguardia.dev@gmail.com'>elenaguardia.dev@gmail.com</a>",
    footer_text: "© 2025 Elena Guardia · Web Development"
  }
};

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.getAttribute("data-lang");
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      el.innerHTML = translations[lang][key];
    });
  });
});
