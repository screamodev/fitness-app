import { TouchableOpacity } from 'react-native';
import { ListItem } from '@rneui/themed';

import { getFont } from 'shared/lib/font';
import { useThemeColor } from 'shared/lib/theme';
import { CheckIcon } from 'shared/ui/icons';
import { styles } from './styles';

type CheckboxButtonProps = {
  title: string;
  onPress: () => void;
  isSelected?: boolean;
};

export function CheckboxButton(props: CheckboxButtonProps) {
  const { title, isSelected = false, onPress } = props;

  const backgroundColor = useThemeColor({}, 'backgroundSecondary');
  const color = useThemeColor({}, 'text');

  const fontStyles = getFont(isSelected ? '600' : '500');

  return (
    <ListItem
      containerStyle={[styles.container, { backgroundColor }]}
      Component={TouchableOpacity}
      onPress={onPress}
    >
      <ListItem.Content>
        <ListItem.Title style={[styles.title, fontStyles, { color }]}>{title}</ListItem.Title>
      </ListItem.Content>
      {isSelected && <CheckIcon color={color} size={22} />}
    </ListItem>
  );
}
