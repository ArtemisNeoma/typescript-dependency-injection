import { Router } from 'express'
import { RouteMiddleware, IControllerUser } from 'interfaces/presentation'
import EndPointsRouter from './AbstractRouter'

export default class CustomerRouter extends EndPointsRouter {
  controller: IControllerUser

  constructor (router: Router, controller: IControllerUser, middlewares: {[index: string]: RouteMiddleware} = {}) {
    super(router, controller, middlewares)
    this.controller = controller
  }

  async routes (): Promise<void> {
    this.router.post('/', this.controller.createUser)
    this.router.get('/', this.controller.listUsers)
  }
}
