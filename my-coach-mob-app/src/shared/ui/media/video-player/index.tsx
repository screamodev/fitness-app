import { View } from 'react-native';
import { Video } from 'expo-av';

import { styles } from './styles';

type VideoPlayerProps = {
  uri?: string;
};

export function VideoPlayer(props: VideoPlayerProps) {
  const { uri } = props;

  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        source={{
          uri: uri || '',
        }}
        useNativeControls
      />
    </View>
  );
}
