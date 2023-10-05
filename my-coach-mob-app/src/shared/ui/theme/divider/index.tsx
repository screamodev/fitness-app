import { Divider as DefaultDivider, DividerProps as DefaultDividerProps } from '@rneui/themed';

import { ThemeProps } from 'shared/config/theme';
import { useThemeColor } from 'shared/lib/theme';

type DividerProps = ThemeProps & DefaultDividerProps;

export function Divider(props: DividerProps) {
  const { lightColor, darkColor, themeInverted, ...otherProps } = props;

  const color = useThemeColor(
    { light: lightColor, dark: darkColor, inverted: themeInverted },
    'border',
  );

  return <DefaultDivider color={color} {...otherProps} />;
}
