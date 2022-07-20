import { Request, Response } from 'express';
import { IListUserService } from 'interfaces/domain/services/service';
import { IEndPointsController } from 'interfaces/presentation/controller';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ListUserController implements IEndPointsController {
  service: IListUserService;
  constructor(@inject('ListUserService') service: IListUserService) {
    this.service = service;
  }

  handle = async (req: Request, res: Response): Promise<void> => {
    const info = await this.service.readAll();
    res.status(200).send({ message: info });
  };
}
