import { StyleSheet } from 'react-native';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  title: {
    ...getFont('500'),
    fontSize: 16,
    lineHeight: 22,
  },
});
