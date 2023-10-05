import { StyleProp, ViewStyle } from 'react-native';

import { IconComponent } from 'shared/config/icon';
import { IconButton } from 'shared/ui/buttons';
import { Text } from 'shared/ui/theme';
import { AnimatedButtonTransformY } from '../animation';
import { styles } from './styles';

type DropdownMenuButtonProps = {
  isStartAnimation: boolean;
  text?: string;
  style: StyleProp<ViewStyle>;
  icon: IconComponent;
  onPress: () => void;
};

export function DropdownMenuButton(props: DropdownMenuButtonProps) {
  const { isStartAnimation, text, style, icon, onPress } = props;

  return (
    <AnimatedButtonTransformY isStartAnimation={isStartAnimation}>
      {text && <Text style={styles.text}>{text}</Text>}
      <IconButton size={17} icon={icon} buttonStyle={[styles.container, style]} onPress={onPress} />
    </AnimatedButtonTransformY>
  );
}
