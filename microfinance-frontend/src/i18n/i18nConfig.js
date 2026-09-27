import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translations';

const savedLng = localStorage.getItem('app_language') || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
