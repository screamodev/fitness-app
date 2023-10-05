import { Image, View } from 'shared/ui/theme';
import { styles } from './styles';

type PrimaryImageProps = {
  uri: string;
};

export function PrimaryImage(props: PrimaryImageProps) {
  const { uri } = props;

  return (
    <View style={styles.container}>
      <Image source={{ uri: uri }} style={styles.image} />
    </View>
  );
}
