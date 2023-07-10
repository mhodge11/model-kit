import { isEqual } from '../src/isEqual';

describe('isEqual', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should return true if two numbers are equal', () => {
    expect(isEqual(1, 1)).toBe(true);
  });

  it('should return false if two numbers are not equal', () => {
    expect(isEqual(1, 2)).toBe(false);
  });

  it('should return true if two strings are equal', () => {
    expect(isEqual('a', 'a')).toBe(true);
  });

  it('should return false if two strings are not equal', () => {
    expect(isEqual('a', 'b')).toBe(false);
  });

  it('should return true if two booleans are equal', () => {
    expect(isEqual(true, true)).toBe(true);
  });

  it('should return false if two booleans are not equal', () => {
    expect(isEqual(true, false)).toBe(false);
  });

  it('should return true if two arrays are equal', () => {
    expect(isEqual([1], [1])).toBe(true);
  });

  it('should return false if two arrays are not equal', () => {
    expect(isEqual([1], [2])).toBe(false);
  });

  it('should return true if two objects are equal', () => {
    expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
  });

  it('should return false if two objects are not equal', () => {
    expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
  });

  it('should return true if two objects are equal with nested objects', () => {
    expect(isEqual({ a: { b: 1 } }, { a: { b: 1 } })).toBe(true);
  });

  it('should return false if two objects are not equal with nested objects', () => {
    expect(isEqual({ a: { b: 1 } }, { a: { b: 2 } })).toBe(false);
  });
});
