document.querySelectorAll(".lang-switcher button").forEach(button => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    localStorage.setItem("lang", lang);
    applyLanguage(lang);
    plausible('language_switch', { props: { lang } });
  });
});

function applyLanguage(lang) {
  fetch("lang.json")
    .then(res => res.json())
    .then(data => {
      const t = data[lang];

      // Títulos y descripciones
      document.getElementById("title").textContent = t.title;
      document.getElementById("intro").textContent = t.intro;
      document.getElementById("services-title").textContent = t.services_title;
      document.getElementById("service1").textContent = t.service1;
      document.getElementById("service2").textContent = t.service2;
      document.getElementById("service3").textContent = t.service3;
      document.getElementById("projects-title").textContent = t.projects_title;
      document.getElementById("project1-title").textContent = t.project1_title;
      document.getElementById("project1-desc").textContent = t.project1_desc;
      document.getElementById("project2-title").textContent = t.project2_title;
      document.getElementById("project2-desc").textContent = t.project2_desc;
      document.getElementById("rates-title").textContent = t.rates_title;
      document.getElementById("rate1").textContent = t.rate1;
      document.getElementById("rate2b").textContent = t.rate2b;
      document.getElementById("rate2").textContent = t.rate2;
      document.getElementById("rate3").textContent = t.rate3;
      document.getElementById("contact-title").textContent = t.contact_title;
      document.getElementById("availability").textContent = t.availability;
      document.getElementById("footer").textContent = t.footer;

      // Placeholders del formulario
      document.querySelector('input[name="name"]').placeholder = t.placeholder_name;
      document.querySelector('input[name="email"]').placeholder = t.placeholder_email;
      document.querySelector('textarea[name="message"]').placeholder = t.placeholder_message;
      document.querySelector('button[type="submit"]').textContent = t.submit;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "es";
  applyLanguage(lang);

  // Evento personalizado al enviar el formulario
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    plausible("form_submitted");

    // Confirmación por JS sin evitar el envío
    setTimeout(() => {
      alert("¡Gracias por tu mensaje!");
    }, 300);
  });
});
