import { add } from '../src/add';

describe('add', () => {
  it('adds a property to an un-nested array', () => {
    // ARRANGE
    const expectedValue = JSON.stringify(['hi', 'cool', 'hello']);

    // ACT
    const result = add(['hi', 'cool'], '', 'hello');

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('adds a property to the end of an array', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      array: ['hi', 'cool', 'hello'],
    });

    // ACT
    const result = add({ array: ['hi', 'cool'] }, 'array', 'hello');

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('inserts a property at a specified index', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      prime: {
        array: ['hi', 'hello', 'cool'],
      },
    });

    // ACT
    const result = add(
      { prime: { array: ['hi', 'cool'] } },
      'prime.array',
      'hello',
      1
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('inserts a property in a nested array that does not exist with index passthrough', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      prime: {
        array: ['hi', { id: 1, newProperty: ['hello'] }],
      },
    });

    // ACT
    const result = add(
      { prime: { array: ['hi', { id: 1 }] } },
      'prime.array[index:1].newProperty',
      'hello',
      1
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('inserts a property in an array that does not exist with property-value passthrough', () => {
    // ARRANGE

    // ACT
    const result = add(['hi', { id: 1 }], '[id:1].newProperty', 'hello', 1);

    // ASSERT
    const expectedValue = JSON.stringify([
      'hi',
      { id: 1, newProperty: ['hello'] },
    ]);
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('creates an array with added value if property does not exist', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      prime: {
        array: ['hello'],
      },
    });

    // ACT
    const result = add({ prime: {} }, 'prime.array', 'hello');

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('creates an top level array if does not exist', () => {
    // ARRANGE

    // ACT
    const result = add({ prime: {} }, 'secondary', 'hello');

    // ASSERT
    const expectedValue = JSON.stringify({
      prime: {},
      secondary: ['hello'],
    });
    expect(JSON.stringify(result)).toBe(expectedValue);
  });
});
