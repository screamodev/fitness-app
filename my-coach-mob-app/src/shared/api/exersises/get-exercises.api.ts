import { gql, useQuery } from '@apollo/client';
import { ExerciseQueryResponse } from './types';

export const GET_EXERCISES_QUERY = gql`
  query GetExercises($searchQuery: String!) {
    getExercises(getExercisesInput: { searchQuery: $searchQuery }) {
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
      name
      nameUk
      muscles {
        id
        isPrimary
        name
        nameUk
      }
    }
  }
`;

export const useGetExercisesQuery = (searchQuery?: string) => {
  return useQuery<ExerciseQueryResponse>(GET_EXERCISES_QUERY, {
    variables: { searchQuery },
    fetchPolicy: 'no-cache',
  });
};
