import { Pressable, StyleProp, TextStyle, ViewStyle } from 'react-native';

import { useThemeColor } from 'shared/lib/theme';
import { Text } from 'shared/ui/theme';

type SelectModalItemProps<Type> = {
  item: Type;
  itemContainerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  onPress: (value: Type) => void;
};

export function SelectModalItem<Type>(props: SelectModalItemProps<Type>) {
  const { item, itemContainerStyles, textStyles, onPress } = props;

  const backgroundColor = useThemeColor({}, 'border');

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? backgroundColor : 'transparent',
        },
        itemContainerStyles,
      ]}
      onPress={() => onPress(item)}
    >
      <Text style={textStyles}>{`${item}`}</Text>
    </Pressable>
  );
}
