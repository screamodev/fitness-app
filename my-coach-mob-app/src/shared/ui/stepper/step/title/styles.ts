import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  title: {
    ...getFont('600'),
    fontSize: Font.size.xl,
    textAlign: 'center',
    marginBottom: 20,
  },
});
