import { ReactElement } from 'react';
import { FlatList, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Modal from 'react-native-modal';

import { View } from 'shared/ui/theme';
import { SelectModalItem } from './select-modal-item';
import { styles } from './styles';

type SelectModalProps<Type> = {
  isOpen: boolean;
  items: Type[];
  containerStyles?: StyleProp<ViewStyle>;
  itemContainerStyles?: StyleProp<ViewStyle>;
  itemTextStyles?: StyleProp<TextStyle>;
  divider?: () => ReactElement;
  onSelect: (value: Type) => void;
  onClose: () => void;
};

export function SelectModal<Type>(props: SelectModalProps<Type>) {
  const {
    isOpen,
    items,
    containerStyles,
    itemContainerStyles,
    itemTextStyles,
    divider,
    onSelect,
    onClose,
  } = props;

  const renderItem = ({ item }: { item: Type }) => {
    return (
      <SelectModalItem
        item={item}
        itemContainerStyles={itemContainerStyles}
        textStyles={itemTextStyles}
        onPress={onSelect}
      />
    );
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={isOpen}
      backdropTransitionOutTiming={0}
      onBackdropPress={onClose}
      backdropOpacity={0}
    >
      <View style={containerStyles}>
        <FlatList
          data={items}
          keyExtractor={(item) => `${item}`}
          ItemSeparatorComponent={divider}
          renderItem={renderItem}
        />
      </View>
    </Modal>
  );
}
