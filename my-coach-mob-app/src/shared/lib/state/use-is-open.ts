import { useState } from 'react';

export const useIsOpen = (initialState = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { isOpen, open, close, toggle };
};
