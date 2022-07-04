export interface IRepositoryDatabase {
    create (entity: object): Promise<void>
    read (id: number): Promise<object | undefined>
    readAll (): Promise<Map<number, object> | undefined>
    update (id: number, newEntity: object): Promise<void>
    delete (id: number): Promise<void>
}

export interface IEndPointsRepository {
    database: IRepositoryDatabase
}

export interface IRepositoryUser extends IEndPointsRepository {
    create (entity: object): Promise<void>
    readAll (): Promise<Map<number, object> | undefined>
}
