import { Colors } from 'shared/config/colors';
import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type LabelProps = {
  text: string;
};

export function Label(props: LabelProps) {
  const { text } = props;

  return (
    <Text
      lightColor={Colors.light.secondary}
      darkColor={Colors.dark.secondary}
      style={styles.label}
    >
      {text}
    </Text>
  );
}
