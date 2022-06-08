import UserRepository from '@domain/user/repository/UserRepository'
import UserService from '@domain/user/services'
import { IRepositoryUser, IServiceUser } from 'interfaces/domain'
import { container } from 'tsyringe'

container.registerSingleton<IRepositoryUser>(
  'UserRepository',
  UserRepository
)
container.register<IServiceUser>(
  'UserService',
  UserService
)
