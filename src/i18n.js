// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json'; 

// Los recursos (traducciones)
const resources = {
es: {
    translation: translationES
  },
  en: {
    translation: translationEN
  },
  fr: { 
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    debug: true,

    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: true,
    }
  });

export default i18n;