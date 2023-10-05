import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  buttonText: {
    ...getFont('500'),
    fontSize: Font.size.md,
    lineHeight: 20,
  },
  button: {
    paddingVertical: 14,
  },
  buttonContainer: {
    width: '100%',
  },
});
