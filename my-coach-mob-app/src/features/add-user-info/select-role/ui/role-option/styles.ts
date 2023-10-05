import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 6,
  },
  button: {
    flexDirection: 'row',
  },
  leftSideContent: {
    width: 112,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  image: {
    minHeight: 130,
    height: '100%',
    width: 100,
  },
  rightSideContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderWidth: 2,
    borderLeftWidth: 0,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  title: {
    ...getFont('600'),
    fontSize: Font.size.lg,
    lineHeight: 24,
    marginBottom: 5,
  },
  text: {
    fontSize: Font.size.xs,
    lineHeight: 16,
    textAlign: 'left',
  },
});
