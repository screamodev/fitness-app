import { useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import type { SignInMutationResponse, SignInUserVariables } from './types';

export const SIGN_IN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(signInUser: { email: $email, password: $password }) {
      accessToken
      user {
        fullName
        email
      }
    }
  }
`;

export const useSignInMutation = () => {
  return useMutation<SignInMutationResponse, SignInUserVariables>(SIGN_IN_MUTATION);
};
