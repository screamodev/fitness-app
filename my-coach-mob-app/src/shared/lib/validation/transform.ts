export const transformDecimal = (value: string, originalValue: number) =>
  Number(originalValue.toString().replace(/,/, '.'));
