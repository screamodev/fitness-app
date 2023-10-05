export const getMuscleClass = (isMainSelected: boolean, isAdditionalSelected: boolean) => {
  return [
    'body-map-muscle',
    { 'main-muscle-selected': isMainSelected },
    { 'additional-muscle-selected': isAdditionalSelected },
  ];
};
