import IOrder from '../interfaces/ordersInterfaces';
import getOrders from '../models/ordersModel';

export default async function findOrders(): Promise<{ type: number, data: IOrder[] }> {
  const allOrders = await getOrders();
  return { type: 200, data: allOrders };
}