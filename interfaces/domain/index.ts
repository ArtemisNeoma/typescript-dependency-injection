import { Request } from 'express'
import { ValidationError } from 'joi'

export interface IRepositoryDatabase {
    create: (entity: object) => Promise<void>
    read: (id: number) => Promise<object | void>
    readAll: () => Promise<object | void>
    update: (id: number, newEntity: object) => Promise<void>
    delete: (id: number) => Promise<void>
}

export interface IEndPointsRepository {
    database: IRepositoryDatabase
}

export interface IRepositoryUser extends IEndPointsRepository {
    create: (entity: object) => Promise<void>
    readAll: () => Promise<object | void>
}

export interface IServiceSchema {
    validateAsync: (value: object, ...args: any[]) => Promise<object>
}
export interface IContextFieldOptions {
    min?: string | number | Date,
    max?: string | number | Date
  }
export interface IServiceContext {
    [index: string]: IContextFieldOptions;
  }

export interface IServiceValidationGroup {
    schema: IServiceSchema
    context?: IServiceContext
}

export interface IEndPointsService {
    repository: IEndPointsRepository
}

export interface IServiceResponse {
    code: number,
    info?: string | ValidationError
}

export interface IServiceUser extends IEndPointsService {
    create: (user: Request) => Promise<IServiceResponse>
    createSchema: IServiceValidationGroup
    readAll: () => Promise<IServiceResponse>
}
