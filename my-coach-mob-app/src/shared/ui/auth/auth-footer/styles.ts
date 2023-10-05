import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  text: {
    textAlign: 'center',
    marginRight: 5,
    lineHeight: 23,
  },
  linkTitle: {
    ...getFont('600'),
    fontSize: Font.size.sm,
    lineHeight: 23,
  },
});
