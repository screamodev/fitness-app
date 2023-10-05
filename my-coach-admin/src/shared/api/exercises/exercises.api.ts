import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import type { ExercisesParams, GetExercisesResponse } from './types';

export const GET_EXERCISES_QUERY = gql`
  query GetExercises($musclesIds: [Int!], $typesIds: [Int!]) {
    getExercises(getExercisesInput: { musclesIds: $musclesIds, typesIds: $typesIds }) {
      id
      instruction
      instructionUk
      name
      nameUk
      type {
        id
        name
        nameUk
      }
      primaryImage {
        id
        url
        type
        createdAt
      }
      medias {
        id
        url
        type
        createdAt
      }
      muscles {
        id
        name
        nameUk
        isPrimary
      }
    }
  }
`;

export const useGetExercisesQuery = (exercisesParams?: ExercisesParams) => {
  return useQuery<GetExercisesResponse>(GET_EXERCISES_QUERY, {
    musclesIds: exercisesParams?.filters?.muscles,
    typesIds: exercisesParams?.filters?.types,
  });
};
