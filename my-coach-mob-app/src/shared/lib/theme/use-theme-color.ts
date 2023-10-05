import { Colors, ThemeColorName } from 'shared/config/colors';
import { Theme, ThemeColorScheme } from 'shared/config/theme';
import { useTheme } from './use-theme';

export function useThemeColor(
  props: { light?: string; dark?: string; inverted?: boolean },
  colorName: ThemeColorName,
) {
  const { inverted } = props;

  const { theme } = useTheme();

  const themeColor: ThemeColorScheme = inverted
    ? theme.color === Theme.light
      ? Theme.dark
      : Theme.light
    : theme.color;

  const colorFromProps = props[themeColor];

  if (colorFromProps) {
    return colorFromProps;
  }

  return Colors[themeColor][colorName];
}
