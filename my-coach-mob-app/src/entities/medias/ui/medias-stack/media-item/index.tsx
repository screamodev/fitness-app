import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

import { calculateMediaSize } from 'entities/medias/lib';
import { Media } from 'shared/api/medias';
import { ImageViewer } from 'shared/ui/media';

type MediaItemProps = {
  media: Media;
};

export function MediaItem(props: MediaItemProps) {
  const { media } = props;

  const { width } = useWindowDimensions();

  const containerStyles = useMemo(() => calculateMediaSize(width), [width]);

  if (media.type === 'video') {
    // TO DO VideoPlayer
    // return <VideoPlayer url={media.url} key={index} />;
  }

  return <ImageViewer uri={media?.url || ''} containerStyles={containerStyles} />;
}
