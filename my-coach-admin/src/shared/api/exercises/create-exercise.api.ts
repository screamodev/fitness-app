import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import type { CreateExerciseMutationResponse, CreateExerciseMutationVariables } from './types';

export const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExercise(
    $images: [Upload!]
    $muscles: [AddMuscleInput!]!
    $instruction: String
    $instructionUk: String
    $name: String!
    $nameUk: String!
    $primaryImage: Upload
    $typeId: String!
    $video: Upload
  ) {
    createExercise(
      createExerciseInput: {
        images: $images
        muscles: $muscles
        instruction: $instruction
        instructionUk: $instructionUk
        name: $name
        nameUk: $nameUk
        primaryImage: $primaryImage
        typeId: $typeId
        video: $video
      }
    ) {
      id
      instruction
      instructionUk
      name
      nameUk
      medias {
        id
        url
      }
      muscles {
        id
        name
        nameUk
        isPrimary
      }
      primaryImage {
        id
        url
      }
      type {
        name
        nameUk
      }
    }
  }
`;

export const useCreateExerciseMutation = () => {
  return useMutation<CreateExerciseMutationResponse, CreateExerciseMutationVariables>(
    CREATE_EXERCISE_MUTATION,
  );
};
