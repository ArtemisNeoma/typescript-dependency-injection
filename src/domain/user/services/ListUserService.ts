import AbstractService from '@domain/AbstractService';
import {
  IServiceResponse,
  IListUserService,
} from 'interfaces/domain/services/service';
import { IRepositoryUser } from 'interfaces/domain/repository';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ListUserService
  extends AbstractService
  implements IListUserService
{
  repository: IRepositoryUser;
  constructor(
    @inject('UserRepository')
    repository: IRepositoryUser,
  ) {
    super(repository);
    this.repository = repository;
  }

  async readAll(): Promise<IServiceResponse> {
    try {
      const allUsers = await this.repository.readAll();
      if (allUsers !== undefined) {
        const usersJSON = Object.fromEntries(allUsers);
        return { code: 200, info: usersJSON };
      }
      return { code: 404 };
    } catch (err) {
      return { code: 500, info: `${err}` };
    }
  }
}
