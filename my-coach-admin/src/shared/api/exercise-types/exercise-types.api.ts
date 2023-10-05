import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import type { GetExerciseTypesResponse } from './types';

export const GET_EXERCISE_TYPES_QUERY = gql`
  query {
    getExerciseTypes {
      id
      name
      nameUk
    }
  }
`;

export const useGetExerciseTypesQuery = () => {
  return useQuery<GetExerciseTypesResponse>(GET_EXERCISE_TYPES_QUERY);
};
