import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek } from 'date-fns';
import _ from 'lodash-es';

import { DaysInWeek, MonthFormat } from 'shared/config/calendar';
import { Language } from 'shared/config/language';
import { getWeekStartsOn } from './day';
import { getCalendarLocalization } from './localization';
import { generateWeek } from './week';

const monthFormats = {
  [Language.uk]: MonthFormat.full.uk,
  [Language.en]: MonthFormat.full.en,
};

const getMonthFormat = (language: Language = Language.en) => {
  return monthFormats[language];
};

export const getMonth = (date: Date = new Date(), language: Language = Language.en) => {
  return _.capitalize(
    format(date, getMonthFormat(language), { locale: getCalendarLocalization(language) }),
  );
};

export const getMonthWeeks = (date: Date = new Date(), language: Language = Language.en) => {
  const option = { weekStartsOn: getWeekStartsOn(language) };

  const startOfTheSelectedMonth = startOfMonth(date);
  const endOfTheSelectedMonth = endOfMonth(date);
  const startDate = startOfWeek(startOfTheSelectedMonth, option);
  const endDate = endOfWeek(endOfTheSelectedMonth, option);

  let currentDate = startDate;

  const weeks = [];

  while (currentDate <= endDate) {
    weeks.push(generateWeek(currentDate));
    currentDate = addDays(currentDate, DaysInWeek);
  }

  return weeks;
};
