import { gql, useMutation } from '@apollo/client';

import { AddUserInfoMutationResponse, AddUserInfoMutationVariables } from './types';

export const ADD_USER_INFO_MUTATION = gql`
  mutation AddUserInfo(
    $gender: String!
    $role: String!
    $height: Float
    $weight: Float
    $username: String!
    $avatar: Upload
  ) {
    addUserInfo(
      userInfo: {
        gender: $gender
        role: $role
        height: $height
        weight: $weight
        username: $username
        avatar: $avatar
      }
    ) {
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
  }
`;

export const useAddUserInfoMutation = () => {
  return useMutation<AddUserInfoMutationResponse, AddUserInfoMutationVariables>(
    ADD_USER_INFO_MUTATION,
  );
};
