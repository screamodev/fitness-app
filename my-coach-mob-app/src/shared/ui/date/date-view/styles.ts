import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    ...getFont('600'),
    fontSize: Font.size.md,
  },
  date: {
    ...getFont('400'),
    fontSize: Font.size.sm,
  },
});
