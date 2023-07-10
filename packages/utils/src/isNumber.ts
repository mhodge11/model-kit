export const isNumber = (value: unknown) => {
  if (typeof value === 'number') return true;
  if (typeof value !== 'string') return false;
  return /^[-\d]+$/.test(value.replace(/\./g, '').replace(/,/g, ''));
};
