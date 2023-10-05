import { ReactNode } from 'react';

import { View } from 'shared/ui/theme';
import { styles } from './styles';

type FooterProps = {
  children: ReactNode;
};

export function Footer(props: FooterProps) {
  const { children } = props;

  return <View style={styles.footer}>{children}</View>;
}
