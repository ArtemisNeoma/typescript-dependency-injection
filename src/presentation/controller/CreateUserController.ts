import { Request, Response } from 'express'
import { IServiceCreateUser } from 'interfaces/domain'
import { ICreateUserController } from 'interfaces/presentation/controller'
import { inject, injectable } from 'tsyringe'
import AbstractController from './AbstractController'

@injectable()
export default class CreateUserController extends AbstractController implements ICreateUserController {
  service: IServiceCreateUser
  constructor (@inject('CreateUserService') service: IServiceCreateUser) {
    super(service)
    this.service = service
  }

  handle = async (req: Request, res: Response): Promise<Response> => {
    const { code, info } = await this.service.create(req.body)
    return res.status(code).json(info)
  }
}
