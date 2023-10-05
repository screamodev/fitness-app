export const Colors = {
  light: {
    primary: '#f3a32a',
    secondary: '#5d5d5d',
    text: '#171717',
    background: '#f2f2f2',
    backgroundSecondary: '#f8f8f8',
    button: '#171717',
    buttonTitle: '#f2f2f2',
    border: '#d8d8d8',
    shadow: '#171717',
    danger: '#ff3b30',
  },
  dark: {
    primary: '#f3a32a',
    secondary: '#b0b0b0',
    text: '#f2f2f2',
    background: '#171717',
    backgroundSecondary: '#1f1f1f',
    button: '#f2f2f2',
    buttonTitle: '#171717',
    border: '#404040',
    shadow: '#808080',
    danger: '#ff453a',
  },
  shared: {
    white: '#ffffff',
    black: '#000000',
    grey: '#515151',
    lightGrey: '#7f7f7f',
    lightSilver: '#d8d8d8',
  },
};

export type ThemeColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

export const AlphaChannel = { maxValue: 255, minValue: 0 };
