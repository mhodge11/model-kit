import { cleanObject } from '../src/cleanObject';

describe('cleanObject', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should return undefined if value is undefined', () => {
    expect(cleanObject(undefined)).toEqual(undefined);
  });

  it('should return null if value is null', () => {
    expect(cleanObject(null)).toEqual(null);
  });

  it('should return an empty object if value is an empty object', () => {
    expect(cleanObject({})).toEqual({});
  });

  it('should return an empty object if value is an object with only undefined values', () => {
    expect(cleanObject({ a: undefined })).toEqual({});
  });

  it('should return an empty object if value is an object with only null values', () => {
    expect(cleanObject({ a: null })).toEqual({});
  });

  it('should return only defined and not null values from an object', () => {
    expect(cleanObject({ a: undefined, b: null, c: 1 })).toEqual({ c: 1 });
  });

  it('should return only defined and not null values from an object with nested objects', () => {
    expect(cleanObject({ a: undefined, b: null, c: { d: undefined, e: null, f: 1 } })).toEqual({
      c: { f: 1 },
    });
  });

  it('should return a string directly if a string is passed', () => {
    expect(cleanObject('string')).toEqual('string');
  });

  it('should return a number directly if a number is passed', () => {
    expect(cleanObject(1)).toEqual(1);
  });

  it('should return a boolean directly if a boolean is passed', () => {
    expect(cleanObject(true)).toEqual(true);
  });

  it('should return an array directly if an array is passed', () => {
    expect(cleanObject([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('should ignore keys passed in the ignoreKeys array', () => {
    expect(cleanObject({ a: 1, b: 2 }, ['a'])).toEqual({ b: 2 });
  });

  it('should ignore nested keys passed in the ignoreKeys array', () => {
    expect(cleanObject({ a: 1, b: { c: 2, d: 3 } }, ['c'])).toEqual({ a: 1, b: { d: 3 } });
  });

  
});
