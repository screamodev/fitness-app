import { Colors } from 'shared/config/colors';
import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type MenuButtonValueProps = {
  children: string;
};

export function MenuButtonValue(props: MenuButtonValueProps) {
  const { children } = props;

  return (
    <Text
      style={styles.value}
      lightColor={Colors.shared.lightGrey}
      darkColor={Colors.shared.lightGrey}
    >
      {children}
    </Text>
  );
}
