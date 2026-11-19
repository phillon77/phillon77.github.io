(() => {
  const requested = new URLSearchParams(window.location.search).get("lang");
  const locale = requested === "en" || requested === "zh-Hant"
    ? requested
    : (navigator.language.startsWith("zh") ? "zh-Hant" : "en");
  document.documentElement.dataset.locale = locale;
  document.querySelectorAll("[data-locale]").forEach((node) => {
    node.hidden = node.dataset.locale !== locale;
  });
})();
