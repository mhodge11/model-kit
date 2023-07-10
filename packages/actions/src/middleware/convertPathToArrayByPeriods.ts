export const convertPathToArrayByPeriods = (path: string[] | string): string[] => {
  if (!Array.isArray(path)) return path.split('.');
  return path;
};
