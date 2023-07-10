import { isNumber } from '../src/isNumber';

describe('isNumber', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should return true if value is a number', () => {
    expect(isNumber(0)).toBe(true);
  });

  it('should return true if value is a string of numbers', () => {
    expect(isNumber('12832')).toBe(true);
  });

  it('should return false if value is a string that is not a number', () => {
    expect(isNumber('')).toBe(false);
  });

  it('should return false if value is a boolean', () => {
    expect(isNumber(false)).toBe(false);
  });

  it('should return false if value is an array', () => {
    expect(isNumber([])).toBe(false);
  });

  it('should return false if value is an object', () => {
    expect(isNumber({})).toBe(false);
  });

  it('should return false if value is undefined', () => {
    expect(isNumber(undefined)).toBe(false);
  });

  it('should return false if value is null', () => {
    expect(isNumber(null)).toBe(false);
  });
});
