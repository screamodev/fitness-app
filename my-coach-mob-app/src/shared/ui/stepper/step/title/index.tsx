import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type TitleProps = {
  children: string;
};

export function Title(props: TitleProps) {
  const { children } = props;

  return <Text style={styles.title}>{children}</Text>;
}
