async function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  const res = await fetch('lang.json');
  const data = await res.json();
  const t = data[lang];

  document.title = `Elena Guardia - ${t.title}`;
  document.getElementById("intro").textContent = t.intro;
  document.getElementById("services").textContent = t.services;
  document.getElementById("service1").textContent = t.service1;
  document.getElementById("service2").textContent = t.service2;
  document.getElementById("service3").textContent = t.service3;
  document.getElementById("rates").textContent = t.rates;
  document.getElementById("rate1").textContent = t.rate1;
  document.getElementById("rate2").textContent = t.rate2;
  document.getElementById("rate3").textContent = t.rate3;
  document.getElementById("contact").textContent = t.contact;
  document.getElementById("availability").textContent = t.availability;
  document.getElementById("footer").textContent = t.footer;
}

document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("lang") || "es";
  setLanguage(lang);
  fetch("https://elenaguardia-api.onrender.com/api/visit").then(() => {
    console.log("Visita registrada.");
  });
});
