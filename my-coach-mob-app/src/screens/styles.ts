import { Platform, StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  headerTitle: {
    ...getFont('600'),
    fontSize: Font.size.lg,
    lineHeight: 25,
  },
  tabBar: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  tabBarLabel: {
    ...getFont('500'),
    ...(Platform.OS === 'web' && { marginBottom: 5 }),
  },
  buttonBack: {
    ...{ marginLeft: Platform.OS !== 'ios' ? 10 : 0 },
    height: 35,
    minWidth: 35,
    paddingHorizontal: 0,
    borderRadius: 18,
    opacity: 0.6,
  },
});
