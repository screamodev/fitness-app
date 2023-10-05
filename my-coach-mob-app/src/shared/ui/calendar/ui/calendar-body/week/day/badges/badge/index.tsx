import { StyleProp, View, ViewStyle } from 'react-native';

import { useThemeColor } from 'shared/lib/theme';
import { styles } from './styles';

type BadgeProps = {
  style?: StyleProp<ViewStyle>;
};

export function Badge(props: BadgeProps) {
  const { style } = props;

  const color = useThemeColor({}, 'secondary');

  return <View style={[styles.container, { borderColor: color }, style]} />;
}
