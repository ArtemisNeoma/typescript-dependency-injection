import { NextFunction, Request, Response } from 'express';
import { ICreateUserService } from 'interfaces/domain/services/service';
import { ICreateUserController } from 'interfaces/presentation/controller';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class CreateUserController implements ICreateUserController {
  service: ICreateUserService;
  constructor(@inject('CreateUserService') service: ICreateUserService) {
    this.service = service;
  }

  handle = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | undefined> => {
    try {
      await this.service.create(req.body);
      return res.status(201).json('User Created');
    } catch (error) {
      next(error);
    }
  };
}
