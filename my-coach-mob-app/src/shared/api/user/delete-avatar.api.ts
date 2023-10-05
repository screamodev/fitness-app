import { gql, useMutation } from '@apollo/client';

import { DeleteAvatarResponse } from './types';

export const DELETE_AVATAR_MUTATION = gql`
  mutation DeleteUserAvatar {
    deleteUserAvatar
  }
`;

export const useDeleteAvatarMutation = () => {
  return useMutation<DeleteAvatarResponse>(DELETE_AVATAR_MUTATION);
};
