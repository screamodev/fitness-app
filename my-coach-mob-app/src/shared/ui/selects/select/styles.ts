import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 'auto',
    marginHorizontal: 0,
    marginLeft: 10,
    paddingHorizontal: 0,
    backgroundColor: 'transparent',
  },
  buttonText: {
    ...getFont('500'),
    fontSize: Font.size.md,
    marginHorizontal: 0,
    paddingLeft: 0,
    paddingRight: 0,
    backgroundColor: 'transparent',
  },
  dropdown: {
    position: 'absolute',
    width: 98,
    height: 300,
    left: '44%',
    top: 20,
    marginTop: 10,
    borderRadius: 8,
    borderTopWidth: 0,
  },
  row: {
    marginHorizontal: 21,
    paddingVertical: 8,
    borderBottomWidth: 1,
  },
  rowText: {
    marginHorizontal: 0,
    ...getFont('500'),
    fontSize: Font.size.md,
  },
});
