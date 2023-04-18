import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express';
import { IRequest } from '../interfaces/requestInterfaces';
import { UserToken } from '../interfaces/tokenType';

const { JWT_SECRET } = process.env;

const authToken = (req: IRequest, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const verify = jwt.verify(authorization, JWT_SECRET as string) as UserToken;
    req.user = verify;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default authToken;