import { Colors } from 'shared/config/colors';

import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type DescriptionProps = {
  children: string;
};

export function Description(props: DescriptionProps) {
  const { children } = props;

  return (
    <Text
      style={styles.description}
      lightColor={Colors.light.secondary}
      darkColor={Colors.dark.secondary}
    >
      {children}
    </Text>
  );
}
