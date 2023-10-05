import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from 'shared/config/icon';

export function CalendarIcon(props: IconProps) {
  const { size = 27, ...otherProps } = props;

  return <MaterialCommunityIcons name="calendar-month-outline" size={size} {...otherProps} />;
}
