import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const VITE_ENV = import.meta.env.VITE_ENV;
const namespaces = ["feature-one", "feature-two"];

/**
 * Loads the translation file for a given namespace and language
 * using a fetch technique.
 * @param {string} lng - The language code
 * @param {string} ns - The namespace
 * @returns {Promise<object>} - A promise that resolves to the translation object
 * @throws - If there is an error loading the translation file
 */
const loadTranslations = async (lng, ns) => {
  try {
    const response = await fetch(`/src/modules/${ns}/locales/${lng}/${lng}.json`);
    if (response.ok) {
      const translation = await response.json();
      return translation;
    } else {
      console.warn(`Translation file not found: ${ns}/${lng}`);
      return {};
    }
  } catch (error) {
    console.error(`Error loading translation file: ${ns}/${lng}`, error);
    return {};
  }
};

i18n.on("initialized", async () => {
  const lng = i18n.language || localStorage.getItem('i18nextLng');
  const translations = await Promise.all(namespaces.map(ns => loadTranslations(lng, ns)));
  translations.forEach((data, i) => {
    i18n.addResourceBundle(lng, namespaces[i], data, true, true);
  });

  i18n.changeLanguage(lng);
});

i18n.on("languageChanged", async (lng) => {
  const promises = namespaces.map(ns => loadTranslations(lng, ns));
  const translations = await Promise.all(promises);
  for (let i = 0; i < promises.length; i++) {
    i18n.addResourceBundle(lng, namespaces[i], translations[i], true, true);
  }
});

(async () => {
  i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      defaultNS: "locales",
      debug: VITE_ENV === "development" || VITE_ENV === "local",
      interpolation: { escapeValue: false },
      backend: {
        loadPath: "/locales/common/{{lng}}/{{lng}}.json",
      },
      ns: namespaces,
    })
})();

export default i18n;