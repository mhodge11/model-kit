import { duplicate } from '../src/duplicate';

describe('duplicate', () => {
  it('duplicates an object in an un-nested array and inserts it into the array', () => {
    // ARRANGE
    const expectedValue = JSON.stringify([
      { id: 'Large', name: 'Yo', number: 15 },
      { id: 'Old', name: 'Me', number: 0 },
      { id: 'New', name: 'Me', number: 0 },
      { id: 'Medium', name: 'You', number: 1 },
    ]);

    // ACT
    const result = duplicate(
      [
        { id: 'Large', name: 'Yo', number: 15 },
        { id: 'Old', name: 'Me', number: 0 },
        { id: 'Medium', name: 'You', number: 1 },
      ],
      '[id:Old]',
      'New'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('duplicates an object in an un-nested array and inserts it into the array, finds by inferred id', () => {
    // ARRANGE
    const expectedValue = JSON.stringify([
      { id: 'Large', name: 'Yo', number: 15 },
      { id: '75442486-0878-440c-9db1-a7006c25a39f', name: 'Me', number: 0 },
      { id: 'New', name: 'Me', number: 0 },
      { id: 'Medium', name: 'You', number: 1 },
    ]);

    // ACT
    const result = duplicate(
      [
        { id: 'Large', name: 'Yo', number: 15 },
        { id: '75442486-0878-440c-9db1-a7006c25a39f', name: 'Me', number: 0 },
        { id: 'Medium', name: 'You', number: 1 },
      ],
      '[id:75442486-0878-440c-9db1-a7006c25a39f]',
      'New'
    );

    // ASSERT
    expect(JSON.stringify(result)).toBe(expectedValue);
  });

  it('duplicates a nested object with a new id and inserts it into the array', () => {
    // ARRANGE
    const expectedValue = JSON.stringify({
      array: [
        { id: 'Large', name: 'Yo', number: 15 },
        { id: 'Old', name: 'Me', number: 0 },
        { id: 'New', name: 'Me', number: 0 },
        { id: 'Medium', name: 'You', number: 1 },
      ],
    });

    // ACT
    const result = duplicate(
      {
        array: [
          { id: 'Large', name: 'Yo', number: 15 },
          { id: 'Old', name: 'Me', number: 0 },
          { id: 'Medium', name: 'You', number: 1 },
        ],
      },
      'array[id:Old]',
      'New'
    );

    // ASSERT yo
    expect(JSON.stringify(result)).toBe(expectedValue);
  });
});
