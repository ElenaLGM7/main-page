document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "es";
  setLanguage(lang);
});

async function setLanguage(lang) {
  const res = await fetch(`lang-${lang}.json`);
  const data = await res.json();

  document.getElementById("intro").textContent = data.intro;
  document.getElementById("services-title").textContent = data.services;
  document.getElementById("service1").textContent = data.service1;
  document.getElementById("service2").textContent = data.service2;
  document.getElementById("service3").textContent = data.service3;
  document.getElementById("rates-title").textContent = data.rates;
  document.getElementById("rate1").textContent = data.rate1;
  document.getElementById("rate2").textContent = data.rate2;
  document.getElementById("rate3").textContent = data.rate3;
  document.getElementById("contact-title").textContent = data.contact;
  document.getElementById("availability").textContent = data.availability;
  document.getElementById("footer-text").textContent = data.footer;

  localStorage.setItem("lang", lang);
  plausible('language-switch', { props: { lang } });
}
