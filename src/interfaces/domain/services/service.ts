import { ValidationError } from 'joi'
import { IEndPointsRepository, IUser } from '../repository'

export interface IEndPointsService {
    repository: IEndPointsRepository
}

export interface IServiceResponse {
    code: number,
    info?: string | object | ValidationError
}

export interface ICreateUserService extends IEndPointsService {
    create (user: IUser): Promise<IServiceResponse>
}

export interface IListUserService extends IEndPointsService {
    readAll (): Promise<IServiceResponse>
}
