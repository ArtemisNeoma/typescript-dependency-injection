import { IUser } from '@interfaces/domain/repository'
import { IServiceValidationGroup } from '@interfaces/domain/services/validation'
import userCreateSchema from './userSchemas'

export const userCreateValidation: IServiceValidationGroup<IUser> = {
  schema: userCreateSchema
}
