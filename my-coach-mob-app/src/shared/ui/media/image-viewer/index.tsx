import { StyleProp, ViewStyle } from 'react-native';

import { Image, View } from 'shared/ui/theme';
import { styles } from './styles';

type ImageViewerProps = {
  uri: string;
  containerStyles?: StyleProp<ViewStyle>;
};

export function ImageViewer(props: ImageViewerProps) {
  const { uri, containerStyles } = props;

  return (
    <View style={[styles.container, containerStyles]}>
      <Image source={{ uri: uri }} style={styles.image} />
    </View>
  );
}
