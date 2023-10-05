import { gql, useMutation } from '@apollo/client';

import { DeleteAccountResponse } from './types';

export const DELETE_ACCOUNT_MUTATION = gql`
  mutation DeleteAccount {
    deleteAccount
  }
`;

export const useDeleteAccountMutation = () => {
  return useMutation<DeleteAccountResponse>(DELETE_ACCOUNT_MUTATION);
};
