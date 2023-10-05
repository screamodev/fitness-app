export type User = {
  fullName: string;
  email: string;
  __typename?: string;
};

export type SignInUserVariables = {
  email: string;
  password: string;
};

export type SignInMutationResponse = {
  signIn: {
    accessToken: string;
    user: User;
  };
};
