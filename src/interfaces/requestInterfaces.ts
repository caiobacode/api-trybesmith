import { Request } from 'express';
import { UserToken } from './tokenType';

export interface IRequest extends Request {
  user?: UserToken;
}
