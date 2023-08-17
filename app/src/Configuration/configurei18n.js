import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enResources } from '../TextFiles/translations';

i18n.use(initReactI18next).init({
  resources: { en: enResources },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
});

export default i18n;
