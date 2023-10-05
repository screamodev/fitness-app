export const isEvenAndNotLast = (length: number, index: number) => {
  const isLastItem = length - 1 === index;
  const isEvenItem = index % 2 === 0;

  return isEvenItem && !isLastItem;
};
