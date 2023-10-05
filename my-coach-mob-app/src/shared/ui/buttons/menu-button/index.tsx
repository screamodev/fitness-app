import { TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';

import { IconComponent } from 'shared/config/icon';
import { useThemeColor } from 'shared/lib/theme';
import { ChevronRightIcon } from 'shared/ui/icons';
import { MenuButtonValue } from './menu-button-value';
import { styles } from './styles';

type MenuButtonProps = {
  title: string;
  color?: string;
  icon?: IconComponent;
  value?: string;
  showChevron?: boolean;
  onPress: () => void;
};

export function MenuButton(props: MenuButtonProps) {
  const { title, color, icon: Icon, value, showChevron, onPress } = props;

  const backgroundColor = useThemeColor({}, 'backgroundSecondary');
  const textColor = color || useThemeColor({}, 'text');

  return (
    <ListItem
      pad={12}
      containerStyle={[styles.container, { backgroundColor }]}
      Component={TouchableOpacity}
      onPress={onPress}
    >
      {Icon && <Icon color={textColor} size={20} />}
      <ListItem.Content>
        <ListItem.Title style={[styles.title, { color: textColor }]}>{title}</ListItem.Title>
      </ListItem.Content>
      {value && <MenuButtonValue>{value}</MenuButtonValue>}
      {showChevron && <ChevronRightIcon color={textColor} size={20} />}
    </ListItem>
  );
}
