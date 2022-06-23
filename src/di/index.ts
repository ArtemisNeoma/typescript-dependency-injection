import UserRepository from '@domain/user/repository/UserRepository'
import CreateUserService from '@domain/user/services/CreateUserService'
import { userCreateValidation } from '@domain/user/services/helpers/userValidation'
import ListUserService from '@domain/user/services/ListUserService'
import DatabaseVariable from 'database/variable'
import { Router } from 'express'
import { IRepositoryDatabase, IRepositoryUser, IServiceCreateUser, IServiceListUser, IServiceValidationGroup } from 'interfaces/domain'
import { ICreateUserController, IListUserController } from 'interfaces/presentation'
import CreateUserController from 'presentation/controller/CreateUserController'
import ListUserController from 'presentation/controller/ListUserController'
import { container } from 'tsyringe'

// Repositories
container.registerSingleton<IRepositoryDatabase>(
  'Database',
  DatabaseVariable
)

// Services
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

// Routers
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
