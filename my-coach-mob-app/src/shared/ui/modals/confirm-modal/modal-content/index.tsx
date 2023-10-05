import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

type ModalContentProps = {
  title: string;
  description: string;
};

export function ModalContent(props: ModalContentProps) {
  const { title, description } = props;

  return (
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
