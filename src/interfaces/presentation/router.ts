import { NextFunction, Request, Response, Router } from 'express'
import { ICreateUserController, IListUserController } from './controller'

export type RouteMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>

export interface IEndPointsRouter {
  router: Router
  routes: () => Promise<void>
}

export interface IRouterUser {
  createUserController: ICreateUserController
  listUserController: IListUserController
  middlewares?: {[route: string]: RouteMiddleware}
}

// export interface IFrameworkRouter {
//   all: () => IFrameworkRouter
//   get: () => IFrameworkRouter
//   post: () => IFrameworkRouter
//   patch: () => IFrameworkRouter
// }
