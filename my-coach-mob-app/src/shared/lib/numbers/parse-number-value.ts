export const parseNumberValue = (text?: string): number | undefined => {
  if (!text) {
    return undefined;
  }

  const parsedValue = Number(text.replace(/,/, '.'));

  if (isNaN(parsedValue)) {
    return undefined;
  }

  return parsedValue;
};
