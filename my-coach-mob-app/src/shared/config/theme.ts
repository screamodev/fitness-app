export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  themeInverted?: boolean;
};

export enum Theme {
  light = 'light',
  dark = 'dark',
  auto = 'auto',
}

export type ThemeColorScheme = Theme.light | Theme.dark;
