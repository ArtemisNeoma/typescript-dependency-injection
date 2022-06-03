import { NextFunction, Request, Response, Router } from 'express'
import { IEndPointsService } from 'interfaces/domain'

export interface IEndPointsController {
  service: IEndPointsService
}

export type RouteMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>

export interface IEndPointsRouter {
  router: Router
  controller: IEndPointsController
  middlewares?: {[route: string]: RouteMiddleware}
  routes: () => Promise<void>
}
