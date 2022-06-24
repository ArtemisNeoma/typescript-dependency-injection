import { IEndPointsRepository, IRepositoryDatabase } from 'interfaces/domain/repository'

export default abstract class AbstractRepository implements IEndPointsRepository {
  database: IRepositoryDatabase

  constructor (database: IRepositoryDatabase) {
    this.database = database
  }
}
