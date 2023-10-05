import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { IconComponent } from 'shared/config/icon';
import { useThemeColor } from 'shared/lib/theme';

type ControlButtonProps = {
  icon: IconComponent;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export function ControlButton(props: ControlButtonProps) {
  const { onPress, icon: Icon, style } = props;

  const iconColor = useThemeColor({}, 'border');

  return (
    <Pressable onPress={onPress} style={style}>
      {Icon && <Icon color={iconColor} size={28} />}
    </Pressable>
  );
}
