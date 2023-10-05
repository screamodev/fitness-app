import { createContext } from 'react';

import { CalendarConfig, CalendarMode, DaysBadgesMap, DefaultCalendarConfig } from '../config';

type CalendarContextType = {
  config: CalendarConfig;
  mode: CalendarMode;
  activeMonthDate: Date;
  activeWeekNumber: number;
  selectedDate: Date;
  weeks: Date[][];
  daysBadgesMap: DaysBadgesMap;
  changeMode: (mode: CalendarMode) => void;
  selectDate: (date: Date) => void;
  changeYear: (year: number) => void;
  showToday: () => void;
  goToPrevWeek: () => void;
  goToNextWeek: () => void;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
};

export const CalendarContext = createContext<CalendarContextType>({
  config: DefaultCalendarConfig,
  mode: CalendarMode.week,
  activeMonthDate: new Date(),
  activeWeekNumber: 1,
  selectedDate: new Date(),
  weeks: [],
  daysBadgesMap: new Map(),
  changeMode: () => null,
  selectDate: () => null,
  changeYear: () => null,
  showToday: () => null,
  goToPrevWeek: () => null,
  goToNextWeek: () => null,
  goToPrevMonth: () => null,
  goToNextMonth: () => null,
});
