import { duplicateObject } from '@model-kit/utils';
import { parsePath } from './parsePath';

export const middleware = (
  obj: unknown,
  path: string,
  action: (...args: unknown[]) => unknown,
  isGet?: boolean,
) => {
  const deepCopiedObj = duplicateObject(obj);

  if (isGet) return parsePath(deepCopiedObj, path, action);

  parsePath(deepCopiedObj, path, action);
  return deepCopiedObj;
};
