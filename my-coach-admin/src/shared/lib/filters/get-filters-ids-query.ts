export const getFiltersIdsQuery = <T extends { id: string }>(filters: T[]): string => {
  return filters.map(({ id }) => id).join(',');
};
