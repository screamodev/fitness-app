import { ReactNode } from 'react';

import { useThemeColor } from 'shared/lib/theme';
import { CardView } from 'shared/ui/card-view';
import { ChevronRightIcon } from 'shared/ui/icons';
import { CardImage } from '../card-image';
import { CardTitle } from '../card-title';
import { styles } from './styles';

type CardPreviewProps = {
  title: string;
  image: string;
  children: ReactNode;
};

export function CardPreview(props: CardPreviewProps) {
  const { title, image, children } = props;

  const iconColor = useThemeColor({}, 'button');

  return (
    <CardView style={styles.container}>
      <CardView style={styles.containerContent}>
        <CardImage image={image} />
        <CardView style={styles.content}>
          <CardTitle title={title} />
          {children}
        </CardView>
      </CardView>
      <ChevronRightIcon size={37} color={iconColor} />
    </CardView>
  );
}
