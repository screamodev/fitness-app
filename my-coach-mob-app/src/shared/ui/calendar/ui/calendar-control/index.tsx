import { useContext } from 'react';

import { CalendarMode } from '../../config';
import { CalendarContext } from '../../lib';
import { AnimatedHorizontalSwipe } from '../animations';
import { MonthSwitcher } from './month-switcher';
import { TodayButton } from './today-button';
import { YearPicker } from './year-picker';
import { styles } from './styles';

export function CalendarControl() {
  const { config, mode, activeMonthDate, goToPrevMonth, goToNextMonth, showToday } =
    useContext(CalendarContext);

  const { containerComponent: Container, renderControl } = config;

  if (renderControl) {
    return renderControl({
      date: activeMonthDate,
      goToPrevMonth,
      goToNextMonth,
      showToday,
    });
  }

  const isWeekMode = mode === CalendarMode.week;

  return (
    <Container style={styles.container}>
      <TodayButton />
      <YearPicker />
      {isWeekMode ? (
        <MonthSwitcher />
      ) : (
        <AnimatedHorizontalSwipe onSwipeLeft={goToPrevMonth} onSwipeRight={goToNextMonth}>
          <MonthSwitcher />
        </AnimatedHorizontalSwipe>
      )}
    </Container>
  );
}
