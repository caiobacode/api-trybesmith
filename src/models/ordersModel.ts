import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IOrder from '../interfaces/ordersInterfaces';

export async function getOrders(): Promise<IOrder[]> {
  const [result] = await connection.execute<IOrder[] & RowDataPacket[]>(
    `SELECT orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders 
    INNER JOIN Trybesmith.products ON orders.id = products.order_id
    GROUP BY orders.id`,
  );
  return result;
}

export async function insertOrder(userId: number): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?);',
    [userId],
  );
  return insertId;
}