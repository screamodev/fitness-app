import { TranslateFunction } from 'shared/config/language';
import { Theme } from 'shared/config/theme';

export const getThemes = (t: TranslateFunction) => {
  return [
    {
      name: t(`settings.theme.variant.${Theme.auto}`),
      key: Theme.auto,
    },
    {
      name: t(`settings.theme.variant.${Theme.dark}`),
      key: Theme.dark,
    },
    {
      name: t(`settings.theme.variant.${Theme.light}`),
      key: Theme.light,
    },
  ];
};
