import UserRepository from '@domain/user/repository/UserRepository'
import { userCreateValidation } from '@domain/user/services/helpers/userValidation'
import { IRepositoryUser, IUser } from '@interfaces/domain/repository'
import { IServiceValidationGroup } from '@interfaces/domain/service'
import { container } from 'tsyringe'

container.registerSingleton<IRepositoryUser>(
  'UserRepository',
  UserRepository
)
container.register<IServiceValidationGroup<IUser>>(
  'UserCreateSchema',
  { useValue: userCreateValidation }
)
