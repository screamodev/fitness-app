import { Platform, StyleSheet } from 'react-native';
import { getFont } from 'shared/lib/font';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  beforeIcon: {
    marginRight: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  input: {
    flex: 1,
    ...getFont('400'),
    height: 44,
    ...(Platform.OS === 'web' && { outlineStyle: 'none' }),
  },
  afterText: {
    position: 'absolute',
    right: 40,
  },
});
