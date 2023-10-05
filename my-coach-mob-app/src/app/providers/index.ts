import compose from 'compose-function';

import { withActionSheet } from './with-action-sheet';
import { withApollo } from './with-apollo';
import { withRecoil } from './with-recoil';
import { withSafeArea } from './with-safe-area';

export const withProviders = compose(withSafeArea, withRecoil, withApollo, withActionSheet);
