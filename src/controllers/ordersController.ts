import { Request, Response } from 'express';
import { IRequest } from '../interfaces/requestInterfaces';
import { findOrders, createOrder } from '../services/ordersService';

export async function getOrders(req: Request, res: Response): Promise<Response> {
  const { type, data } = await findOrders();
  return res.status(type).json(data);
}

export async function insertOrder(req: IRequest, res: Response): Promise<Response> {
  const userInfo = req.user;
  
  const { type, data } = await createOrder(req.body, userInfo);
  return res.status(type).json(data);
}