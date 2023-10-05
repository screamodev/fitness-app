import { Image as DefaultImage } from 'react-native';

import { ThemeProps } from 'shared/config/theme';
import { useThemeColor } from 'shared/lib/theme';

export type ImageProps = ThemeProps & DefaultImage['props'];

export function Image(props: ImageProps) {
  const { style, lightColor, darkColor, themeInverted, ...otherProps } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor, inverted: themeInverted },
    'background',
  );

  return <DefaultImage style={[style, { backgroundColor }]} {...otherProps} />;
}
