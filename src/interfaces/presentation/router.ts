import { MiddlewareArray } from '@interfaces/middleware'
import { Router } from 'express'
import { ICreateUserController, IListUserController } from './controller'

export interface IEndPointsRouter {
  router: Router
  routes: () => Promise<void>
}

export interface IRouterUser {
  createUserController: ICreateUserController
  listUserController: IListUserController
  createMiddlewares?: MiddlewareArray
}

// export interface IFrameworkRouter {
//   all: () => IFrameworkRouter
//   get: () => IFrameworkRouter
//   post: () => IFrameworkRouter
//   patch: () => IFrameworkRouter
// }
