import { StyleSheet } from 'react-native';

import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginBottom: 6,
  },
  text: {
    ...getFont('600'),
    position: 'absolute',
    width: 200,
    marginRight: 55,
    right: 0,
    top: 10,
    textAlign: 'right',
  },
});
