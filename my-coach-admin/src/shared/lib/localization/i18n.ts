import { createI18n } from 'vue-i18n';

import translations from './translations';

const localeStorageLang = localStorage.getItem('lang');

const i18n = createI18n({
  legacy: false,
  locale: localeStorageLang || 'en',
  fallbackLocale: 'uk',
  messages: translations,
});

export default i18n;
