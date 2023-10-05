import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { Link as DefaultLink } from '@react-navigation/native';

import { RootStackParamList } from 'shared/config/navigation';
import { ThemeProps } from 'shared/config/theme';
import { useThemeColor } from 'shared/lib/theme';

type LinkProps = ThemeProps & {
  to: keyof RootStackParamList;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
};

export function Link(props: LinkProps) {
  const { lightColor, darkColor, themeInverted, to, children, style } = props;

  const color = useThemeColor(
    { light: lightColor, dark: darkColor, inverted: themeInverted },
    'text',
  );

  return (
    <DefaultLink style={[style, { color: color }]} to={{ screen: to }}>
      {children}
    </DefaultLink>
  );
}
