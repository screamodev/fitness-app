import { gql, useQuery } from '@apollo/client';
import { ExerciseByIdQueryResponse } from './types';

export const GET_EXERCISE_BY_ID_QUERY = gql`
  query GetExerciseById($id: Int!) {
    getExerciseById(id: $id) {
      id
      name
      nameUk
      instruction
      instructionUk
      primaryImage {
        id
        url
      }
      medias {
        id
        type
        url
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

export const useGetExerciseByIdQuery = (id: number) => {
  return useQuery<ExerciseByIdQueryResponse>(GET_EXERCISE_BY_ID_QUERY, {
    variables: { id },
  });
};
