import { Request, Response } from 'express';
import { postProduct, findProducts } from '../services/productsService';

export async function insertProduct(req: Request, res: Response): Promise<Response> {
  const { type, data } = await postProduct(req.body);
  return res.status(type).json(data);
}

export async function getProducts(req: Request, res: Response): Promise<Response> {
  const { type, data } = await findProducts();
  return res.status(type).json(data);
}
