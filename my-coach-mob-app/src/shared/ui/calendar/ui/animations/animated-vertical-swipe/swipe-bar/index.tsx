import { Colors } from 'shared/config/colors';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export function SwipeBar() {
  return (
    <View
      style={styles.swipeBar}
      lightColor={Colors.shared.lightSilver}
      darkColor={Colors.shared.lightGrey}
    />
  );
}
