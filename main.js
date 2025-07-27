const langButtons = document.querySelectorAll('.lang-switcher button');
const langElements = [
  "title", "intro", "services-title", "service1", "service2", "service3",
  "rates-title", "rate1", "rate2b", "rate2", "rate3",
  "contact-title", "availability", "footer"
];

let currentLang = localStorage.getItem("lang") || "es";

function applyLanguage(lang) {
  fetch('lang.json')
    .then(response => response.json())
    .then(data => {
      langElements.forEach(id => {
        const el = document.getElementById(id);
        if (el && data[lang][id]) {
          el.textContent = data[lang][id];
        }
      });
      localStorage.setItem("lang", lang);
    });
}

langButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedLang = button.getAttribute('data-lang');
    applyLanguage(selectedLang);
  });
});

applyLanguage(currentLang);
