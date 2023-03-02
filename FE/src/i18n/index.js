import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../dictionary/en.json";
import hu from "../dictionary/hu.json";

const resources = {
  en: {
    translation: en,
  },
  hu: {
    translation: hu,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
