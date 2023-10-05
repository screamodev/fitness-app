import { useContext, useMemo } from 'react';
import { isSameMonth } from 'date-fns';

import { getDayName, getWeekDaysNames } from 'shared/lib/calendar';
import { useLanguage } from 'shared/lib/localization';
import { useThemeColor } from 'shared/lib/theme';
import { CalendarContext } from '../../lib';
import { WeekDay } from './week-day';
import { styles } from './styles';

export function CalendarHeader() {
  const { config, activeMonthDate } = useContext(CalendarContext);

  const { language } = useLanguage();

  const isActiveMonth = useMemo(() => isSameMonth(new Date(), activeMonthDate), [activeMonthDate]);
  const activeWeekDayName = useMemo(() => getDayName(new Date(), language), [language]);
  const weekDaysNames = useMemo(() => getWeekDaysNames(new Date(), language), [language]);

  const borderColor = useThemeColor({}, 'border');

  const { containerComponent: Container, renderHeader } = config;

  if (renderHeader) {
    return renderHeader({
      date: activeMonthDate,
      weekDaysNames,
      activeWeekDayName,
      isBelongsToActiveMonth: isActiveMonth,
    });
  }

  return (
    <Container style={[styles.container, { borderColor }]}>
      {weekDaysNames.map((weekDayName) => {
        const isCurrent = isActiveMonth && activeWeekDayName === weekDayName;

        return <WeekDay key={weekDayName} name={weekDayName} isCurrent={isCurrent} />;
      })}
    </Container>
  );
}
