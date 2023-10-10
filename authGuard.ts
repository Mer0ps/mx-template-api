import { Request, Response, NextFunction } from 'express';
import { decodeToken } from './utils';

export const authGuard = async (req: Request, res: Response, next: NextFunction) => {

  try
  {
    await decodeToken(req.header('Authorization'));
  }
  catch(error)
  {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  next();
};