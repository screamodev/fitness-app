import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  textInfo: {
    width: '100%',
    paddingHorizontal: 5,
    paddingBottom: 75,
  },
  title: {
    ...getFont('500'),
    fontSize: Font.size.xxl,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 12,
  },
  text: {
    fontSize: Font.size.sm,
    lineHeight: 21,
    textAlign: 'center',
  },
});
