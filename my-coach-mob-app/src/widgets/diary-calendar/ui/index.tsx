import { addDays, subDays, subMonths } from 'date-fns';

import { useTraining } from 'entities/training';
import { useBoxShadow } from 'shared/lib/styles';
import { BadgeType, Calendar } from 'shared/ui/calendar';
import { CardView } from 'shared/ui/card-view';
import { styles } from './styles';

export function DiaryCalendar() {
  const { setSelectedDate } = useTraining();

  const shadowStyles = useBoxShadow();

  // TODO: Example, remove after implementation
  const daysBadges = [
    {
      date: new Date(),
      type: BadgeType.primary,
    },
    {
      date: new Date(),
      type: BadgeType.secondary,
    },
    {
      date: new Date(),
      type: BadgeType.default,
    },
    {
      date: addDays(new Date(), 2),
      type: BadgeType.default,
    },
    {
      date: subDays(new Date(), 2),
      type: BadgeType.primary,
    },
    {
      date: subMonths(new Date(), 1),
      type: BadgeType.primary,
    },
  ];

  return (
    <Calendar
      containerComponent={CardView}
      containerStyles={[styles.calendar, shadowStyles]}
      daysBadges={daysBadges}
      onSelectDate={setSelectedDate}
    />
  );
}
