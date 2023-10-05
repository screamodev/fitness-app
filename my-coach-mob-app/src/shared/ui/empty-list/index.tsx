import { ReactNode } from 'react';

import { Colors } from 'shared/config/colors';
import { Text, View } from 'shared/ui/theme';
import { styles } from './styles';

type EmptyListProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function EmptyList(props: EmptyListProps) {
  const { title, description, children } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text
        style={styles.description}
        lightColor={Colors.light.secondary}
        darkColor={Colors.dark.secondary}
      >
        {description}
      </Text>
      {children}
    </View>
  );
}
