import { useContext, useMemo } from 'react';
import { Pressable, Text } from 'react-native';
import { isPast, isSameDay, isSameMonth, isToday } from 'date-fns';

import { getDayNumber } from 'shared/lib/calendar';
import { useLanguage } from 'shared/lib/localization';
import { CalendarContext } from '../../../../lib';
import { Badges } from './badges';
import { useContainerStyles, useDayStyles } from './lib';
import { styles } from './styles';

type DayProps = {
  date: Date;
};

export function Day(props: DayProps) {
  const { date } = props;

  const { config, selectedDate, activeMonthDate, selectDate } = useContext(CalendarContext);

  const { selectable, containerComponent: Container, renderDay } = config;

  const { language } = useLanguage();

  const dayNumber = useMemo(() => getDayNumber(date, language), [date, language]);
  const isActiveDay = useMemo(() => isToday(date), [date]);
  const isSelectedDay = useMemo(
    () => selectable && isSameDay(selectedDate, date) && isSameMonth(activeMonthDate, selectedDate),
    [selectable, activeMonthDate, selectedDate, date],
  );
  const isPastDay = useMemo(() => isPast(date), [date]);
  const isActiveMonthDay = useMemo(
    () => isSameMonth(activeMonthDate, date),
    [activeMonthDate, date],
  );

  const dayStyles = useDayStyles(isActiveDay, isSelectedDay, isPastDay);
  const containerStyles = useContainerStyles(isActiveDay, isSelectedDay);

  const onSelectDate = () => {
    selectDate(date);
  };

  if (renderDay) {
    return renderDay({
      date,
      number: dayNumber,
      isActive: isActiveDay,
      isSelected: isSelectedDay,
      isPast: isPastDay,
      isBelongsToActiveMonth: isActiveMonthDay,
    });
  }

  if (!isActiveMonthDay) {
    return <Container style={containerStyles} />;
  }

  const day = (
    <Container style={styles.dayContainer}>
      <Text style={dayStyles}>{dayNumber}</Text>
      <Badges date={date} />
    </Container>
  );

  return selectable ? (
    <Pressable style={containerStyles} onPress={onSelectDate}>
      {day}
    </Pressable>
  ) : (
    <Container style={containerStyles}>{day}</Container>
  );
}
