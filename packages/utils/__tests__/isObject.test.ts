import { isObject } from '../src/isObject';

describe('isObject', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should return true if value is an object', () => {
    expect(isObject({})).toBe(true);
  });

  it('should return true if value is an array', () => {
    expect(isObject([])).toBe(true);
  });

  it('should return false if value is a string', () => {
    expect(isObject('')).toBe(false);
  });

  it('should return false if value is a boolean', () => {
    expect(isObject(false)).toBe(false);
  });

  it('should return false if value is a number', () => {
    expect(isObject(0)).toBe(false);
  });

  it('should return false if value is null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false if value is undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });
});
