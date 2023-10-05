import { StyleProp, View, ViewStyle } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { Colors } from 'shared/config/colors';
import { styles } from './styles';

type LoaderProps = {
  color?: string;
  size?: number | 'small' | 'large';
  containerStyle?: StyleProp<ViewStyle>;
};

export const Loader = (props: LoaderProps) => {
  const { color = Colors.light.primary, size = 36, containerStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator animating={true} color={color} size={size} />
    </View>
  );
};
