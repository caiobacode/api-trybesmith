import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/usersInterfaces';

export default async function createUser(user: IUser): Promise<IUser> {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
}