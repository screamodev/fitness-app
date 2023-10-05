import React, { ReactNode } from 'react';
import SelectDropdown from 'react-native-select-dropdown';

import { useThemeColor } from 'shared/lib/theme';
import { styles } from './styles';

type SelectProps<Type> = {
  icon: ReactNode;
  items: Type[];
  selectedValue: Type;
  onChangeValue: (value: Type) => void;
  onClose: () => void;
  onOpen: () => void;
};

export function Select<Type>(props: SelectProps<Type>) {
  const { icon, items, selectedValue, onChangeValue, onClose, onOpen } = props;

  const backgroundColor = useThemeColor({}, 'background');
  const color = useThemeColor({}, 'text');
  const selectedRowTextColor = useThemeColor({}, 'primary');

  const adjustedDropdownStyle =
    styles.dropdown && typeof styles.dropdown === 'object'
      ? { ...styles.dropdown, backgroundColor }
      : styles.dropdown;

  const selectedRowTextStyle = {
    color: selectedRowTextColor,
  };

  return (
    <SelectDropdown
      data={items}
      defaultValue={selectedValue}
      dropdownStyle={adjustedDropdownStyle}
      rowStyle={styles.row}
      rowTextStyle={[{ backgroundColor, color }, styles.rowText]}
      buttonStyle={styles.button}
      buttonTextStyle={[{ backgroundColor, color }, styles.buttonText]}
      selectedRowTextStyle={selectedRowTextStyle}
      renderDropdownIcon={() => icon}
      onSelect={onChangeValue}
      onFocus={onOpen}
      onBlur={onClose}
    />
  );
}
