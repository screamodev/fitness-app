import { gql, useMutation } from '@apollo/client';

import { SignInMutationResponse, SignInMutationVariables } from './types';

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(signInUser: { email: $email, password: $password }) {
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

export const useSignInMutation = () => {
  return useMutation<SignInMutationResponse, SignInMutationVariables>(SIGN_IN_MUTATION);
};
