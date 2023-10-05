import { useMemo, useState } from 'react';
import { addMonths, setYear, subMonths } from 'date-fns';
import _ from 'lodash-es';

import { getCurrentWeekNumber, getMonthWeeks, getMonthWeeksCount } from 'shared/lib/calendar';
import { useLanguage } from 'shared/lib/localization';
import { CalendarMode, CalendarProps, DefaultCalendarConfig } from '../config';
import { CalendarContext, mapDaysBadges } from '../lib';
import { CalendarBody } from './calendar-body';
import { CalendarControl } from './calendar-control';
import { CalendarHeader } from './calendar-header';
import { styles } from './styles';

export function Calendar(props: CalendarProps) {
  const {
    initActiveDate = new Date(),
    initSelectedDate = new Date(),
    daysBadges = [],
    onSelectDate,
    ...config
  } = props;

  const { language } = useLanguage();

  const [mode, setMode] = useState(CalendarMode.week);
  const [activeMonthDate, setActiveMonthDate] = useState<Date>(initActiveDate);
  const [activeWeekNumber, setActiveWeekNumber] = useState<number>(
    getCurrentWeekNumber(activeMonthDate, language) - 1,
  );
  const [selectedDate, setSelectedDate] = useState<Date>(initSelectedDate);

  const calendarConfig = useMemo(
    () => _.merge(_.cloneDeep(DefaultCalendarConfig), config),
    [config],
  );
  const weeks = useMemo(
    () => getMonthWeeks(activeMonthDate, language),
    [activeMonthDate, language],
  );
  const daysBadgesMap = useMemo(() => mapDaysBadges(daysBadges), [daysBadges]);

  const showToday = () => {
    setActiveMonthDate(new Date());
    setSelectedDate(new Date());
    setActiveWeekNumber(getCurrentWeekNumber(new Date(), language) - 1);
  };

  const changeMode = (mode: CalendarMode) => {
    setMode(mode);
  };

  const changeYear = (year: number) => {
    const newDate = setYear(activeMonthDate, year);
    setActiveMonthDate(newDate);
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
    onSelectDate && onSelectDate(date);
  };

  const goToPrevMonth = () => {
    setActiveMonthDate(subMonths(activeMonthDate, 1));
  };

  const goToNextMonth = () => {
    setActiveMonthDate(addMonths(activeMonthDate, 1));
  };

  const goToPrevWeek = () => {
    if (activeWeekNumber === 0) {
      goToPrevMonth();
      setActiveWeekNumber(getMonthWeeksCount(activeMonthDate, language) - 1);
      return;
    }

    setActiveWeekNumber(activeWeekNumber - 1);
  };

  const goToNextWeek = () => {
    if (activeWeekNumber === weeks.length - 1) {
      setActiveWeekNumber(0);
      goToNextMonth();
      return;
    }

    setActiveWeekNumber(activeWeekNumber + 1);
  };

  const { containerStyles, containerComponent: Container } = calendarConfig;

  return (
    <CalendarContext.Provider
      value={{
        config: calendarConfig,
        mode,
        activeMonthDate,
        activeWeekNumber,
        selectedDate,
        weeks,
        daysBadgesMap,
        changeMode,
        changeYear,
        selectDate,
        showToday,
        goToPrevWeek,
        goToNextWeek,
        goToPrevMonth,
        goToNextMonth,
      }}
    >
      <Container style={[styles.container, containerStyles]}>
        <CalendarControl />
        <CalendarHeader />
        <CalendarBody />
      </Container>
    </CalendarContext.Provider>
  );
}
