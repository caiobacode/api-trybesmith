import { Request, Response } from 'express';
import postProduct from '../services/productsService';

export default async function insertProduct(req: Request, res: Response): Promise<Response> {
  const { type, data } = await postProduct(req.body);
  return res.status(type).json(data);
}
