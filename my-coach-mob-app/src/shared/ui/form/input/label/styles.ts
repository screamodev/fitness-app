import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  label: {
    ...getFont('500'),
    fontSize: Font.size.xs,
    lineHeight: 20,
  },
});
