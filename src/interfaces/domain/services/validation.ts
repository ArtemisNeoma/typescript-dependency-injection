import { IUser } from '../repository';
export interface IUserValidator {
  validate(user: IUser): Promise<void>;
}
