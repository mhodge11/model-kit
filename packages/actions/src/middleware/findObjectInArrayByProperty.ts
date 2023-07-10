import { isEmpty, isObject } from '@model-kit/utils';
import { parseFindByVarForPropertyNameAndValue } from './parseFindByVarForPropertyNameAndValue';

export const findObjectInArrayByProperty = (
  obj: unknown,
  currentPath: string,
  findByVar: string,
  returnWithIndex?: boolean,
) => {
  const { type, name, value } = parseFindByVarForPropertyNameAndValue(findByVar);

  let arr = isEmpty(currentPath) ? obj : obj[currentPath];
  if (!arr) arr = [];

  let index;

  if (type === 'prop')
    index = arr.findIndex(
      (item: unknown) => `${isObject(item) ? item[name] : item}` === `${value}`,
    );
  else if (type === 'value') index = arr.findIndex((item: unknown) => item === value);
  else if (type === 'index') index = value;
  else throw new Error('Action sets now use type variable in front of prop name');

  const item = arr[index];

  if (returnWithIndex) return { index, item };

  return item;
};
