import { Request, Response, NextFunction } from 'express'
import { IControllerUser } from 'interfaces/presentation'
import AbstractController from './AbstractController'

export default class UserController extends AbstractController implements IControllerUser {
  async createUser (req: Request, res: Response, next?: NextFunction | undefined): Promise<Response> {
    return res
  }

  async listUsers (req: Request, res: Response, next?: NextFunction | undefined): Promise<void> {
  }
}
