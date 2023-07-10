export const convertPathToArrayByBrackets = (path: string) => {
  // eslint-disable-next-line prefer-const
  let [currentPath, findByVar] = path.split('[');
  if (findByVar) findByVar = findByVar.replace(']', '');
  return { currentPath, findByVar };
};
