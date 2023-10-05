import { atom } from 'recoil';

import { AtomKey } from 'shared/config/recoil';

export const selectedDateState = atom<Date>({
  key: AtomKey.trainingSelectedDate,
  default: new Date(),
});
