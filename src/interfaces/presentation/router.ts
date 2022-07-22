import { MiddlewareArray } from '@interfaces/middleware';
import { Router } from 'express';
import { ICreateUserController, IListUserController } from './controller';

export interface IEndPointsRouter {
  router: Router;
  routes(): void;
}

export interface IRouterUser {
  createUserController: ICreateUserController;
  listUserController: IListUserController;
  createMiddlewares: MiddlewareArray;
}
