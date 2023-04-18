import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IUser from '../interfaces/usersInterfaces';
import ILogin from '../interfaces/loginInterfaces';

export async function createUser(user: IUser): Promise<IUser> {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)', 
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
}

export async function getUser(loginInfo: ILogin) {
  const { username, password } = loginInfo;
  const [result] = await connection.execute<IUser[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = (?) AND password = (?)',
    [username, password],
  );
  return result;
}