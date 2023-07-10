import { ModelKitError, createModelKitError } from './ModelKitError';

export type ModelConfigKey =
  | 'create'
  | 'read'
  | 'update'
  | 'delete'
  | 'list'
  | 'search'
  | 'subscribe';

export type ModelConfig = Record<
  ModelConfigKey,
  (variables: unknown) => Promise<{ data?: unknown; error?: unknown }>
>;

export type SchemaConfig = Record<string, ModelConfig>;

export interface ModelClientProps<Schema extends SchemaConfig> {
  schema: Schema;
  onError?: (error: ModelKitError) => void;
  ignoreKeysInUpdate?: string[];
}

export class ModelClient<Schema extends SchemaConfig> {
  schema: Schema;

  onError?: (error: ModelKitError) => void;

  ignoreKeysInUpdate?: string[];

  constructor({ schema, onError, ignoreKeysInUpdate }: ModelClientProps<Schema>) {
    this.schema = schema;

    if (onError) this.onError = onError;
    if (ignoreKeysInUpdate) this.ignoreKeysInUpdate = ignoreKeysInUpdate;
  }

  updateConfig({ onError, ignoreKeysInUpdate }: Omit<ModelClientProps<Schema>, 'schema'>) {
    if (onError) this.onError = onError;
    if (ignoreKeysInUpdate) this.ignoreKeysInUpdate = ignoreKeysInUpdate;
  }

  async run(name: string, fncName: ModelConfigKey, variables: unknown) {
    try {
      if (!this.schema[name]) throw new Error(`Schema ${name} not found`);
      if (!this.schema[name][fncName]) throw new Error(`Function ${fncName} not found`);

      const promise = this.schema[name][fncName];
      const { data, error } = await promise(variables);

      if (error) throw error;

      return { data };
    } catch (err: unknown) {
      const error = createModelKitError(err);

      if (this.onError) this.onError(error);

      return { error };
    }
  }
}
