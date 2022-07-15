import UserRepository from '@domain/user/repository/UserRepository';
import getCep from '@domain/user/services/helpers/getCep';
import UserValidator from '@domain/user/services/helpers/UserValidator';
import { IRepositoryUser } from '@interfaces/domain/repository';
import { IUserValidator } from '@interfaces/domain/services/validation';
import isCpfValid from '@util/validation/Cpf/isCpfValid';
import { container } from 'tsyringe';

container.registerSingleton<IRepositoryUser>('UserRepository', UserRepository);
container.registerSingleton<IUserValidator>('UserValidator', UserValidator);

container.register('getCep', {
  useValue: getCep,
});
container.register('isCpfValid', {
  useValue: isCpfValid,
});
