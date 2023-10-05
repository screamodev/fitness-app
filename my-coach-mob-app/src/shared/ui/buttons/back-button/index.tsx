import { StyleProp, ViewStyle } from 'react-native';

import { useThemeColor } from 'shared/lib/theme';
import { ChevronLeftIcon } from 'shared/ui/icons';
import { Button } from 'shared/ui/theme';
import { styles } from './styles';

type BackButtonProps = {
  iconSize?: number;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export function BackButton(props: BackButtonProps) {
  const { iconSize = 34, buttonStyle, onPress } = props;

  const color = useThemeColor({ inverted: true }, 'buttonTitle');

  return (
    <Button
      title={<ChevronLeftIcon size={iconSize} color={color} />}
      buttonStyle={[styles.button, buttonStyle]}
      themeInverted
      onPress={onPress}
    />
  );
}
