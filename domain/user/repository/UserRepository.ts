import AbstractRepository from '@domain/AbstractRepository'
import { IRepositoryUser } from 'interfaces/domain'

export default class UserRepository extends AbstractRepository implements IRepositoryUser {
  async create (entity: object): Promise<void> {
    this.database.create(entity)
  }

  async readAll (): Promise<void | object> {
    return this.database.readAll()
  }
}
