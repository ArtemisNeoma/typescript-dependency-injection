/* eslint-disable no-useless-constructor */
import { MiddlewareArray } from '@interfaces/middleware'
import { Router } from 'express'
import { ICreateUserController, IListUserController } from 'interfaces/presentation/controller'
import { IRouterUser } from 'interfaces/presentation/router'
import { inject, injectable } from 'tsyringe'
import AbstractRouter from './AbstractRouter'

@injectable()
export default class UserRouter extends AbstractRouter implements IRouterUser {
  createUserController: ICreateUserController
  listUserController: IListUserController
  createMiddlewares: MiddlewareArray

  constructor (
    @inject('FrameworkRouter') router: Router,
    @inject('CreateUserController') createUserController: ICreateUserController,
    @inject('ListUserController') listUserController: IListUserController,
    @inject('CreateUserMiddlewares') createMiddlewares: MiddlewareArray
  ) {
    super(router)
    this.createUserController = createUserController
    this.listUserController = listUserController
    this.createMiddlewares = createMiddlewares
    this.routes()
  }

  async _routes (): Promise<void> {
    this.router.post('/', this.createMiddlewares, this.createUserController.handle)
    this.router.get('/', this.listUserController.handle)
  }
}
