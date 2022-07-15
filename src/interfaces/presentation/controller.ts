import { NextFunction, Request, Response } from 'express';
import { IEndPointsService } from 'interfaces/domain/services/service';

export type RouteBase<Type> = (
  req: Request,
  res: Response,
  next?: NextFunction,
) => Promise<Type>;

export interface IEndPointsController {
  service: IEndPointsService;
}

export interface ICreateUserController extends IEndPointsController {
  handle: RouteBase<Response>;
}

export interface IListUserController extends IEndPointsController {
  handle: RouteBase<void>;
}
