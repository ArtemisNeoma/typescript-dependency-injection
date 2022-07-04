import DatabaseMap from '@database/map'
import UserRepository from '@domain/user/repository/UserRepository'
import { userCreateValidation } from '@domain/user/services/helpers/userValidation'
import { IRepositoryDatabase, IRepositoryUser } from '@interfaces/domain/repository'
import { IServiceValidationGroup } from '@interfaces/domain/service'
import { container } from 'tsyringe'

container.registerSingleton<IRepositoryDatabase>(
  'Database',
  DatabaseMap
)

container.registerSingleton<IRepositoryUser>(
  'UserRepository',
  UserRepository
)
container.register<IServiceValidationGroup>(
  'UserCreateSchema',
  { useValue: userCreateValidation }
)
