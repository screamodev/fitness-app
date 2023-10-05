import { Pressable } from 'react-native';

import { useThemeColor } from 'shared/lib/theme';
import { EyeIcon, EyeOffIcon } from 'shared/ui/icons';
import { styles } from './styles';

type SecureIconProps = {
  onPress: () => void;
  isSecureText: boolean;
};

export function SecureIcon(props: SecureIconProps) {
  const { onPress, isSecureText } = props;

  const color = useThemeColor({}, 'secondary');

  const Icon = isSecureText ? EyeOffIcon : EyeIcon;

  return (
    <Pressable style={styles.icon} onPress={onPress}>
      <Icon color={color} size={18} />
    </Pressable>
  );
}
