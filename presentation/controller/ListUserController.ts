import { Request, Response } from 'express'
import { IServiceUser } from 'interfaces/domain'
import { IListUserController } from 'interfaces/presentation'
import { inject, injectable } from 'tsyringe'
import AbstractController from './AbstractController'

@injectable()
export default class ListUserController extends AbstractController implements IListUserController {
  service: IServiceUser
  constructor (@inject('UserService') service: IServiceUser) {
    super(service)
    this.service = service
  }

  async handle (req: Request, res: Response): Promise<void> {
    const { code, info } = await this.service.readAll()
    res.status(code).send(info)
  }
}
