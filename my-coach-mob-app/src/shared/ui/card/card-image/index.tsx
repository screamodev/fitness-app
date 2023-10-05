import { Image } from 'react-native';

import { Colors } from 'shared/config/colors';
import { CameraIcon } from 'shared/ui/icons';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

type CardImageProps = {
  image?: string;
};

export function CardImage(props: CardImageProps) {
  const { image } = props;

  return (
    <View style={styles.container}>
      {!image ? (
        <CameraIcon size={35} color={Colors.shared.lightSilver} />
      ) : (
        <Image source={{ uri: image || '' }} style={styles.image} />
      )}
    </View>
  );
}
