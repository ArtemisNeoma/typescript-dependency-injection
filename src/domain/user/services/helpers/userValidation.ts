import { IUser } from '@interfaces/domain/repository'
import { IServiceValidationGroup } from '@interfaces/domain/service'
import userCreateSchema from './userSchemas'

export const userCreateValidation: IServiceValidationGroup<IUser> = {
  schema: userCreateSchema
}
