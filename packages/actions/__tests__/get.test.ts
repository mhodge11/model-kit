import { get } from '../src/get';

describe('get', () => {
  it('gets object in un-nested array by specifying lookup property in path', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({ id: 'hi', name: 'Pick me!' });

    // ACT
    const result = get(
      [
        { id: 'hi', name: 'Pick me!' },
        { id: 'cool', name: 'My name' },
      ],
      '[id:hi]'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('gets object in un-nested array by inferred id', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      id: '75442486-0878-440c-9db1-a7006c25a39f',
      name: 'Pick me!',
    });

    // ACT
    const result = get(
      [
        { id: '75442486-0878-440c-9db1-a7006c25a39f', name: 'Pick me!' },
        { id: 'cool', name: 'My name' },
      ],
      '[id:75442486-0878-440c-9db1-a7006c25a39f]'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('gets object by specifying lookup property in path', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({ id: 'hi', name: 'Pick me!' });

    // ACT
    const result = get(
      {
        array: [
          { id: 'hi', name: 'Pick me!' },
          { id: 'cool', name: 'My name' },
        ],
      },
      'array[id:hi]'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('gets object by specifying location and inferring id as property', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      id: '75442486-0878-440c-9db1-a7006c25a39f',
      name: 'Pick me!',
    });

    // ACT
    const result = get(
      {
        array: [
          { id: '75442486-0878-440c-9db1-a7006c25a39f', name: 'Pick me!' },
          { id: 'cool', name: 'My name' },
        ],
      },
      'array[id:75442486-0878-440c-9db1-a7006c25a39f]'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('gets element in array by specifying index in brackets', () => {
    // ARRANGE
    const expectedValue = 'guys';

    // ACT
    const result = get({ array: ['hi', 'you', 'guys'] }, 'array[index:2]');

    // ASSERT
    expect(result).toBe(expectedValue);
  });

  it('gets first element in array by specifying index 0 in brackets', () => {
    // ARRANGE
    const expectedValue = 'hi';

    // ACT
    const result = get({ array: ['hi', 'you', 'guys'] }, 'array[index:0]');

    // ASSERT
    expect(result).toBe(expectedValue);
  });

  it('gets element in array that is nested', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({ id: 'you', name: 'Pick me!' });

    // ACT
    const result = get(
      {
        prime: [
          {
            id: 'I',
            array: [
              { id: 'hi', name: 'Pick me!' },
              { id: 'cool', name: 'My name' },
            ],
          },
          {
            id: 'Here',
            array: [
              { id: 'you', name: 'Pick me!' },
              { id: 'cool', name: 'My name' },
            ],
          },
        ],
      },
      'prime[id:Here].array[id:you]'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });
});
