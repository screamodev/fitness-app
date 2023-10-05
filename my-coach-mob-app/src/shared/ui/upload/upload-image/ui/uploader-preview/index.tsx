import { Image, View } from 'shared/ui/theme';
import { UploaderPlaceholder } from '../uploader-placeholder';
import { styles } from './styles';

type UploaderPreviewProps = {
  value: string;
};

export function UploaderPreview(props: UploaderPreviewProps) {
  const { value } = props;

  return value ? (
    <View style={styles.container}>
      <Image key={value} source={{ uri: value, cache: 'force-cache' }} style={styles.image} />
    </View>
  ) : (
    <UploaderPlaceholder />
  );
}
