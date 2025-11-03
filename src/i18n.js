// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa tus archivos de traducción
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationFR from './locales/fr/translation.json'; // <-- Ya está importado

// Los recursos (traducciones)
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  fr: { // <-- YA ESTÁ DESCOMENTADO
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del usuario
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    debug: true, // Desactívalo en producción

    interpolation: {
      escapeValue: false // React ya se encarga de escapar valores (XSS)
    },
    react: {
      useSuspense: true,
    }
  });

export default i18n;