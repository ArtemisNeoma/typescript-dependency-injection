import { Request } from 'express'
import { ValidationError } from 'joi'

export interface IRepositoryDatabase {
    create: () => Promise<void>
    read: () => Promise<object>
    update: () => Promise<void>
    delete: () => Promise<void>
}

export interface IEndPointsRepository {
    database: IRepositoryDatabase
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
    validationGroup: Record<string, IServiceValidationGroup>
}

export interface IServiceResponse {
    code: number,
    info?: string | ValidationError
}

export interface IServiceUser extends IEndPointsService {
    create: (user: Request) => Promise<IServiceResponse>
    readAll: () => Promise<IServiceResponse>
}
