import { Request } from 'express';
import { UserToken } from './tokenType';

export interface IRequestOrders extends Request {
  user: UserToken;
}
