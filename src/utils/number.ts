export const tryParseInt = (value: unknown, defaultValue = 0) => {
  try {
    const valueAsNumber = parseInt(value as string);
    return isNaN(valueAsNumber) ? defaultValue : valueAsNumber;
  } catch {
    return defaultValue;
  }
};
