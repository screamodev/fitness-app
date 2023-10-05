import { ref } from 'vue';
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';

import { getStoredToken } from '@/entities/session';
import { checkIsErrorStatusType } from '@/shared/lib/errors';

const has401Error = ref<boolean>(false);

const httpLink = createUploadLink({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const token = getStoredToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors }) => {
  const errorStatuses = graphQLErrors?.map(({ extensions }) => extensions.response) || [];

  has401Error.value = errorStatuses.some(
    (error) => checkIsErrorStatusType(error) && error.statusCode === 401,
  );
});

const link = ApolloLink.from([errorLink, authLink, httpLink]);

export const apolloClient = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
    },
  },
});

export { has401Error };
