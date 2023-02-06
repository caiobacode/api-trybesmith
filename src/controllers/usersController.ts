import { Request, Response } from 'express';
import postUser from '../services/usersService';

export default async function insertUser(req: Request, res: Response): Promise<Response> {
  const { type, data } = await postUser(req.body);
  return res.status(type).json(data);
}