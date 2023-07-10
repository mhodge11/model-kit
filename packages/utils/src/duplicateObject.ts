import { isObject } from './isObject';

export const duplicateObject = (obj: unknown) => {
  // If not an object then return
  if (!isObject(obj)) return obj;

  let val: unknown;

  // Create an array or object to hold the values
  const newObj = Array.isArray(obj) ? [] : {};

  // Iterate through the object keys
  Object.keys(obj).forEach((key) => {
    val = obj[key];

    // If an object, recursively duplicate properties
    newObj[key] = isObject(val) ? duplicateObject(val) : val;
  });

  return newObj;
};
