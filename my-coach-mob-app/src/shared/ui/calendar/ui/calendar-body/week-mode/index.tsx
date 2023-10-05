import { useContext } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from 'shared/ui/icons';
import { CalendarMode } from '../../../config';
import { CalendarContext } from '../../../lib';
import { AnimatedHorizontalSwipe } from '../../animations';
import { ControlButton } from '../../control-button';
import { Week } from '../week';
import { styles } from './styles';

export function WeekMode() {
  const { config, activeWeekNumber, goToPrevWeek, goToNextWeek, mode, weeks } =
    useContext(CalendarContext);

  const { containerComponent: Container } = config;

  const controlBtnStyles = {
    opacity: mode === CalendarMode.month ? 0 : 1,
  };

  return (
    <Container>
      <ControlButton
        onPress={goToPrevWeek}
        icon={ChevronLeftIcon}
        style={[styles.controlButton, styles.leftControlButton, controlBtnStyles]}
      />
      <AnimatedHorizontalSwipe onSwipeLeft={goToPrevWeek} onSwipeRight={goToNextWeek}>
        <Week week={weeks[activeWeekNumber]} key={`week-${activeWeekNumber}`} />
      </AnimatedHorizontalSwipe>
      <ControlButton
        onPress={goToNextWeek}
        icon={ChevronRightIcon}
        style={[styles.controlButton, styles.rightControlButton, controlBtnStyles]}
      />
    </Container>
  );
}
