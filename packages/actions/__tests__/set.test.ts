import { set } from '../src/set';

describe('set', () => {
  it('sets a top level property in an object to passed in value', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      no: '',
      notMe: '',
      property: 'hi',
      cool: '',
    });

    // ACT
    const result = set(
      { no: '', notMe: '', property: '', cool: '' },
      'property',
      'hi'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('sets nested property in an un-nested array to passed in value', () => {
    // ARRANGE
    const expectedValue = JSON.stringify([
      { id: '75442486-0878-440c-9db1-a7006c25a39f', property: 'hello' },
      { id: '70442486-0878-440m-9db1-a700ec25a39f', property: 'dont change' },
    ]);

    // ACT
    const result = set(
      [
        { id: '75442486-0878-440c-9db1-a7006c25a39f', property: 'hi' },
        {
          id: '70442486-0878-440m-9db1-a700ec25a39f',
          property: 'dont change',
        },
      ],
      '[id:75442486-0878-440c-9db1-a7006c25a39f].property',
      'hello'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('sets property of an object in an un-nested array by path index', () => {
    // ARRANGE
    const expectedValue = JSON.stringify(['im here', 'hello', 'yo']);

    // ACT
    const result = set(['cool', 'hello', 'yo'], '[index:0]', 'im here');

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('sets property of a string in a nested array by path index', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      arr: [
        { prompt: 'yo', priority: 0 },
        { prompt: 'fire', priority: 2 },
        { prompt: 'cool', priority: 8 },
      ],
    });

    // ACT
    const result = set(
      {
        arr: [
          { prompt: 'yo', priority: 10 },
          { prompt: 'fire', priority: 2 },
          { prompt: 'cool', priority: 8 },
        ],
      },
      'arr[index:0].priority',
      0
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('sets element of an array in an un-nested array by path value', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      array: ['cool', 'hello', 'im here'],
    });

    // ACT
    const result = set(
      { array: ['cool', 'hello', 'yo'] },
      'array[value:yo]',
      'im here'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('sets nested property in an object to passed in value', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({ array: [{ property: 'hello' }] });

    // ACT
    const result = set(
      { array: [{ property: 'hi' }] },
      'array[prop:property:hi].property',
      'hello'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });
});
