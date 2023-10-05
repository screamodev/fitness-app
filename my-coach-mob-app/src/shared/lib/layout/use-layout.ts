import { useWindowDimensions } from 'react-native';

import { Layout } from 'shared/config/layout';

export function useLayout() {
  const { width, height } = useWindowDimensions();

  const isSmDevice = width < Layout.width.sm;
  const isMdDevice = width < Layout.width.md;
  const isLandscape = width > height;

  return {
    window: {
      width,
      height,
    },
    isSmDevice,
    isMdDevice,
    isLandscape,
  };
}
