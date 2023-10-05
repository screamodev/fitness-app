import { ReactNode } from 'react';

import { View } from 'shared/ui/theme';
import { styles } from './styles';

type ContentProps = {
  children: ReactNode;
};

export function Content(props: ContentProps) {
  const { children } = props;

  return <View style={styles.content}>{children}</View>;
}
