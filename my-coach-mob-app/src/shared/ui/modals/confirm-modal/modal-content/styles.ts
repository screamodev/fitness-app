import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  content: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...getFont('800'),
    textAlign: 'center',
    fontSize: Font.size.lg,
    lineHeight: 22,
  },
  description: {
    textAlign: 'center',
    fontSize: Font.size.xs,
    lineHeight: 18,
    marginHorizontal: 15,
  },
});
