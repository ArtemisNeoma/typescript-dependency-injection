import { IDateValidationOptions, IStringValidationOptions } from '@interfaces/util'
import Joi from 'joi'
import sanitizeHtml from 'sanitize-html'

const { string, date, boolean } = Joi.types()
const escapeHtmlString = (value: string, helpers: Joi.CustomHelpers) => {
  if (typeof value !== 'string') helpers.error('string.base')
  return sanitizeHtml(value)
}
export const stringLenghtValidation = (schema: Joi.StringSchema, min?: number, max?: number) => {
  const minSchema = (typeof min === 'number') ? schema.min(min) : schema
  return (typeof max === 'number') ? minSchema.max(max) : minSchema
}

export const dateLenghtValidation = (schema: Joi.DateSchema, min?: string | Date, max?: string | Date) => {
  const lessSchema = (typeof min === 'number') ? schema.less(min) : schema
  return (typeof max === 'number') ? lessSchema.greater(max) : lessSchema
}

export const stringValidation = ({ name, min, max }: IStringValidationOptions) => {
  const baseSchema = string
    .trim()
    .custom(escapeHtmlString, 'Sanitizes HTML code included in the string for safety')
  return stringLenghtValidation(baseSchema, min, max)
}

export const numberStringValidation = ({ name, min, max }: IStringValidationOptions) => {
  const baseSchema = stringValidation({ name, min, max })
    .custom((value: string) => { console.log(value); return value })
    .replace(/\D/g, '')
  return stringLenghtValidation(baseSchema, min, min)
}

export const dateValidation = ({ name, min, max }: IDateValidationOptions) => {
  const baseSchema = date.iso()
  return dateLenghtValidation(baseSchema, min, max)
}
export const booleanValidation = () => boolean
