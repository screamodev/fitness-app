import React, { Ref } from 'react';
import {
  LayoutChangeEvent,
  ScrollView,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import { useThemeColor } from 'shared/lib/theme';

type SelectListProps<Type> = {
  items: Type[];
  selectedValue: Type;
  scrollViewRef: Ref<ScrollView>;
  dropdownStyle: StyleProp<ViewStyle>;
  rowStyle?: StyleProp<ViewStyle>;
  rowTextStyle?: StyleProp<TextStyle>;
  selectedRowTextStyle?: StyleProp<TextStyle>;
  selectedRowTextColor?: string;
  onChangeValue: (value: Type) => void;
  onSelectItemHeightChange: (height: number) => void;
};

export function SelectList<Type>(props: SelectListProps<Type>) {
  const {
    items,
    selectedValue,
    scrollViewRef,
    dropdownStyle,
    rowStyle,
    rowTextStyle,
    selectedRowTextStyle,
    onChangeValue,
    onSelectItemHeightChange,
  } = props;

  const backgroundColor = useThemeColor({}, 'background');
  const color = useThemeColor({}, 'text');

  const handleSelectItemHeightChange = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    onSelectItemHeightChange(height);
  };

  return (
    <ScrollView ref={scrollViewRef} style={[{ backgroundColor }, dropdownStyle]}>
      {items.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={rowStyle}
          onPress={() => onChangeValue(item)}
          onLayout={handleSelectItemHeightChange}
        >
          <Text
            style={[
              { backgroundColor, color },
              item === selectedValue ? [selectedRowTextStyle, rowTextStyle] : rowTextStyle,
            ]}
          >
            {`${item}`}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
