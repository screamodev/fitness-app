import { Text as DefaultText } from 'react-native';

import { ThemeProps } from 'shared/config/theme';
import { getFont } from 'shared/lib/font';
import { useThemeColor } from 'shared/lib/theme';

export type TextProps = ThemeProps & DefaultText['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, themeInverted, ...otherProps } = props;

  const color = useThemeColor(
    { light: lightColor, dark: darkColor, inverted: themeInverted },
    'text',
  );

  const fontStyles = getFont('400');

  return <DefaultText style={[fontStyles, style, { color }]} {...otherProps} />;
}
