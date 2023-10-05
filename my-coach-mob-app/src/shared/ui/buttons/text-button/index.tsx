import { Pressable, StyleProp, ViewStyle } from 'react-native';

import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type TextButtonProps = {
  text: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export function TextButton(props: TextButtonProps) {
  const { text, buttonStyle, textStyle, onPress } = props;

  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
}
