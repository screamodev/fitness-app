import { User } from '../user';

export type UserWithAccessToken = {
  user: User;
  accessToken: string;
};

export type SignInMutationVariables = {
  email: string;
  password: string;
};

export type SignInMutationResponse = {
  signIn: UserWithAccessToken;
};

export type SignUpMutationVariables = {
  fullName: string;
  email: string;
  password: string;
};

export type SignUpMutationResponse = {
  signUp: UserWithAccessToken;
};
