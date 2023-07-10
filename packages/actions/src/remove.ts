import { isEmpty, isNumber } from '@model-kit/utils';
import {
  convertPathToArrayByBrackets,
  middleware,
  parseFindByVarForPropertyNameAndValue,
} from './middleware';

const removeByIndex = (obj: unknown, currentPath: string, findByVar: string) => {
  (isEmpty(currentPath) ? obj : obj[currentPath]).splice(findByVar, 1);
};

const removeByProperty = (obj: unknown, currentPath: string, findByVar: string) => {
  const { type, name, value } = parseFindByVarForPropertyNameAndValue(findByVar);

  const arr = isEmpty(currentPath) ? obj : obj[currentPath] || [];

  let index;

  if (type === 'prop') index = arr.findIndex((item: unknown) => item[name] === value);
  else if (type === 'value') index = arr.findIndex((item: unknown) => item === value);
  else if (type === 'index') index = value;
  else throw new Error('Action sets now use type variable in front of prop name');

  (isEmpty(currentPath) ? obj : obj[currentPath]).splice(index, 1);
};

const action = (obj: unknown, path: string) => {
  const { currentPath, findByVar } = convertPathToArrayByBrackets(path);
  if (isNumber(findByVar)) removeByIndex(obj, currentPath, findByVar);
  else removeByProperty(obj, currentPath, findByVar);
};

export const remove = (obj: unknown, path: string) => middleware(obj, path, action);
