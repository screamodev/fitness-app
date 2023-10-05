import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import type { GetExerciseResponse, GetExerciseVariable } from './types';

export const GET_EXERCISE_QUERY = gql`
  query GetExercise($id: Int!) {
    getExerciseById(id: $id) {
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
        isPrimary
        name
        nameUk
      }
    }
  }
`;

export const useGetExerciseQuery = (exerciseId: number) => {
  return useQuery<GetExerciseResponse, GetExerciseVariable>(GET_EXERCISE_QUERY, { id: exerciseId });
};
