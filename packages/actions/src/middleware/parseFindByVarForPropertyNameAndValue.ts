export const parseFindByVarForPropertyNameAndValue = (findByVar: string) => {
  let type = '';
  let name = '';
  let value: unknown;

  const propertyArray = findByVar.split(':');
  if (propertyArray.length === 1) [value] = propertyArray;
  if (propertyArray.length === 2) [type, value] = propertyArray;
  else [type, name, value] = propertyArray;

  if (type === 'id') {
    name = 'id';
    type = 'prop';
  }

  return { type, name, value };
};
