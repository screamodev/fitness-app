import { useConfirmRequest } from '@/features/alerts';
import { type CreateExercise, useCreateExerciseMutation } from '@/shared/api/exercises';
import { useTranslation } from '@/shared/lib/localization';
import { generateExerciseMediaFiles } from '../lib';

export const useCreateExercise = () => {
  const { t } = useTranslation();

  const { mutate: createExercise } = useCreateExerciseMutation();

  const { confirmRequestModal } = useConfirmRequest();

  const handleCreateExercise = async (exercise: CreateExercise) => {
    try {
      const { primaryImage, images, video } = exercise;

      const medias = await generateExerciseMediaFiles(images, video, primaryImage);

      if (!medias) {
        throw new Error();
      }

      return await confirmRequestModal(
        () =>
          createExercise({
            ...exercise,
            ...medias,
            muscles: exercise.muscles.map(({ id, isPrimary }) => ({
              id: Number(id),
              isPrimary: isPrimary,
            })),
          }),
        {
          title: t('confirms.createExercise.title'),
          content: t('confirms.createExercise.content'),
          successTitle: t('notifications.exercise.createSuccess.title'),
          successMessage: t('notifications.exercise.createSuccess.message'),
          errorTitle: t('notifications.exercise.createFailure.title'),
          errorMessage: t('notifications.exercise.createFailure.message'),
        },
      );
    } catch (error) {
      if (error instanceof Error) {
        throw new Error();
      }
    }
  };

  return {
    createExercise: handleCreateExercise,
  };
};
