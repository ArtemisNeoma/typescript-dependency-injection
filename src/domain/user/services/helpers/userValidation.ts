import { IServiceValidationGroup } from '@interfaces/domain/service'
import userCreateSchema from './userSchemas'

export const userCreateValidation: IServiceValidationGroup = {
  schema: userCreateSchema
}
