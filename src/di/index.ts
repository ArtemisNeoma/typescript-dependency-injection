import UserRepository from '@domain/user/repository/UserRepository';
import CreateUserService from '@domain/user/services/CreateUserService';
import getCep from '@domain/user/services/helpers/getCep';
import UserValidator from '@domain/user/services/helpers/UserValidator';
import ListUserService from '@domain/user/services/ListUserService';
import { IRepositoryUser } from '@interfaces/domain/repository';
import {
  ICreateUserService,
  IListUserService,
} from '@interfaces/domain/services/service';
import { IUserValidator } from '@interfaces/domain/services/validation';
import { MiddlewareArray } from '@interfaces/middleware';
import {
  ICreateUserController,
  IListUserController,
} from '@interfaces/presentation/controller';
import createUserMiddlewares from '@middleware/user/createMiddlewares';
import isCpfValid from '@util/validation/Cpf/isCpfValid';
import { Router } from 'express';
import CreateUserController from 'presentation/controller/CreateUserController';
import ListUserController from 'presentation/controller/ListUserController';
import { container } from 'tsyringe';

container.registerSingleton<IRepositoryUser>('UserRepository', UserRepository);
container.registerSingleton<IUserValidator>('UserValidator', UserValidator);

container.register('getCep', {
  useValue: getCep,
});
container.register('isCpfValid', {
  useValue: isCpfValid,
});

// Routers
container.register<Router>('FrameworkRouter', { useValue: Router() });
container.register<ICreateUserController>(
  'CreateUserController',
  CreateUserController,
);
container.register<IListUserController>(
  'ListUserController',
  ListUserController,
);
container.register<MiddlewareArray>('CreateUserMiddlewares', {
  useValue: createUserMiddlewares,
});

container.register<ICreateUserService>('CreateUserService', CreateUserService);

container.register<IListUserService>('ListUserService', ListUserService);
