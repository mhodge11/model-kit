import { isObject } from './isObject';

export const cleanObject = (obj: unknown, ignoreKeys: string[] = []) => {
  // If not an object then return
  if (!isObject(obj)) return obj;

  let val: unknown;

  // Create an array or object to hold the values
  const newObj = Array.isArray(obj) ? [] : {};

  // Iterate through the object keys
  Object.keys(obj).forEach((key) => {
    val = obj[key];

    // If an object, recursively clean properties
    newObj[key] = isObject(val) ? cleanObject(val, ignoreKeys) : val;

    // If null or in ignoreKeys, delete the key
    if (newObj[key] === null || ignoreKeys.includes(key)) delete newObj[key];
  });

  return newObj;
};
