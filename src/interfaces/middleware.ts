import { NextFunction, Request, Response } from 'express'

export type RouteMiddleware = (req: Request, res: Response, next: NextFunction) => Promise<void>

export type MiddlewareArray = Array<RouteMiddleware>
