import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    ...getFont('500'),
    fontSize: Font.size.md,
  },
  content: {
    marginTop: 10,
    textAlign: 'justify',
  },
});
