import { ReactNode } from 'react';

import { View } from 'shared/ui/theme';
import { Content } from './content';
import { Description } from './description';
import { Footer } from './footer';
import { Header } from './header';
import { Title } from './title';
import { styles } from './styles';

type StepProps = {
  children: ReactNode;
};

export function Step(props: StepProps) {
  const { children } = props;

  return <View style={styles.wrapper}>{children}</View>;
}

Step.Header = Header;
Step.Title = Title;
Step.Description = Description;
Step.Content = Content;
Step.Footer = Footer;
