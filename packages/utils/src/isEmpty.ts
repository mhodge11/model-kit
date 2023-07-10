export const isEmpty = (value: string | object | null | undefined) => {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (typeof value === 'object' && value !== null) return Object.keys(value).length === 0;
  return true;
};
