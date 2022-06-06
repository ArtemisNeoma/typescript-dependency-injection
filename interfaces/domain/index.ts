import { Request } from 'express'
import { ValidationError } from 'joi'

interface IRepositoryDatabase {
    create: () => Promise<void>
    read: () => Promise<object>
    update: () => Promise<void>
    delete: () => Promise<void>
}

interface IEndPointsRepository {
    database: IRepositoryDatabase
}

interface IServiceSchema {
    validateAsync: (value: object, ...args: any[]) => Promise<object>
}
interface IContextFieldOptions {
    min?: string | number | Date,
    max?: string | number | Date
  }
interface IServiceContext {
    [index: string]: IContextFieldOptions;
  }

interface IServiceValidationGroup {
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
