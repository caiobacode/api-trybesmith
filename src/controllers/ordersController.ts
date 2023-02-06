import { Request, Response } from 'express';
import findOrders from '../services/ordersService';

export default async function getOrders(req: Request, res: Response): Promise<Response> {
  const { type, data } = await findOrders();
  return res.status(type).json(data);
}