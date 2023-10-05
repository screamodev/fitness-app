import { useContext, useMemo } from 'react';
import { StyleProp, TextStyle } from 'react-native';

import { useTheme, useThemeColor } from 'shared/lib/theme';
import { CalendarContext } from '../../../../../lib';
import { styles } from './styles';

export const useDayStyles = (isActiveDay: boolean, isSelectedDay: boolean, isPastDay: boolean) => {
  const { config } = useContext(CalendarContext);

  const { theme } = useTheme();

  const { selectable, renderDay } = config;

  if (renderDay) {
    return [];
  }

  const color = useThemeColor({}, 'text');
  const pastDayColor = useThemeColor({}, 'secondary');
  const primaryDayColor = useThemeColor({}, 'primary');

  return useMemo(() => {
    const dayStyles: Array<StyleProp<TextStyle>> = [styles.day, { color }];

    if (isPastDay) {
      dayStyles.push({ color: pastDayColor });
    }

    if (isActiveDay) {
      dayStyles.push(styles.active, { color: primaryDayColor });
    }

    if (selectable && isSelectedDay) {
      dayStyles.push(styles.selected);
    }

    return dayStyles;
  }, [theme.color, isActiveDay, isSelectedDay, isPastDay, selectable]);
};
