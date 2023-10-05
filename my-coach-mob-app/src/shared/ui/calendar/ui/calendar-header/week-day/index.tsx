import { Text } from 'react-native';

import { useThemeColor } from 'shared/lib/theme';
import { styles } from './styles';

type WeekDayProps = {
  name: string;
  isCurrent: boolean;
};

export function WeekDay(props: WeekDayProps) {
  const { name, isCurrent } = props;

  const color = useThemeColor({}, isCurrent ? 'primary' : 'text');

  return <Text style={[styles.day, { color }]}>{name.toUpperCase()}</Text>;
}
