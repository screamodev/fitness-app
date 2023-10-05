import { useContext, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import { useTheme, useThemeColor } from 'shared/lib/theme';
import { CalendarContext } from '../../../../../lib';
import { styles } from './styles';

export const useContainerStyles = (isActiveDay: boolean, isSelectedDay: boolean) => {
  const { config } = useContext(CalendarContext);

  const { theme } = useTheme();

  const { selectable, renderDay } = config;

  if (renderDay) {
    return [];
  }

  const borderColor = useThemeColor({}, 'button');

  return useMemo(() => {
    const containerStyles: Array<StyleProp<ViewStyle>> = [
      styles.container,
      {
        borderColor: 'transparent',
      },
    ];

    if (selectable && isSelectedDay) {
      containerStyles.push({ borderColor });
    }

    return containerStyles;
  }, [theme.color, isSelectedDay, selectable]);
};
