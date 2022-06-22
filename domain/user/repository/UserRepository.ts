import AbstractRepository from '@domain/AbstractRepository'
import { IRepositoryDatabase, IRepositoryUser } from 'interfaces/domain'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class UserRepository extends AbstractRepository implements IRepositoryUser {
  constructor (
    @inject('Database')
      database: IRepositoryDatabase) {
    super(database)
    this.database = database
  }

  async create (entity: object): Promise<void> {
    this.database.create(entity)
  }

  async readAll (): Promise<undefined | Map<number, object>> {
    return this.database.readAll()
  }
}
