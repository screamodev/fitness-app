import { Colors } from 'shared/config/colors';
import { View, ViewProps } from 'shared/ui/theme';

export function CardView(props: ViewProps) {
  const { children, ...otherProps } = props;

  return (
    <View
      {...otherProps}
      lightColor={Colors.light.backgroundSecondary}
      darkColor={Colors.dark.backgroundSecondary}
    >
      {children}
    </View>
  );
}
