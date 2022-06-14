import { IServiceValidationGroup } from '@interfaces/domain'
import userCreateContext from './userContext'
import userCreateSchema from './userSchemas'

export const userCreateValidation: IServiceValidationGroup = {
  schema: userCreateSchema,
  context: userCreateContext
}
