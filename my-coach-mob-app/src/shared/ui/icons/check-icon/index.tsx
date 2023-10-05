import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from 'shared/config/icon';

export function CheckIcon(props: IconProps) {
  const { size, ...otherProps } = props;

  return <MaterialCommunityIcons name="check" size={size} {...otherProps} />;
}
