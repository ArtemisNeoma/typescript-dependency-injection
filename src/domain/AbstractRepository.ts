import { IEndPointsRepository, IVariableDatabase } from 'interfaces/domain/repository'

export default abstract class AbstractRepository implements IEndPointsRepository {
  protected _database: IVariableDatabase = new Map<number, object>()

  get database (): Map<number, object> {
    return this._database
  }
}
