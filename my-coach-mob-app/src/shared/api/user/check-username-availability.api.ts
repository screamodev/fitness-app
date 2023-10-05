import { gql, useMutation } from '@apollo/client';

import {
  CheckUsernameAvailabilityMutationResponse,
  CheckUsernameAvailabilityMutationVariables,
} from './types';

export const CHECK_USERNAME_AVAILABILITY_MUTATION = gql`
  mutation CheckUsernameAvailability($username: String!) {
    checkUsernameAvailability(username: $username)
  }
`;

export const useCheckUsernameAvailability = () => {
  return useMutation<
    CheckUsernameAvailabilityMutationResponse,
    CheckUsernameAvailabilityMutationVariables
  >(CHECK_USERNAME_AVAILABILITY_MUTATION);
};
