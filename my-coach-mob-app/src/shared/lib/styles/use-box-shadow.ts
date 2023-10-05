import { Styles } from 'shared/config/styles';
import { useThemeColor } from 'shared/lib/theme';
import { createStyle } from './create-style';

export const useBoxShadow = (lightColor?: string, darkColor?: string) => {
  const shadowColor = useThemeColor({ light: lightColor, dark: darkColor }, 'shadow');

  return createStyle({ ...Styles.shadow, shadowColor });
};
