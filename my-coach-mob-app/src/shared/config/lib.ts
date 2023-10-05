import { ScrollView, TouchableOpacity } from 'react-native';

export interface ExtendedScrollView extends ScrollView {
  contains: (element: EventTarget | null) => boolean;
}

export interface ExtendedTouchableOpacity extends TouchableOpacity {
  contains: (element: EventTarget | null) => boolean;
}
