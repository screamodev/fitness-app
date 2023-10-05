import lodash from 'lodash';

import { Locale } from '@/shared/config/localization';

export const getLocaleSuffix = (locale: string): string => {
  // We need this workaround, because only for other locales we heed suffix.
  if (locale === Locale.EN) {
    return '';
  }

  return lodash.capitalize(locale);
};
