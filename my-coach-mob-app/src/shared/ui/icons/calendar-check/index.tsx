import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from 'shared/config/icon';

export function CalendarCheckIcon(props: IconProps) {
  const { ...otherProps } = props;

  return <MaterialCommunityIcons name="calendar-check" {...otherProps} />;
}
