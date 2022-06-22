import { IServiceValidationGroup } from '@interfaces/domain'
import userCreateSchema from './userSchemas'

export const userCreateValidation: IServiceValidationGroup = {
  schema: userCreateSchema
}
