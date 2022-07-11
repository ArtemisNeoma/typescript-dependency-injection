export interface ISchema<Target> {
    validateAsync (value: Target, ...args: any[]): Promise<Target>
}
export interface IContextFieldOptions {
    min?: string | number | Date,
    max?: string | number | Date
  }
export interface IServiceContext {
    [index: string]: IContextFieldOptions;
  }

export interface IServiceValidationGroup<Target> {
    schema: ISchema<Target>
}
