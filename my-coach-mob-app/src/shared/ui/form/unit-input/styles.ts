import { Platform, StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    ...getFont('500'),
    fontSize: Font.size.xxl,
    textAlign: 'center',
    height: 50,
    width: 93,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 6,
    ...(Platform.OS === 'web' && { outlineStyle: 'none' }),
  },
  unit: {
    ...getFont('500'),
    fontSize: Font.size.xl,
    marginLeft: 6,
  },
});
