import {
  IEndPointsRepository,
  IUser,
  IVariableDatabase,
} from 'interfaces/domain/repository';

export default abstract class AbstractRepository
  implements IEndPointsRepository
{
  protected _database: IVariableDatabase = new Map<number, IUser>();
  abstract create(entity: IUser): Promise<void>;
  abstract read(id: number): Promise<object | undefined>;
  abstract readAll(): Promise<IVariableDatabase | undefined>;
  abstract update(id: number, newEntity: IUser): Promise<void>;
  abstract delete(id: number): Promise<void>;

  get database(): Map<number, IUser> {
    return this._database;
  }
}
