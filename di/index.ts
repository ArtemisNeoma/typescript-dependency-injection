import UserRepository from '@domain/user/repository/UserRepository'
import { IRepositoryUser } from 'interfaces/domain'
import { container } from 'tsyringe'

container.registerSingleton<IRepositoryUser>(
  'UserRepository',
  UserRepository
)
