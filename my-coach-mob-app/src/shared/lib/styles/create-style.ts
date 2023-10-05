import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

export const createStyle = (styleProps: ViewStyle | TextStyle | ImageStyle) =>
  StyleSheet.create({ key: styleProps }).key;
