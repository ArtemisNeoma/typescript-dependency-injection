export type IVariableDatabase = Map<number, object>

export interface IEndPointsRepository {
    readonly database: IVariableDatabase
}

export interface IRepositoryUser extends IEndPointsRepository {
    create (entity: object): Promise<void>
    readAll (): Promise<Map<number, object> | undefined>
}
