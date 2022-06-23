import AbstractService from '@domain/AbstractService'
import { IRepositoryUser, IServiceResponse, IServiceListUser } from 'interfaces/domain'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class ListUserService extends AbstractService implements IServiceListUser {
  repository: IRepositoryUser
  constructor (
    @inject('UserRepository')
      repository: IRepositoryUser
  ) {
    super(repository)
    this.repository = repository
  }

  async readAll (): Promise<IServiceResponse> {
    try {
      const allUsers = await this.repository.readAll()
      if (allUsers !== undefined) {
        const usersJSON = Object.fromEntries(allUsers)
        return { code: 200, info: usersJSON }
      }
      return { code: 404 }
    } catch (err) {
      return { code: 500, info: `${err}` }
    }
  }
}
