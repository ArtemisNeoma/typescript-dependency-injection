import { Request, Response } from 'express'
import { IServiceUser } from 'interfaces/domain'
import { IControllerUser } from 'interfaces/presentation'
import AbstractController from './AbstractController'

export default class UserController extends AbstractController implements IControllerUser {
  service: IServiceUser
  constructor (service: IServiceUser) {
    super(service)
    this.service = service
  }

  async createUser (req: Request, res: Response): Promise<Response> {
    const serviceResponse = await this.service.create(req.body)
    return res.status(serviceResponse.code).json(serviceResponse.info)
  }

  async listUsers (req: Request, res: Response): Promise<void> {
    const { code, info } = await this.service.readAll()
    res.status(code).send(info)
  }
}
