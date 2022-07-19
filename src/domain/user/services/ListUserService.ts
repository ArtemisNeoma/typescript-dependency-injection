import {
  IDatabaseObject,
  IListUserService,
} from 'interfaces/domain/services/service';
import { IRepositoryUser, IUser } from 'interfaces/domain/repository';
import { inject, injectable } from 'tsyringe';
import StatusError from '@util/error';

@injectable()
export default class ListUserService implements IListUserService {
  repository: IRepositoryUser;
  constructor(
    @inject('UserRepository')
    repository: IRepositoryUser,
  ) {
    this.repository = repository;
  }

  async readAll(): Promise<IDatabaseObject> {
    try {
      const allUsers = await this.repository.readAll();
      if (allUsers !== undefined) {
        const usersJSON = Object.fromEntries(allUsers);
        return usersJSON;
      }
      throw new StatusError(404, 'Error: user list is empty');
    } catch (err) {
      throw new StatusError(500, 'Error: Failed to readAll database');
    }
  }
}
