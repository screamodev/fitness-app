import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  title: {
    fontSize: Font.size.md,
    ...getFont('500'),
  },
});
