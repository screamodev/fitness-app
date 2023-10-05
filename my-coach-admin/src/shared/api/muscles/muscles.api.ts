import { useQuery } from '@vue/apollo-composable';
import gql from 'graphql-tag';

import type { GetMusclesResponse } from './types';

export const GET_MUSCLES_QUERY = gql`
  query {
    getMuscles {
      id
      name
      nameUk
    }
  }
`;

export const useGetMusclesQuery = () => {
  return useQuery<GetMusclesResponse>(GET_MUSCLES_QUERY);
};
