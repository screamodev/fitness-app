export const getYears = (totalYears: number, fromYear: number) => {
  return Array.from({ length: totalYears }, (_, i) => fromYear + i);
};
