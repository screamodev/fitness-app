import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { width: '100%', height: 205 },
  containerImages: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  scroll: {
    flex: 1,
    overflow: 'hidden',
    marginRight: -15,
    zIndex: 100,
  },
  content: {
    flex: 1,
    width: '100%',
    marginTop: -25,
    marginRight: 15,
    paddingHorizontal: 18,
    paddingVertical: 24,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  contentMuscles: {
    marginTop: 12,
  },
});
