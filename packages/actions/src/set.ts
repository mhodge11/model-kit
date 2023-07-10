import { isNumber } from '@model-kit/utils';
import { middleware } from './middleware';

const action = (obj: any, path: string | null, value: unknown): void => {
  if (!path) throw new Error('Path is required');

  let comparisonType: string | null | undefined;
  let comparisonKey: string | null = null;
  let comparisonValue = path;

  if (path.includes('[')) {
    if (path.split('[')[0] === '') {
      comparisonValue = path.replace('[', '').replace(']', '');
      if (comparisonValue.includes(':')) {
        const split = comparisonValue.split(':');
        if (split.length === 3)
          [comparisonType, comparisonKey, comparisonValue] = split;
        else [comparisonType, comparisonValue] = split;
      }
      path = null;
    } else {
      const comparison = path.split('[')[1].replace(']', '');
      [path] = path.split('[');
      if (comparison.includes(':')) {
        const split = comparison.split(':');
        if (split.length === 3)
          [comparisonType, comparisonKey, comparisonValue] = split;
        else [comparisonType, comparisonValue] = split;
      } else {
        comparisonValue = comparison;
      }
    }
  }

  if (comparisonType === 'id') {
    comparisonKey = 'id';
    comparisonType = 'prop';
  }

  if (comparisonKey) {
    let index;
    if (path)
      index = obj[path].findIndex(
        (newObj: unknown) => newObj[comparisonKey as string] === comparisonValue
      );
    else
      index = obj.findIndex(
        (newObj: unknown) => newObj[comparisonKey as string] === comparisonValue
      );

    if (index === -1) return;

    if (path) obj[path][index] = value;
    else obj[index] = value;
  } else if (comparisonValue === path) {
    obj[path] = value;
  } else if (isNumber(comparisonValue)) {
    if (path) obj[path][comparisonValue] = value;
    else obj[comparisonValue] = value;
  } else {
    let index;
    if (path)
      index = obj[path].findIndex((newObj: unknown) => newObj === comparisonValue);
    else index = obj.findIndex((newObj: unknown) => newObj === comparisonValue);

    if (index === -1) return;

    if (path) obj[path][index] = value;
    else obj[index] = value;
  }
};

export const set = (obj: unknown, path: string, value: unknown) =>
  middleware(obj, path, (newObj: unknown, newPath: string) =>
    action(newObj, newPath, value)
  );
