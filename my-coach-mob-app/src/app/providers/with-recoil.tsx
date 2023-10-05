import { ReactNode, Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import { Text } from 'shared/ui/theme';

export const withRecoil = (component: () => ReactNode) => () =>
  (
    <RecoilRoot>
      <Suspense fallback={<Text>Loading...</Text>}>{component()}</Suspense>
    </RecoilRoot>
  );
