/* eslint-disable no-useless-constructor */
import { Router } from 'express'
import { ICreateUserController, IListUserController } from 'interfaces/presentation/controller'
import { RouteMiddleware, IRouterUser } from 'interfaces/presentation/router'
import { inject, injectable } from 'tsyringe'
import AbstractRouter from './AbstractRouter'

@injectable()
export default class UserRouter extends AbstractRouter implements IRouterUser {
  createUserController: ICreateUserController
  listUserController: IListUserController
  middlewares?: { [route: string]: RouteMiddleware } | undefined

  constructor (
    @inject('FrameworkRouter') router: Router,
    @inject('CreateUserController') createUserController: ICreateUserController,
    @inject('ListUserController') listUserController: IListUserController
  ) {
    super(router)
    this.createUserController = createUserController
    this.listUserController = listUserController
    this.routes()
  }

  async routes (): Promise<void> {
    this.router.post('/', this.createUserController.handle)
    this.router.get('/', this.listUserController.handle)
  }
}
