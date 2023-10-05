import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginBottom: 30,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  title: {
    ...getFont('500'),
    fontSize: Font.size.sm,
    marginHorizontal: 16,
  },
  line: {
    flex: 1,
    height: 1,
  },
});
