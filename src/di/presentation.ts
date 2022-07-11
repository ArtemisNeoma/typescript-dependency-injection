import CreateUserService from '@domain/user/services/CreateUserService'
import ListUserService from '@domain/user/services/ListUserService'
import { ICreateUserService, IListUserService } from '@interfaces/domain/services/service'
import { MiddlewareArray } from '@interfaces/middleware'
import { ICreateUserController, IListUserController } from '@interfaces/presentation/controller'
import createUserMiddlewares from '@middleware/user/createMiddlewares'
import { Router } from 'express'
import CreateUserController from 'presentation/controller/CreateUserController'
import ListUserController from 'presentation/controller/ListUserController'
import { container } from 'tsyringe'

container.register<ICreateUserService>(
  'CreateUserService',
  CreateUserService
)

container.register<IListUserService>(
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
container.register<MiddlewareArray>(
  'CreateUserMiddlewares',
  { useValue: createUserMiddlewares }
)
