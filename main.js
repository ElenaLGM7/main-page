const translations = {};
let currentLang = localStorage.getItem("lang") || "es";

fetch("lang.json")
  .then((res) => res.json())
  .then((data) => {
    Object.assign(translations, data);
    setLanguage(currentLang);
  });

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  const t = translations[lang];

  document.getElementById("title").textContent = t.title;
  document.getElementById("aboutTitle").textContent = t.aboutTitle;
  document.getElementById("aboutText").textContent = t.aboutText;
  document.getElementById("projectsTitle").textContent = t.projectsTitle;

  document.getElementById("project1Title").textContent = t.project1Title;
  document.getElementById("project1Desc").textContent = t.project1Desc;

  document.getElementById("project2Title").textContent = t.project2Title;
  document.getElementById("project2Desc").textContent = t.project2Desc;

  document.getElementById("project3Title").textContent = t.project3Title;
  document.getElementById("project3Desc").textContent = t.project3Desc;

  document.getElementById("ratesTitle").textContent = t.ratesTitle;
  document.getElementById("rate1").textContent = t.rate1;
  document.getElementById("rate2").textContent = t.rate2;
  document.getElementById("rate2b").textContent = t.rate2b;
  document.getElementById("rate3").textContent = t.rate3;

  document.getElementById("contactTitle").textContent = t.contactTitle;
  document.getElementById("sendBtn").textContent = t.sendBtn;
  document.getElementById("footerText").textContent = t.footerText;
}
