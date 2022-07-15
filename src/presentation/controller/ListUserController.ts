import { Request, Response } from 'express';
import { IListUserService } from 'interfaces/domain/services/service';
import { IListUserController } from 'interfaces/presentation/controller';
import { inject, injectable } from 'tsyringe';
import AbstractController from './AbstractController';

@injectable()
export default class ListUserController
  extends AbstractController
  implements IListUserController
{
  service: IListUserService;
  constructor(@inject('ListUserService') service: IListUserService) {
    super(service);
    this.service = service;
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const { code, info } = await this.service.readAll();
    res.status(code).send({ message: info });
  };
}
