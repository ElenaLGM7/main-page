document.addEventListener("DOMContentLoaded", () => {
  const languageSelector = document.getElementById("languageSelector");
  const ratesSection = document.getElementById("rates");
  const projectsSection = document.getElementById("projects");
  const form = document.querySelector("form");
  const userLang = localStorage.getItem("lang") || navigator.language.slice(0, 2) || "es";

  const setLanguage = async (lang) => {
    const res = await fetch("lang.json");
    const data = await res.json();
    const content = data[lang] || data["es"];

    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.getAttribute("data-translate");
      if (content[key]) el.innerHTML = content[key];
    });

    // Rellenar tarifas
    if (ratesSection) {
      ratesSection.innerHTML = `
        <ul>
          <li><strong>${content["rate1"]}</strong></li>
          <li><strong>${content["rate2b"]}</strong></li>
          <li><strong>${content["rate2"]}</strong></li>
          <li><strong>${content["rate3"]}</strong></li>
        </ul>
      `;
    }

    // Rellenar proyectos
    if (projectsSection) {
      projectsSection.innerHTML = `
        <div class="project">
          <h3>${content["project1_title"]}</h3>
          <p>${content["project1_desc"]}</p>
          <a href="${content["project1_url"]}" target="_blank">${content["view_project"]}</a>
        </div>
        <div class="project">
          <h3>${content["project2_title"]}</h3>
          <p>${content["project2_desc"]}</p>
          <a href="${content["project2_url"]}" target="_blank">${content["view_project"]}</a>
        </div>
        <div class="project">
          <h3>${content["project3_title"]}</h3>
          <p>${content["project3_desc"]}</p>
          <span class="disabled">${content["coming_soon"]}</span>
        </div>
      `;
    }

    localStorage.setItem("lang", lang);
  };

  setLanguage(userLang);
  languageSelector.value = userLang;

  languageSelector.addEventListener("change", (e) => {
    setLanguage(e.target.value);
    window.plausible("language-switch", { props: { language: e.target.value } });
  });

  form?.addEventListener("submit", () => {
    window.plausible("form-submitted");
  });
});
