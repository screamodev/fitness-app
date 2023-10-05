import { useContext } from 'react';

import { CalendarMode } from '../../config';
import { CalendarContext } from '../../lib';
import { AnimatedVerticalSwipe } from '../animations';
import { MonthMode } from './month-mode';
import { WeekMode } from './week-mode';
import { styles } from './styles';

export function CalendarBody() {
  const { config, mode, changeMode } = useContext(CalendarContext);

  const { containerComponent: Container } = config;

  const isWeekMode = mode === CalendarMode.week;

  return (
    <Container style={styles.container}>
      <AnimatedVerticalSwipe onVerticalSwipe={changeMode} isSwipingUp={isWeekMode}>
        {isWeekMode ? <WeekMode /> : <MonthMode />}
      </AnimatedVerticalSwipe>
    </Container>
  );
}
