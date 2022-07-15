import {
  IServiceResponse,
  ICreateUserService,
} from 'interfaces/domain/services/service';
import { IRepositoryUser, IUser } from 'interfaces/domain/repository';
import { inject, injectable } from 'tsyringe';
import { IUserValidator } from '@interfaces/domain/services/validation';
@injectable()
export default class CreateUserService implements ICreateUserService {
  repository: IRepositoryUser;
  validator: IUserValidator;
  constructor(
    @inject('UserRepository')
    repository: IRepositoryUser,
    @inject('UserValidator')
    validator: IUserValidator,
  ) {
    this.repository = repository;
    this.validator = validator;
  }

  async create(user: IUser): Promise<IServiceResponse> {
    try {
      await this.validator.validate(user);
      this.repository.create(user);
      return { code: 201, info: 'User Created' };
    } catch (err: unknown) {
      const { message } = err as Error;
      console.log('> ' + message);
      return { code: 422, info: message };
    }
  }
}
