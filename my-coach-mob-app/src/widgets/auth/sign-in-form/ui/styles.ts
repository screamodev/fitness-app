import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    ...getFont('600'),
    fontSize: Font.size.xxl,
    marginBottom: 40,
  },
  inputWrapper: {
    marginBottom: 12,
  },
  buttonContainer: {
    marginTop: 28,
  },
});
