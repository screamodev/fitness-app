import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type IconProps = {
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
};

export type IconComponent = (props: IconProps) => ReactElement;
