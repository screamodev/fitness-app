import { useContext } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from 'shared/ui/icons';
import { CalendarMode } from '../../../config';
import { CalendarContext } from '../../../lib';
import { ControlButton } from '../../control-button';
import { styles } from './styles';

export function MonthSwitcher() {
  const { config, mode, goToNextMonth, goToPrevMonth } = useContext(CalendarContext);

  const { containerComponent: Container } = config;

  return (
    <Container style={styles.container}>
      {mode === CalendarMode.month && (
        <>
          <ControlButton onPress={goToPrevMonth} icon={ChevronLeftIcon} />
          <ControlButton onPress={goToNextMonth} icon={ChevronRightIcon} />
        </>
      )}
    </Container>
  );
}
