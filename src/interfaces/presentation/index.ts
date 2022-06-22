import { NextFunction, Request, Response, Router } from 'express'
import { IEndPointsService } from 'interfaces/domain'

export type RouteBase<Type> = (req: Request, res: Response, next?: NextFunction) => Promise<Type>

export interface IEndPointsController {
  service: IEndPointsService
}

export interface ICreateUserController extends IEndPointsController {
  handle: RouteBase<Response>
}

export interface IListUserController extends IEndPointsController {
  handle: RouteBase<void>
}

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
