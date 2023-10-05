import { addDays, format, getWeekOfMonth, getWeeksInMonth, startOfWeek, subMonths } from 'date-fns';

import { DaysInWeek } from 'shared/config/calendar';
import { Language } from 'shared/config/language';
import { getDayFormat, getWeekStartsOn } from './day';
import { getCalendarLocalization } from './localization';

export const generateWeek = (date: Date) => {
  let currentDate = date;
  const week = [];

  for (let day = 0; day < DaysInWeek; day++) {
    week.push(currentDate);

    currentDate = addDays(currentDate, 1);
  }

  return week;
};

export const getWeekDaysNames = (date: Date = new Date(), language: Language = Language.en) => {
  const weekDays = [];

  const weekStartDate = startOfWeek(date, { weekStartsOn: getWeekStartsOn(language) });

  let currentDate = 0;

  while (currentDate < DaysInWeek) {
    weekDays.push(
      format(addDays(weekStartDate, currentDate), getDayFormat(language), {
        locale: getCalendarLocalization(language),
      }),
    );
    currentDate++;
  }

  return weekDays;
};

export const getCurrentWeekNumber = (date: Date = new Date(), language: Language = Language.en) => {
  return getWeekOfMonth(date, { weekStartsOn: getWeekStartsOn(language) });
};

export const getMonthWeeksCount = (date: Date = new Date(), language: Language = Language.en) => {
  return getWeeksInMonth(subMonths(date, 1), { weekStartsOn: getWeekStartsOn(language) });
};
