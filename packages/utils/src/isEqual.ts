import { isObject } from './isObject';

export const isEqual = (a: unknown, b: unknown) => {
  if (!isObject(a) || !isObject(b)) return a === b;

  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  for (const key in a as object) {
    const aVal = a[key];
    const bVal = b[key];
    const areObjects = isObject(aVal) && isObject(bVal);
    if ((areObjects && !isEqual(aVal, bVal)) || (!areObjects && aVal !== bVal)) return false;
  }

  return true;
};
