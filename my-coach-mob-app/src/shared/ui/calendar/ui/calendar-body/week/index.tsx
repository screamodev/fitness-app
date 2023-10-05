import { useContext } from 'react';

import { CalendarContext } from '../../../lib';
import { Day } from './day';
import { styles } from './styles';

type WeekProps = {
  week: Date[];
};

export function Week(props: WeekProps) {
  const { week } = props;

  const { config } = useContext(CalendarContext);

  const { containerComponent: Container } = config;

  return (
    <Container style={styles.container}>
      {week.map((date: Date, index) => (
        <Day date={date} key={`day-${index}`} />
      ))}
    </Container>
  );
}
