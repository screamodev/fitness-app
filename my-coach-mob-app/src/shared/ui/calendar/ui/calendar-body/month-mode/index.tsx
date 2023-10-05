import { useContext } from 'react';

import { CalendarContext } from '../../../lib';
import { AnimatedHorizontalSwipe } from '../../animations';
import { Week } from '../week';

export function MonthMode() {
  const { goToNextMonth, goToPrevMonth, weeks } = useContext(CalendarContext);

  return (
    <AnimatedHorizontalSwipe onSwipeLeft={goToPrevMonth} onSwipeRight={goToNextMonth}>
      {weeks.map((week, index) => {
        return <Week week={week} key={`week-${index}`} />;
      })}
    </AnimatedHorizontalSwipe>
  );
}
