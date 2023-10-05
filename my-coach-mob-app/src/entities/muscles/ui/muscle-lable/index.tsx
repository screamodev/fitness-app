import { StyleProp, View, ViewStyle } from 'react-native';

import { MuscleType } from 'shared/api/muscles';
import { Colors } from 'shared/config/colors';
import { getLocalizedName, useLanguage } from 'shared/lib/localization';
import { useThemeColor } from 'shared/lib/theme';
import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type MuscleLabelProps = {
  muscle: MuscleType;
  lastElementStyle?: StyleProp<ViewStyle>;
};

export function MuscleLabel(props: MuscleLabelProps) {
  const { muscle, lastElementStyle } = props;

  const backgroundColor = useThemeColor({}, 'backgroundSecondary');
  const backgroundColorMuscle = useThemeColor({}, 'primary');

  const { language } = useLanguage();

  const { isPrimary } = muscle;

  const name = getLocalizedName(muscle, language);

  const color = isPrimary ? Colors.shared.white : '';
  const labelStyles = {
    borderColor: backgroundColorMuscle,
    backgroundColor: isPrimary ? backgroundColorMuscle : backgroundColor,
  };

  return (
    <View style={[styles.container, lastElementStyle, labelStyles]}>
      <Text style={styles.muscle} lightColor={color} darkColor={color}>
        {name}
      </Text>
    </View>
  );
}
