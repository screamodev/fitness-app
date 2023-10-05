import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from 'shared/config/icon';

export function MuscleIcon(props: IconProps) {
  const { size = 27, ...otherProps } = props;

  return <MaterialCommunityIcons name="arm-flex-outline" size={size} {...otherProps} />;
}
