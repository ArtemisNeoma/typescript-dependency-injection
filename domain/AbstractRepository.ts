import { IEndPointsRepository, IRepositoryDatabase } from 'interfaces/domain'

export default abstract class AbstractRepository implements IEndPointsRepository {
  database: IRepositoryDatabase

  constructor (database: IRepositoryDatabase) {
    this.database = database
  }

  abstract create (entity: object): Promise<void>
  abstract read (id: number): Promise<void | object>
  abstract readAll (): Promise<void | object>
  abstract update (id: number, newEntity: object): Promise<void>
  abstract delete (id: number): Promise<void>
}
