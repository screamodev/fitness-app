import { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const withSafeArea = (component: () => ReactNode) => () =>
  <SafeAreaProvider>{component()}</SafeAreaProvider>;
