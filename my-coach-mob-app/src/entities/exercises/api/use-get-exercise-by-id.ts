import { useGetExerciseByIdQuery } from 'shared/api/exersises';

export const useGetExerciseById = (id: number) => {
  const { loading, error, data } = useGetExerciseByIdQuery(id);

  const exercise = data?.getExerciseById || null;

  return { isLoading: loading, isError: !!error, exercise };
};
