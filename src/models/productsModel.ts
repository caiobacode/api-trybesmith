import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/productsInterfaces';

export async function createProduct(product: IProduct): Promise<IProduct> {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return { id: insertId, ...product };
}

export async function getProducts(): Promise<IProduct[]> {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<IProduct[] & RowDataPacket[]>(query);
  return result;
}