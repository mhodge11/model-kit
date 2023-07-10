export interface ModelKitErrorProps {
  name: string;
  type: string;
  message: string;
  statusCode: number;
  stack?: string;
  error?: unknown;
}

export class ModelKitError extends Error {
  type: string;

  statusCode: number;

  error?: unknown;

  constructor({ message, name, type, statusCode, stack, error }: ModelKitErrorProps) {
    super(message);

    this.name = name;
    this.type = type;
    this.statusCode = statusCode;
    this.stack = stack;
    this.error = error;
  }

  toObject() {
    return {
      name: this.name,
      type: this.type,
      message: this.message,
      statusCode: this.statusCode,
      stack: this.stack,
      error: this.error,
    };
  }

  toString(props?: {
    replacer?: (key: string, value: unknown) => unknown;
    space?: string | number;
  }) {
    return JSON.stringify(this.toObject(), props?.replacer, props?.space);
  }

  print() {
    console.error(this.name, this.message, this.stack);
  }
}

export const createModelKitError = (err: unknown) => {
  const errorProps: ModelKitErrorProps = {
    name: 'ModelClientError',
    type: 'query',
    message: 'An error occurred while running a query',
    statusCode: 500,
  };

  if (err instanceof ModelKitError) {
    if (err.name) errorProps.name = err.name;
    if (err.type) errorProps.type = err.type;
    if (err.message) errorProps.message = err.message;
    if (err.statusCode) errorProps.statusCode = err.statusCode;
    if (err.stack) errorProps.stack = err.stack;
    if (err.error) errorProps.error = err.error;
  } else if (err instanceof Error) {
    if (err.name) errorProps.name = err.name;
    if (err.message) errorProps.message = err.message;
    if (err.stack) errorProps.stack = err.stack;
  } else if (typeof err === 'string') {
    errorProps.message = err;
  } else if (typeof err === 'object') {
    if (err['name']) errorProps.name = err['name'];
    if (err['type']) errorProps.type = err['type'];
    if (err['message']) errorProps.message = err['message'];
    if (err['statusCode']) errorProps.statusCode = err['statusCode'];
    if (err['stack']) errorProps.stack = err['stack'];
    if (err['error']) errorProps.error = err['error'];
  } else errorProps.error = err;

  return new ModelKitError(errorProps);
};
