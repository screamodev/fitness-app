import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from 'shared/config/icon';

export function SunIcon(props: IconProps) {
  return <MaterialCommunityIcons name="weather-sunny" {...props} />;
}
