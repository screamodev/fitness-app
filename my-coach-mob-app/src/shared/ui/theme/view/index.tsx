import { View as DefaultView } from 'react-native';

import { ThemeProps } from 'shared/config/theme';
import { useThemeColor } from 'shared/lib/theme';

export type ViewProps = ThemeProps & DefaultView['props'];

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, themeInverted, ...otherProps } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor, inverted: themeInverted },
    'background',
  );

  return <DefaultView style={[style, { backgroundColor }]} {...otherProps} />;
}
