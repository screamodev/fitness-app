import { ReactNode } from 'react';

import { View } from 'shared/ui/theme';
import { styles } from './styles';

type HeaderProps = {
  children: ReactNode;
};

export function Header(props: HeaderProps) {
  const { children } = props;

  return <View style={styles.header}>{children}</View>;
}
