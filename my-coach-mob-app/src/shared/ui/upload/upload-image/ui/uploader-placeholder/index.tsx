import { Colors } from 'shared/config/colors';
import { useThemeColor } from 'shared/lib/theme';
import { CardView } from 'shared/ui/card-view';
import { CameraIcon } from 'shared/ui/icons';
import { styles } from './styles';

export function UploaderPlaceholder() {
  const borderColor = useThemeColor({}, 'button');

  return (
    <CardView style={[styles.container, { borderColor }]}>
      <CameraIcon color={Colors.shared.lightSilver} size={35} />
    </CardView>
  );
}
