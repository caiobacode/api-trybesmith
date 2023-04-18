import { Request, Response } from 'express';
import { postUser, serviceLogin } from '../services/usersService';

export async function insertUser(req: Request, res: Response): Promise<Response> {
  const { type, data } = await postUser(req.body);
  return res.status(type).json(data);
}

export async function login(req: Request, res: Response): Promise<Response> {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }

  const { type, data } = await serviceLogin(req.body);
  return res.status(type).json(data);
}