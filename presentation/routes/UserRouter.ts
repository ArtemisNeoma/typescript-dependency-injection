import { Router } from 'express'
import { RouteMiddleware, IControllerUser } from 'interfaces/presentation'
import AbstractRouter from './AbstractRouter'

export default class UserRouter extends AbstractRouter {
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
