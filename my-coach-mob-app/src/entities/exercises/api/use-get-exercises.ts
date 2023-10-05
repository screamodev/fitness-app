import { useGetExercisesQuery } from 'shared/api/exersises';

export const useGetExercises = (searchQuery?: string) => {
  const { loading, error, data } = useGetExercisesQuery(searchQuery);

  const exercises = data?.getExercises || [];

  return { isLoading: loading, isError: !!error, exercises };
};
