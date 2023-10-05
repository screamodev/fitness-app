import { useRecoilState } from 'recoil';

import { selectedDateState } from './atoms';

export const useTraining = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  return { selectedDate, setSelectedDate };
};
