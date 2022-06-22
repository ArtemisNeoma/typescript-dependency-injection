import UserRepository from '@domain/user/repository/UserRepository'
import UserService from '@domain/user/services'
import { userCreateValidation } from '@domain/user/services/helpers/userValidation'
import DatabaseVariable from 'database/variable'
import { Router } from 'express'
import { IRepositoryDatabase, IRepositoryUser, IServiceUser, IServiceValidationGroup } from 'interfaces/domain'
import { ICreateUserController, IListUserController } from 'interfaces/presentation'
import CreateUserController from 'presentation/controller/CreateUserController'
import ListUserController from 'presentation/controller/ListUserController'
import { container } from 'tsyringe'

container.registerSingleton<IRepositoryDatabase>(
  'Database',
  DatabaseVariable
)

container.registerSingleton<IRepositoryUser>(
  'UserRepository',
  UserRepository
)
container.register<IServiceValidationGroup>(
  'UserCreateSchema',
  { useValue: userCreateValidation }
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
