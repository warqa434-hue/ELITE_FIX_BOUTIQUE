import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
    },
    ns: ['common'],
    defaultNS: 'common',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
  document.documentElement.setAttribute('lang', lng);

  if (lng === 'ar') {
    document.documentElement.classList.add('ar');
    document.documentElement.classList.remove('en');
  } else {
    document.documentElement.classList.add('en');
    document.documentElement.classList.remove('ar');
  }
});

const currentLng = i18n.language || 'en';
document.documentElement.dir = currentLng === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = currentLng;
if (currentLng === 'ar') {
  document.documentElement.classList.add('ar');
} else {
  document.documentElement.classList.add('en');
}

export default i18n;
