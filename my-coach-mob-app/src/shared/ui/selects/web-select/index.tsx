import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ExtendedScrollView, ExtendedTouchableOpacity } from 'shared/config/lib';
import { useThemeColor } from 'shared/lib/theme';
import { SelectList } from './select-list';
import { useCloseSelect } from './use-close-select';
import { styles } from './styles';

type WebSelectProps<Type> = {
  icon: ReactNode;
  items: Type[];
  isOpen: boolean;
  selectedValue: Type;
  onChangeValue: (value: Type) => void;
  onClose: () => void;
  onToggle: () => void;
};

export function WebSelect<Type>(props: WebSelectProps<Type>) {
  const { icon, items, isOpen, selectedValue, onChangeValue, onClose, onToggle } = props;

  const [selectItemHeight, setSelectItemHeight] = useState<number>(0);

  const scrollViewRef = useRef<ExtendedScrollView | null>(null);
  const toggleButtonRef = useRef<ExtendedTouchableOpacity | null>(null);

  const backgroundColor = useThemeColor({}, 'background');
  const borderColor = useThemeColor({}, 'border');
  const color = useThemeColor({}, 'text');
  const selectedRowTextColor = useThemeColor({}, 'primary');

  useEffect(() => {
    if (isOpen && scrollViewRef.current) {
      const selectedItemYPosition = items.indexOf(selectedValue) * selectItemHeight;
      scrollViewRef.current.scrollTo({ y: selectedItemYPosition });
    }
  }, [isOpen, selectedValue, selectItemHeight]);

  useCloseSelect([scrollViewRef, toggleButtonRef], isOpen, onClose);

  const rowStylesWeb = {
    borderBottomColor: borderColor,
  };

  const selectedRowTextStyle = {
    color: selectedRowTextColor,
  };

  const onSelectItemHeightChange = (height: number) => {
    setSelectItemHeight(height);
  };

  return (
    <>
      <TouchableOpacity ref={toggleButtonRef} style={styles.button} onPress={onToggle}>
        <Text style={[{ backgroundColor, color }, styles.buttonText]}>{`${selectedValue}`}</Text>
        {icon}
      </TouchableOpacity>
      {isOpen && (
        <SelectList
          items={items}
          selectedValue={selectedValue}
          scrollViewRef={scrollViewRef}
          dropdownStyle={styles.dropdown}
          rowStyle={[styles.row, rowStylesWeb]}
          rowTextStyle={styles.rowText}
          selectedRowTextStyle={selectedRowTextStyle}
          onChangeValue={onChangeValue}
          onSelectItemHeightChange={onSelectItemHeightChange}
        />
      )}
    </>
  );
}
