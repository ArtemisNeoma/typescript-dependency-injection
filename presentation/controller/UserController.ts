import { Request, Response } from 'express'
import { IServiceUser } from 'interfaces/domain'
import { IControllerUser } from 'interfaces/presentation'
import { inject, injectable } from 'tsyringe'
import AbstractController from './AbstractController'

@injectable()
export default class UserController extends AbstractController implements IControllerUser {
  service: IServiceUser
  constructor (@inject('UserService') service: IServiceUser) {
    super(service)
    this.service = service
  }

  async createUser (req: Request, res: Response): Promise<Response> {
    const { code, info } = await this.service.create(req.body)
    return res.status(code).json(info)
  }

  async listUsers (req: Request, res: Response): Promise<void> {
    const { code, info } = await this.service.readAll()
    res.status(code).send(info)
  }
}
