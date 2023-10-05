import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type CardTitleProps = {
  title: string;
};

export function CardTitle(props: CardTitleProps) {
  const { title } = props;

  return (
    <Text style={styles.title} numberOfLines={2}>
      {title}
    </Text>
  );
}
