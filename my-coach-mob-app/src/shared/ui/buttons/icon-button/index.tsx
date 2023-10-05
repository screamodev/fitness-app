import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { IconComponent } from 'shared/config/icon';
import { useThemeColor } from 'shared/lib/theme';
import { styles } from './styles';

type IconButtonProps = {
  size: number;
  icon: IconComponent;
  buttonStyle?: StyleProp<ViewStyle>;
  iconColor?: string;
  buttonColor?: string;
  onPress?: () => void;
};

export function IconButton(props: IconButtonProps) {
  const { size, icon: Icon, buttonStyle, iconColor, buttonColor, onPress } = props;

  const buttonBackgroundColor = buttonColor || useThemeColor({}, 'text');
  const iconBackgroundColor = iconColor || useThemeColor({}, 'background');

  return (
    <Pressable
      style={[styles.container, { backgroundColor: buttonBackgroundColor }, buttonStyle]}
      onPress={onPress}
    >
      {Icon && <Icon color={iconBackgroundColor} size={size} />}
    </Pressable>
  );
}
