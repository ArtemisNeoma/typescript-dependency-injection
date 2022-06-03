import { NextFunction, Request, Response, Router } from 'express'
import { IEndPointsService } from 'interfaces/domain'

export interface IEndPointsController {
  service: IEndPointsService
}

export interface IEndPointsRouter {
  router: Router
  controller: IEndPointsController
  middleware?: {[index: string]: (req: Request, res: Response, next: NextFunction) => Promise<void>}
  routes: () => Promise<void>
}
