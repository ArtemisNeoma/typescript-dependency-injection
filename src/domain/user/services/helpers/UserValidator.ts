import { IUser } from '@interfaces/domain/repository';
import { IUserValidator } from '@interfaces/domain/services/validation';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserValidator implements IUserValidator {
  private _getCep: (value: string) => Promise<void>;
  private _isCpfValid: (cpf: string) => void;
  constructor(
    @inject('getCep')
    getCep: (value: string) => Promise<void>,
    @inject('isCpfValid')
    isCpfValid: (cpf: string) => void,
  ) {
    this._getCep = getCep;
    this._isCpfValid = isCpfValid;
  }

  async validate(user: IUser) {
    await this._getCep(user.postal_code);
    this._isCpfValid(user.cpf);
  }
}
