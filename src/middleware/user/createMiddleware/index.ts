import { RouteMiddleware } from '@interfaces/presentation/router'
import { NextFunction, Request, Response } from 'express'
import userSchema from './schema'

const createMiddleware: RouteMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validateBody = await userSchema.validateAsync(req.body)
    req.body = validateBody
    next()
  } catch (error) {
    res.json(error)
    next(error)
  }
}

export default createMiddleware
