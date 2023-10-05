import { MutableRefObject, useEffect } from 'react';

import { ExtendedScrollView, ExtendedTouchableOpacity } from 'shared/config/lib';

export const useCloseSelect = (
  refElements: (
    | MutableRefObject<ExtendedScrollView | null>
    | MutableRefObject<ExtendedTouchableOpacity | null>
  )[],
  isOpen: boolean,
  close: () => void,
) => {
  {
    useEffect(() => {
      const closeSelect = (event: MouseEvent) => {
        if (!isOpen) {
          return;
        }

        const clickedElement = event.target;

        if (!refElements.some((ref) => ref.current?.contains(clickedElement))) {
          close();
        }
      };

      document.addEventListener('mousedown', closeSelect);

      return () => {
        document.removeEventListener('mousedown', closeSelect);
      };
    }, [isOpen, refElements, close]);
  }
};
