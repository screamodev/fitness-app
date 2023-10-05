import { Colors } from 'shared/config/colors';
import { PencilIcon, PlusIcon } from 'shared/ui/icons';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

type UploaderIconProps = {
  isUploaded: boolean;
};

export function UploaderIcon(props: UploaderIconProps) {
  const { isUploaded } = props;

  const Icon = isUploaded ? PencilIcon : PlusIcon;

  return (
    <View
      lightColor={Colors.light.primary}
      darkColor={Colors.dark.primary}
      style={styles.container}
    >
      <Icon color={Colors.shared.white} size={20} />
    </View>
  );
}
