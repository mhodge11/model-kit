import { remove } from '../src/remove';

describe('remove', () => {
  it('removes string from an un-nested array by passing value into path', () => {
    // ARRANGE
    const expectedValue = JSON.stringify(['hi']);

    // ACT
    const result = remove(['hi', 'cool'], '[value:cool]');

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('removes object from an un-nested array by passing id into path', () => {
    // ARRANGE
    const expectedValue = JSON.stringify([
      { id: '70442486-0878-440m-9db1-a700ec25a39f', readyToGo: false },
    ]);

    // ACT
    const result = remove(
      [
        { id: '75442486-0878-440c-9db1-a7006c25a39f', readyToGo: true },
        { id: '70442486-0878-440m-9db1-a700ec25a39f', readyToGo: false },
      ],
      '[id:75442486-0878-440c-9db1-a7006c25a39f]'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('removes string from an array by passing value into path', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({ array: ['hi'] });

    // ACT
    const result = remove({ array: ['hi', 'cool'] }, 'array[value:cool]');

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('removes string from an un-nested array by passing property and value into path', () => {
    // ARRANGE
    const expectedValue = JSON.stringify([
      { property: 'hi' },
      { property: 'no' },
    ]);

    // ACT
    const result = remove(
      [{ property: 'hello' }, { property: 'hi' }, { property: 'no' }],
      '[prop:property:hello]'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('removes string from an array by passing index into path', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({ array: ['hi'] });

    // ACT
    const result = remove({ array: ['hi', 'cool'] }, 'array[index:1]');

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('removes string from a nested array by id', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      prime: {
        array: [
          { id: '70442486-0878-440m-9db1-a700ec25a39f', readyToGo: false },
        ],
      },
    });

    // ACT
    const result = remove(
      {
        prime: {
          array: [
            { id: '75442486-0878-440c-9db1-a7006c25a39f', readyToGo: true },
            { id: '70442486-0878-440m-9db1-a700ec25a39f', readyToGo: false },
          ],
        },
      },
      'prime.array[id:75442486-0878-440c-9db1-a7006c25a39f]'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });
});
