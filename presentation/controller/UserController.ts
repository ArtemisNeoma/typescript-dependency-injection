import { Request, Response } from 'express'
import { IControllerUser } from 'interfaces/presentation'
import AbstractController from './AbstractController'

export default class UserController extends AbstractController implements IControllerUser {
  async createUser (req: Request, res: Response): Promise<Response> {
    return res
  }

  async listUsers (req: Request, res: Response): Promise<void> {
  }
}
