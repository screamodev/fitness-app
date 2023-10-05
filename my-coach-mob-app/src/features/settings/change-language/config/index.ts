import { Language, TranslateFunction } from 'shared/config/language';

export const getLanguages = (t: TranslateFunction) => [
  {
    name: t(`settings.language.variant.${Language.en}`),
    key: Language.en,
  },
  {
    name: t(`settings.language.variant.${Language.uk}`),
    key: Language.uk,
  },
];
