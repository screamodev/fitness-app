import React, { ReactNode } from 'react';
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { REACT_APP_API_URL } from '@env';
import { createUploadLink } from 'apollo-upload-client';

import { getStoredToken } from 'entities/session';

const httpLink = createHttpLink({
  uri: REACT_APP_API_URL,
});

const uploadLink = createUploadLink({
  uri: REACT_APP_API_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getStoredToken();

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const link = ApolloLink.split(
  (operation) => operation.getContext().hasUpload,
  authLink.concat(uploadLink),
  authLink.concat(httpLink),
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export const withApollo = (component: () => ReactNode) => () => {
  // prettier-ignore
  return (
    <ApolloProvider client={client}>{component()}</ApolloProvider>
  );
};
