import {
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
} from 'react-native';

import { ThemeProps } from 'shared/config/theme';
import { useThemeColor } from 'shared/lib/theme';

export type TextInputProps = DefaultTextInputProps &
  ThemeProps & {
    placeholderLightColor?: string;
    placeholderDarkColor?: string;
  };

export function TextInput(props: TextInputProps) {
  const {
    lightColor,
    darkColor,
    placeholderLightColor,
    placeholderDarkColor,
    themeInverted,
    style,
    ...otherProps
  } = props;

  const color = useThemeColor(
    { light: lightColor, dark: darkColor, inverted: themeInverted },
    'text',
  );

  const placeholderColor = useThemeColor(
    { light: placeholderLightColor, dark: placeholderDarkColor, inverted: themeInverted },
    'secondary',
  );

  return (
    <DefaultTextInput
      placeholderTextColor={placeholderColor}
      style={[style, { color }]}
      {...otherProps}
    />
  );
}
