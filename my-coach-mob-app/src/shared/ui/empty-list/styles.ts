import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 240,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  title: {
    ...getFont('600'),
    fontSize: Font.size.md,
  },
  description: {
    fontSize: Font.size.sm,
    marginTop: 12,
    width: 250,
    textAlign: 'center',
  },
});
