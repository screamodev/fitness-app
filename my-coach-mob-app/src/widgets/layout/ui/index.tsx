import { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Theme, ThemeColorScheme } from 'shared/config/theme';
import { useTheme, useThemeColor } from 'shared/lib/theme';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

type AppLayoutProps = {
  children: ReactNode;
  statusBarTheme?: ThemeColorScheme;
  backgroundColor?: string;
  withTopInset?: boolean;
  withBottomInset?: boolean;
  scrollEnabled?: boolean;
};

export function AppLayout(props: AppLayoutProps) {
  const {
    children,
    statusBarTheme,
    backgroundColor,
    withTopInset = true,
    withBottomInset = true,
    scrollEnabled = true,
  } = props;

  const insets = useSafeAreaInsets();

  const { theme } = useTheme();

  const statusBarStyle = statusBarTheme || (theme.color === Theme.light ? Theme.dark : Theme.light);
  const background = backgroundColor || useThemeColor({}, 'background');

  const getInsets = () => {
    const { top, bottom, left, right } = insets;

    return {
      paddingTop: withTopInset ? top : 0,
      paddingBottom: withBottomInset ? bottom : 0,
      paddingLeft: left,
      paddingRight: right,
    };
  };

  const layout = (
    <View lightColor={background} darkColor={background} style={[styles.container, getInsets()]}>
      <StatusBar
        style={statusBarStyle as StatusBarStyle}
        backgroundColor={background}
        translucent={false}
      />
      {children}
    </View>
  );

  return scrollEnabled ? (
    <ScrollView contentContainerStyle={styles.scroll}>{layout}</ScrollView>
  ) : (
    layout
  );
}
