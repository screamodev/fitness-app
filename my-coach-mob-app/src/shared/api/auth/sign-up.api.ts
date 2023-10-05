import { gql, useMutation } from '@apollo/client';

import { SignUpMutationResponse, SignUpMutationVariables } from './types';

export const SIGN_UP_MUTATION = gql`
  mutation SignUp($fullName: String!, $email: String!, $password: String!) {
    signUp(signUpUser: { fullName: $fullName, email: $email, password: $password }) {
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

export const useSignUpMutation = () => {
  return useMutation<SignUpMutationResponse, SignUpMutationVariables>(SIGN_UP_MUTATION);
};
