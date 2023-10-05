import { Button as DefaultButton, ButtonProps as DefaultButtonProps } from '@rneui/themed';

import { ThemeProps } from 'shared/config/theme';
import { useThemeColor } from 'shared/lib/theme';

export type ButtonProps = DefaultButtonProps &
  ThemeProps & {
    lightTextColor?: string;
    darkTextColor?: string;
  };

export function Button(props: ButtonProps) {
  const {
    lightColor,
    darkColor,
    buttonStyle,
    titleStyle,
    lightTextColor,
    darkTextColor,
    themeInverted,
    ...otherProps
  } = props;

  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor, inverted: themeInverted },
    'button',
  );

  const color = useThemeColor(
    { light: lightTextColor, dark: darkTextColor, inverted: themeInverted },
    'buttonTitle',
  );

  return (
    <DefaultButton
      buttonStyle={[buttonStyle, { backgroundColor }]}
      titleStyle={[titleStyle, { color }]}
      {...otherProps}
    />
  );
}
