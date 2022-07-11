export interface IUser {
    full_name: string,
    email: string,
    email_confirmation: string,
    cpf: string,
    cellphone: string,
    birthdate: string,
    email_sms: boolean,
    whatsapp: boolean,
    country: string,
    city: string,
    postal_code: string,
    address: string
}

export type IVariableDatabase = Map<number, IUser>

export interface IEndPointsRepository {
    readonly database: IVariableDatabase
}

export interface IRepositoryUser extends IEndPointsRepository {
    create (entity: IUser): Promise<void>
    readAll (): Promise<IVariableDatabase | undefined>
}
