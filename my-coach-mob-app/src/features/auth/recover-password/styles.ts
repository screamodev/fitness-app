import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  link: {
    ...getFont('600'),
    fontSize: Font.size.xs,
    marginTop: 12,
  },
});
