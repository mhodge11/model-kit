import { isEmpty } from '../src/isEmpty';

describe('isEmpty', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should return true if value is an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true if value is an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('should return true if value is an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false if value is a string', () => {
    expect(isEmpty('string')).toBe(false);
  });

  it('should return false if value is an array', () => {
    expect(isEmpty([1])).toBe(false);
  });

  it('should return false if value is an object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });
});
