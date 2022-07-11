import { IEndPointsRepository, IUser, IVariableDatabase } from 'interfaces/domain/repository'

export default abstract class AbstractRepository implements IEndPointsRepository {
  protected _database: IVariableDatabase = new Map<number, IUser>()

  get database (): Map<number, IUser> {
    return this._database
  }
}
