import AbstractRepository from '@domain/AbstractRepository';
import {
  IRepositoryUser,
  IUser,
  IVariableDatabase,
} from 'interfaces/domain/repository';
import { injectable } from 'tsyringe';

@injectable()
export default class UserRepository
  extends AbstractRepository
  implements IRepositoryUser
{
  async getNewIndex(): Promise<number> {
    const idArray = Array.from(this._database.keys());
    if (idArray.length === 0) {
      return 0;
    }
    return Math.max(...idArray) + 1;
  }

  async create(entity: IUser): Promise<void> {
    this._database.set(await this.getNewIndex(), entity);
  }

  async read(id: number): Promise<undefined | IUser> {
    return this._database.get(id);
  }

  async readAll(): Promise<IVariableDatabase> {
    return this._database;
  }

  async update(id: number, newEntity: IUser): Promise<void> {
    this._database.set(id, newEntity);
  }

  async delete(id: number): Promise<void> {
    this._database.forEach((value: object, key: number) => {
      if (key === id) {
        this._database.delete(id);
      }
    });
  }
}
