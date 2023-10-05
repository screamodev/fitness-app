import { ReactNode } from 'react';

import { CardPreview } from 'shared/ui/card';
import { CardView } from 'shared/ui/card-view';
import { styles } from './styles';

type ExerciseCardProps = {
  title: string;
  image: string;
  children: ReactNode;
};

export function ExerciseCard(props: ExerciseCardProps) {
  const { title, image, children } = props;

  return (
    <CardPreview title={title} image={image}>
      <CardView style={styles.content}>{children}</CardView>
    </CardPreview>
  );
}
