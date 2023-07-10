import { ModelKitError } from '../src/ModelKitError';

describe('ModelKitError', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should return an error with the correct message', () => {
    const error = new ModelKitError({
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
    });

    expect(error.message).toEqual('This is a test error');
  });

  it('should return an error with the correct name', () => {
    const error = new ModelKitError({
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
    });

    expect(error.name).toEqual('TestError');
  });

  it('should return an error with the correct type', () => {
    const error = new ModelKitError({
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
    });

    expect(error.type).toEqual('test');
  });

  it('should return an error with the correct statusCode', () => {
    const error = new ModelKitError({
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
    });

    expect(error.statusCode).toEqual(500);
  });

  it('should return an error with the correct stack when a stack is passed', () => {
    const error = new ModelKitError({
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
      stack: 'This is a stack',
    });

    expect(error.stack).toEqual('This is a stack');
  });

  it('should convert the error to an object correctly', () => {
    const error = new ModelKitError({
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
      stack: 'This is a stack',
    });

    expect(error.toObject()).toEqual({
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
      stack: 'This is a stack',
    });
  });

  it('should convert the error to a string correctly', () => {
    const errorObject = {
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
      stack: 'This is a stack',
    };
    const error = new ModelKitError(errorObject);

    expect(error.toString()).toEqual(JSON.stringify(errorObject));
  });

  it('should convert the error to a string correctly with a replacer', () => {
    const errorObject = {
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
      stack: 'This is a stack',
    };
    const error = new ModelKitError(errorObject);

    expect(error.toString({ replacer: () => 'replaced' })).toEqual(
      JSON.stringify(errorObject, () => 'replaced'),
    );
  });

  it('should convert the error to a string correctly with a space', () => {
    const errorObject = {
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
      stack: 'This is a stack',
    };
    const error = new ModelKitError(errorObject);

    expect(error.toString({ space: 2 })).toEqual(JSON.stringify(errorObject, null, 2));
  });

  it('should convert the error to a string correctly with a space and a replacer', () => {
    const errorObject = {
      name: 'TestError',
      type: 'test',
      message: 'This is a test error',
      statusCode: 500,
      stack: 'This is a stack',
    };
    const error = new ModelKitError(errorObject);

    expect(error.toString({ space: 2, replacer: () => 'replaced' })).toEqual(
      JSON.stringify(errorObject, () => 'replaced', 2),
    );
  });
});
