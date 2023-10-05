import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

export const useLanguage = () => {
  const { locale } = useI18n();

  const language = ref<string>(locale.value);

  const changeLanguage = (lang: string) => {
    locale.value = lang;
    language.value = lang;
    localStorage.setItem('lang', locale.value);
  };

  return {
    changeLanguage,
    language,
  };
};
