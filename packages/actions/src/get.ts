import { isEmpty } from '@model-kit/utils';
import { findPropertyByPath, middleware } from './middleware';

const action = (obj: unknown, path: string, defaultValue: unknown, returnWithIndex?: boolean) => {
  if (isEmpty(path)) return defaultValue;
  if (path.includes('[')) return findPropertyByPath(obj, path, returnWithIndex);
  return obj[path];
};

export const get = (
  obj: unknown,
  path: string,
  defaultValue?: unknown,
  returnWithIndex?: boolean,
) =>
  middleware(
    obj,
    path,
    (newObj: unknown, newPath: string) => action(newObj, newPath, defaultValue, returnWithIndex),
    true,
  );
