import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    ...getFont('500'),
    fontSize: Font.size.md,
    lineHeight: 20,
  },
});
