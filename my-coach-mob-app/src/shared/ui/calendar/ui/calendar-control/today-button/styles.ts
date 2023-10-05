import { StyleSheet } from 'react-native';

import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  button: {
    width: 65,
  },
  buttonText: {
    ...getFont('500'),
    textAlign: 'center',
  },
});
