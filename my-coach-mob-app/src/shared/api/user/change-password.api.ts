import { gql, useMutation } from '@apollo/client';

import { ChangePasswordMutationResponse, ChangePasswordMutationVariables } from './types';

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation ChangePassword($currentPassword: String!, $newPassword: String!) {
    changePassword(
      changePasswordInput: { oldPassword: $currentPassword, newPassword: $newPassword }
    ) {
      id
    }
  }
`;

export const useChangePasswordMutation = () => {
  return useMutation<ChangePasswordMutationResponse, ChangePasswordMutationVariables>(
    CHANGE_PASSWORD_MUTATION,
  );
};
