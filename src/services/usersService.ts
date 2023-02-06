import jwt from 'jsonwebtoken';
import IUser from '../interfaces/usersInterfaces';
import createUser from '../models/usersModel';

const { JWT_SECRET } = process.env;

async function postUser(user: IUser): Promise<{ type: number, data: { token: string } }> {
  const newUser = await createUser(user);
  const token = jwt.sign(newUser.username, JWT_SECRET as string);

  return { type: 201, data: { token } };
}

export default postUser;