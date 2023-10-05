import { enUS, uk } from 'date-fns/locale';

import { Language } from 'shared/config/language';

const localizations = {
  [Language.uk]: uk,
  [Language.en]: enUS,
};

export const getCalendarLocalization = (language: Language = Language.en) => {
  return localizations[language];
};
