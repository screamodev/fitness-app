import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14,
    borderRadius: 8,
  },
  button: {
    width: 140,
    height: 140,
    position: 'relative',
    borderRadius: 8,
    borderWidth: 3,
  },
  image: {
    height: 160,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    resizeMode: 'contain',
  },
});
