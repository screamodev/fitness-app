import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    minWidth: 70,
    height: 22,
    marginBottom: 8,
    paddingVertical: 1,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
  },
  muscle: {
    fontSize: Font.size.xs,
    ...getFont('500'),
  },
});
