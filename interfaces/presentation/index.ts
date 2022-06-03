import { NextFunction, Request, Response, Router } from 'express'
import { IEndPointsService } from 'interfaces/domain'

export type RouteBase<Type> = (req: Request, res: Response, next?: NextFunction) => Promise<Type>

export interface IEndPointsController {
  service: IEndPointsService
}

export interface IControllerUser extends IEndPointsController {
  createUser: RouteBase<Response>
  listUsers: RouteBase<void>
}

export type RouteMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>

export interface IEndPointsRouter {
  router: Router
  controller: IEndPointsController
  middlewares?: {[route: string]: RouteMiddleware}
  routes: () => Promise<void>
}
