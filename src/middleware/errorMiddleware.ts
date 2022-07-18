import { IStatusError } from '@interfaces/middleware';
import { NextFunction, Request, Response } from 'express';

export const errorMiddleware = async (
  err: IStatusError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(err.code).json(err.message);
};
