import { ValidationError } from 'joi'
import { IEndPointsRepository, IUser } from './repository'

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

export interface IEndPointsService {
    repository: IEndPointsRepository
}

export interface IServiceResponse {
    code: number,
    info?: string | object | ValidationError
}

export interface ICreateUserService extends IEndPointsService {
    create (user: IUser): Promise<IServiceResponse>
    createSchema: IServiceValidationGroup<IUser>
}

export interface IListUserService extends IEndPointsService {
    readAll (): Promise<IServiceResponse>
}
