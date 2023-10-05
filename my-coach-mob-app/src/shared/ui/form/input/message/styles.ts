import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  message: {
    flex: 1,
    marginLeft: 5,
    fontSize: Font.size.xs,
  },
});
