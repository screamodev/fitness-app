import { Media } from 'shared/api/medias';
import { View } from 'shared/ui/theme';
import { MediaItem } from './media-item';
import { styles } from './styles';

type MediasStackProps = {
  medias: Media[];
};

export function MediasStack(props: MediasStackProps) {
  const { medias } = props;

  return (
    <View style={styles.container}>
      {medias.map((media, index) => {
        return <MediaItem key={index} media={media} />;
      })}
    </View>
  );
}
