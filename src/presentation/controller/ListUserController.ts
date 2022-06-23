import { Request, Response } from 'express'
import { IServiceListUser } from 'interfaces/domain'
import { IListUserController } from 'interfaces/presentation/controller'
import { inject, injectable } from 'tsyringe'
import AbstractController from './AbstractController'

@injectable()
export default class ListUserController extends AbstractController implements IListUserController {
  service: IServiceListUser
  constructor (@inject('ListUserService') service: IServiceListUser) {
    super(service)
    this.service = service
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const { code, info } = await this.service.readAll()
    res.status(code).send({ message: info })
  }
}
