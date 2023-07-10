import { duplicateObject } from '../src/duplicateObject';

describe('duplicateObject', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should return undefined if value is undefined', () => {
    expect(duplicateObject(undefined)).toEqual(undefined);
  });

  it('should return null if value is null', () => {
    expect(duplicateObject(null)).toEqual(null);
  });

  it('should return an empty object if value is an empty object', () => {
    expect(duplicateObject({})).toEqual({});
  });

  it('should return a new object if value is an object', () => {
    const value = { a: 1 };
    expect(duplicateObject(value)).toEqual(value);
    expect(duplicateObject(value)).not.toBe(value);
  });

  it('should return a new array if value is an array', () => {
    const value = [1];
    expect(duplicateObject(value)).toEqual(value);
    expect(duplicateObject(value)).not.toBe(value);
  });

  it('should return the same string if value is a string', () => {
    const value = 'string';
    expect(duplicateObject(value)).toEqual(value);
  });

  it('should return the same boolean if value is a boolean', () => {
    const value = false;
    expect(duplicateObject(value)).toEqual(value);
  });

  it('should return the same number if value is a number', () => {
    const value = 0;
    expect(duplicateObject(value)).toEqual(value);
  });
});
