import { MaterialCommunityIcons } from '@expo/vector-icons';

import { IconProps } from 'shared/config/icon';

export function ProfileIcon(props: IconProps) {
  return <MaterialCommunityIcons name="account-circle-outline" {...props} />;
}
