import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from 'shared/config/icon';

export function CommunityIcon(props: IconProps) {
  const { size = 27, ...otherProps } = props;

  return <MaterialCommunityIcons name="account-group-outline" size={size} {...otherProps} />;
}
