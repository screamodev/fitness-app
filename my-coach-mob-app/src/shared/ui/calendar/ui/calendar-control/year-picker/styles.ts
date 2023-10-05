import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
  },
  title: {
    ...getFont('500'),
    fontSize: Font.size.md,
    marginHorizontal: 8,
  },
});
