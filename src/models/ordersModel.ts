import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IOrder from '../interfaces/ordersInterfaces';

export default async function getOrders(): Promise<IOrder[]> {
  const [result] = await connection.execute<IOrder[] & RowDataPacket[]>(
    `SELECT orders.id, orders.user_id as userId, 
    JSON_ARRAYAGG(products.id) AS productsIds
    FROM Trybesmith.orders 
    INNER JOIN Trybesmith.products ON orders.id = products.order_id
    GROUP BY orders.id`,
  );
  return result;
}