import { convertPathToArrayByPeriods } from './convertPathToArrayByPeriods';
import { findPropertyByPath } from './findPropertyByPath';

export const parsePath = (
  obj: unknown,
  path: string | string[],
  action: (...args: unknown[]) => unknown,
) => {
  path = convertPathToArrayByPeriods(path);
  if (path.length === 1) return action(obj, path[0]);

  if (!path[0].includes('[') && !obj[path[0]]) obj[path[0]] = {};
  const property = findPropertyByPath(obj, path[0]);
  return parsePath(property, path.slice(1), action);
};
