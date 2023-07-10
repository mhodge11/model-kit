import { isEmpty } from '@model-kit/utils';
import { middleware } from './middleware';

const action = (obj: any, path: string, value: any, index: number): void => {
  if (!Array.isArray(value)) value = [value];

  if (isEmpty(path)) {
    if (index !== -1 && index !== obj.length) obj.splice(index, 0, ...value);
    else obj.push(...value);
    return;
  }

  if (!obj[path]) obj[path] = value;
  else if (index !== -1 && index !== obj[path].length) obj[path].splice(index, 0, ...value);
  else obj[path].push(...value);
};

export const add = (obj: unknown, path: string, value: unknown, index?: number) => {
  if (index === undefined) index = -1;
  return middleware(obj, path, (newObj: unknown, newPath: string) =>
    action(newObj, newPath, value, index as number),
  );
};
