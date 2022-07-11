import AbstractService from '@domain/AbstractService'
import { IServiceResponse, ICreateUserService, IServiceValidationGroup } from 'interfaces/domain/service'
import { IRepositoryUser, IUser } from 'interfaces/domain/repository'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class CreateUserService extends AbstractService implements ICreateUserService {
  repository: IRepositoryUser
  createSchema: IServiceValidationGroup<IUser>
  constructor (
    @inject('UserRepository')
      repository: IRepositoryUser,
    @inject('UserCreateSchema')
      createSchema: IServiceValidationGroup<IUser>
  ) {
    super(repository)
    this.repository = repository
    this.createSchema = createSchema
  }

  async create (user: IUser): Promise<IServiceResponse> {
    try {
      const { schema } = this.createSchema
      const newUser = await schema.validateAsync(user)
      this.repository.create(newUser)
      return { code: 201, info: 'User Created' }
    } catch (err) {
      return { code: 422, info: err as any }
    }
  }
}
