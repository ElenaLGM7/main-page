const langSelector = document.getElementById("language-selector");

async function loadLanguage(lang) {
  try {
    const res = await fetch("lang.json");
    const data = await res.json();
    updateTexts(data[lang]);
  } catch (error) {
    console.error("Error loading language file:", error);
  }
}

function updateTexts(langData) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (langData[key]) {
      el.textContent = langData[key];
    }
  });
}

// Al cargar la página, carga el idioma guardado o español por defecto
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "es";
  langSelector.value = savedLang;
  loadLanguage(savedLang);
});

// Cuando cambie el selector, guarda la preferencia y actualiza textos
langSelector.addEventListener("change", () => {
  const selectedLang = langSelector.value;
  localStorage.setItem("language", selectedLang);
  loadLanguage(selectedLang);
});
