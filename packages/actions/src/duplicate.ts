import { randomUUID } from 'crypto';
import { add } from './add';
import { get } from './get';

export const duplicate = (obj: unknown, path: string, newId?: string) => {
  const { index, item } = get(obj, path, null, true);
  if (item.id) item.id = newId || randomUUID();
  const addPath = path.slice(0, path.lastIndexOf('['));
  return add(obj, addPath, item, index + 1);
};
