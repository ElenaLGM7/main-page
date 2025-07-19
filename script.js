document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("lang-select");

  function setLanguage(lang) {
    fetch("lang.json")
      .then((res) => res.json())
      .then((data) => {
        document.querySelectorAll("[data-translate]").forEach((el) => {
          const key = el.getAttribute("data-translate");
          if (data[lang] && data[lang][key]) {
            el.textContent = data[lang][key];
          }
        });
      });
  }

  langSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });

  setLanguage(langSelect.value);
});

