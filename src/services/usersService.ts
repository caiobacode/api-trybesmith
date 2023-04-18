import jwt from 'jsonwebtoken';
import IUser from '../interfaces/usersInterfaces';
import ILogin from '../interfaces/loginInterfaces';
import IResponse from '../interfaces/responseInterfaces';
import { createUser, getUser } from '../models/usersModel';

const { JWT_SECRET } = process.env;

async function postUser(user: IUser): Promise<IResponse> {
  const newUser = await createUser(user);
  const payload = { username: newUser.username, password: newUser.password };
  const token = jwt.sign(payload, JWT_SECRET as string);

  return { type: 201, data: { token } };
}

async function serviceLogin({ username, password }: ILogin): Promise<IResponse> {
  const actualUser = await getUser({ username, password });

  if (actualUser.length === 0) {
    return { type: 401, data: { message: 'Username or password invalid' } };
  }
  
  const token = jwt.sign({ username, password }, JWT_SECRET as string);

  return { type: 200, data: { token } };
}

export { postUser, serviceLogin };