import { gql, useMutation } from '@apollo/client';

import { EditUserProfileMutationResponse, EditUserProfileMutationVariables } from './types';

export const EDIT_USER_PROFILE_MUTATION = gql`
  mutation EditUserProfile(
    $avatar: Upload
    $fullName: String
    $username: String
    $email: String
    $height: Float
    $weight: Float
  ) {
    updateUserInfo(
      userInfo: {
        avatar: $avatar
        fullName: $fullName
        username: $username
        email: $email
        height: $height
        weight: $weight
      }
    ) {
      user {
        fullName
        email
        gender
        role
        height
        weight
        username
        avatar {
          url
        }
      }
      accessToken
    }
  }
`;

export const useEditUserProfileMutation = () => {
  return useMutation<EditUserProfileMutationResponse, EditUserProfileMutationVariables>(
    EDIT_USER_PROFILE_MUTATION,
  );
};
