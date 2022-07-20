export interface IUser {
  full_name: string;
  email: string;
  email_confirmation: string;
  cpf: string;
  cellphone: string;
  birthdate: string;
  email_sms: boolean;
  whatsapp: boolean;
  country: string;
  city: string;
  postal_code: string;
  address: string;
}

export type IVariableDatabase = Map<number, IUser>;

export interface IEndPointsRepository {
  create(entity: IUser): Promise<void>;
  read(id: number): Promise<undefined | object>;
  readAll(): Promise<undefined | IVariableDatabase>;
  update(id: number, newEntity: IUser): Promise<void>;
  delete(id: number): Promise<void>;
}

export interface IRepositoryUser extends IEndPointsRepository {
  create(entity: IUser): Promise<void>;
  read(id: number): Promise<undefined | IUser>;
  readAll(): Promise<IVariableDatabase>;
}
