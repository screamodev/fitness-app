import { ReactNode } from 'react';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

export const withActionSheet = (component: () => ReactNode) => () =>
  <ActionSheetProvider>{component()}</ActionSheetProvider>;
