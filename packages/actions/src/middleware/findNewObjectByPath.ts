import { findObjectInArrayByProperty } from './findObjectInArrayByProperty';

export const findNewObjectByPath = (
  obj: unknown,
  currentPath: string,
  findByVar?: string,
  returnWithIndex?: boolean,
) => {
  if (findByVar) return findObjectInArrayByProperty(obj, currentPath, findByVar, returnWithIndex);
  return obj[currentPath];
};
