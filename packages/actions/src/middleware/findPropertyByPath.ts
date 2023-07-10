import { convertPathToArrayByBrackets } from './convertPathToArrayByBrackets';
import { findNewObjectByPath } from './findNewObjectByPath';

export const findPropertyByPath = (obj: unknown, path: string, returnWithIndex?: boolean) => {
  const { currentPath, findByVar } = convertPathToArrayByBrackets(path);
  return findNewObjectByPath(obj, currentPath, findByVar, returnWithIndex);
};
