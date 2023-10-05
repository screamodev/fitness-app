import { useMemo } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { I18n } from 'i18n-js';
import { useRecoilState } from 'recoil';

import { Language, TranslateFunction } from 'shared/config/language';
import { StorageKey } from 'shared/config/storage';
import { languageState } from './language-state';
import translations from './translations';

export const useLanguage = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const { setItem } = useAsyncStorage(StorageKey.lang);

  const i18n = useMemo(
    () =>
      new I18n(translations, {
        defaultLocale: 'uk',
        locale: language,
        enableFallback: true,
        missingBehavior: 'guess',
      }),
    [language],
  );

  const changeLanguage = async (newLanguage: Language) => {
    setLanguage(newLanguage);
    await setItem(newLanguage);
  };

  const translate: TranslateFunction = (scope, options) => i18n.t(scope, options);

  return {
    language,
    changeLanguage,
    t: translate,
  };
};
