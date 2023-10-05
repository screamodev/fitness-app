import { format } from 'date-fns';

import { DayFormat, StartWeekFrom, WeekNameFormat } from 'shared/config/calendar';
import { Language } from 'shared/config/language';
import { getCalendarLocalization } from './localization';

const dayFormats = {
  [Language.uk]: WeekNameFormat.short,
  [Language.en]: WeekNameFormat.long,
};

const weekStartsOn = {
  [Language.uk]: StartWeekFrom.monday,
  [Language.en]: StartWeekFrom.sunday,
};

export const getDayFormat = (language: Language = Language.en) => {
  return dayFormats[language];
};

export const getWeekStartsOn = (language: Language = Language.en) => {
  return weekStartsOn[language] as StartWeekFrom;
};

export const getDayNumber = (date: Date = new Date(), language: Language = Language.en) => {
  return format(date, DayFormat.short, { weekStartsOn: getWeekStartsOn(language) });
};

export const getDayName = (date: Date = new Date(), language: Language = Language.en) => {
  return format(date, getDayFormat(language), { locale: getCalendarLocalization(language) });
};
