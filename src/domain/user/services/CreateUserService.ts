import { ICreateUserService } from 'interfaces/domain/services/service';
import { IRepositoryUser, IUser } from 'interfaces/domain/repository';
import { inject, injectable } from 'tsyringe';
import { IUserValidator } from '@interfaces/domain/services/validation';
import StatusError from '@util/error';
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

  async create(user: IUser): Promise<void> {
    await this.validator.validate(user);
    await this.repository.create(user);
    return;
  }
}
