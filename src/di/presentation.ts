import CreateUserService from '@domain/user/services/CreateUserService'
import ListUserService from '@domain/user/services/ListUserService'
import { IServiceCreateUser, IServiceListUser } from '@interfaces/domain'
import { ICreateUserController, IListUserController } from '@interfaces/presentation'
import { Router } from 'express'
import CreateUserController from 'presentation/controller/CreateUserController'
import ListUserController from 'presentation/controller/ListUserController'
import { container } from 'tsyringe'

container.register<IServiceCreateUser>(
  'CreateUserService',
  CreateUserService
)

container.register<IServiceListUser>(
  'ListUserService',
  ListUserService
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
