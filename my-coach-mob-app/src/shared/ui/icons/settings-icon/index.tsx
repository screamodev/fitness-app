import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from 'shared/config/icon';

export function SettingsIcon(props: IconProps) {
  const { size = 27, ...otherProps } = props;

  return <MaterialCommunityIcons name="cog-outline" size={size} {...otherProps} />;
}
