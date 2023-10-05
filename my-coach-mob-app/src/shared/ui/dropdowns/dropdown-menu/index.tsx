import { useEffect, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { IconComponent } from 'shared/config/icon';
import { AnimatedBackgroundOpacity } from './animation';
import { DropdownMenuButton } from './dropdown-menu-button';
import { DropdownMenuToggle } from './dropdown-menu-toggle';
import { styles } from './styles';

interface DropdownMenuButton {
  icon: IconComponent;
  text?: string;
  onPress: () => void;
}

type DropdownMenuProps = {
  buttons: DropdownMenuButton[];
  containerStyles: StyleProp<ViewStyle>;
};

export function DropdownMenu(props: DropdownMenuProps) {
  const { buttons = [], containerStyles } = props;

  const [isOpen, setIsOpen] = useState(false);

  const isCurrentScreen = useIsFocused();

  useEffect(() => {
    if (!isCurrentScreen) {
      setIsOpen(false);
    }
  }, [isCurrentScreen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatedBackgroundOpacity isStartAnimation={isOpen} onPress={toggleOpen} />
      <View style={[styles.container, containerStyles]}>
        {buttons.map((button, index) => {
          const isLastButton = index === buttons.length - 1;
          const itemStyles = isLastButton ? { marginBottom: 10 } : {};

          return (
            <DropdownMenuButton
              key={index}
              isStartAnimation={isOpen}
              text={button.text}
              style={itemStyles}
              icon={button.icon}
              onPress={button.onPress}
            />
          );
        })}
        <DropdownMenuToggle isStartAnimation={isOpen} onPress={toggleOpen} />
      </View>
    </>
  );
}
