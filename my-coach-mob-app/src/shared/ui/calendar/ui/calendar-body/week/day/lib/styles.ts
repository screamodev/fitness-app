import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 33,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
  },
  day: {
    ...getFont('500'),
    fontSize: Font.size.sm,
    paddingTop: 10,
  },
  active: {
    ...getFont('500'),
    fontSize: Font.size.md,
  },
  selected: {
    ...getFont('500'),
  },
});
