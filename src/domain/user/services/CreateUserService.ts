import AbstractService from '@domain/AbstractService'
import { IServiceResponse, ICreateUserService } from 'interfaces/domain/services/service'
import { IRepositoryUser, IUser } from 'interfaces/domain/repository'
import { inject, injectable } from 'tsyringe'
@injectable()
export default class CreateUserService extends AbstractService implements ICreateUserService {
  repository: IRepositoryUser
  constructor (
    @inject('UserRepository')
      repository: IRepositoryUser
  ) {
    super(repository)
    this.repository = repository
  }

  async create (user: IUser): Promise<IServiceResponse> {
    try {
      // this.validator.validate(user)
      this.repository.create(user)
      return { code: 201, info: 'User Created' }
    } catch (err) {
      return { code: 422, info: err as any }
    }
  }
}
