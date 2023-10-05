import { format } from 'date-fns';

import { Colors } from 'shared/config/colors';
import { Formats } from 'shared/config/date-time';
import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

type DateViewProps = {
  title: string;
  date: Date;
};

export function DateView(props: DateViewProps) {
  const { title, date } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={styles.date}
        lightColor={Colors.light.secondary}
        darkColor={Colors.dark.secondary}
      >
        {format(date, Formats.date)}
      </Text>
    </View>
  );
}
