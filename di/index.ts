import UserRepository from '@domain/user/repository/UserRepository'
import UserService from '@domain/user/services'
import { Router } from 'express'
import { IRepositoryUser, IServiceUser } from 'interfaces/domain'
import { ICreateUserController, IListUserController } from 'interfaces/presentation'
import CreateUserController from 'presentation/controller/CreateUserController'
import ListUserController from 'presentation/controller/ListUserController'
import { container } from 'tsyringe'

container.registerSingleton<IRepositoryUser>(
  'UserRepository',
  UserRepository
)

container.register<IServiceUser>(
  'UserService',
  UserService
)

container.register<Router>(
  'FrameworkRouter',
  { useValue: Router() }
)
container.register<ICreateUserController>(
  'CreateUserController',
  CreateUserController
)
container.register<IListUserController>(
  'ListUserController',
  ListUserController
)
