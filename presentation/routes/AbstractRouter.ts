import { Router } from 'express'
import { IEndPointsController, IEndPointsRouter, RouteMiddleware } from 'interfaces/presentation'

export default abstract class AbstractRouter implements IEndPointsRouter {
  router: Router
  controller: IEndPointsController
  middlewares: {[index: string]: RouteMiddleware}

  constructor (router: Router, controller: IEndPointsController, middlewares: {[index: string]: RouteMiddleware} = {}) {
    this.router = router
    this.controller = controller
    this.middlewares = middlewares
  }

  abstract routes (): Promise<void>
}
