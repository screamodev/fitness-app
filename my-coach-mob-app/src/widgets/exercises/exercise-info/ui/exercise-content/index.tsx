import { PrimaryImage } from 'entities/medias';
import { Exercise } from 'shared/api/exersises';
import { ExerciseDescription } from './exercise-description';

type ExerciseContentProps = {
  exercise: Exercise;
};

export function ExerciseContent(props: ExerciseContentProps) {
  const { exercise } = props;

  const { primaryImage } = exercise;

  return (
    <>
      <PrimaryImage uri={primaryImage?.url || ''} />
      <ExerciseDescription exercise={exercise} />
    </>
  );
}
