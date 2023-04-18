import IOrder from '../interfaces/ordersInterfaces';
import INewOrder from '../interfaces/newOrderInterfaces';
import { UserToken } from '../interfaces/tokenType';
import { getUser } from '../models/usersModel';
import { getOrders, insertOrder } from '../models/ordersModel';
import { updateProduct } from '../models/productsModel';

async function findOrders(): Promise<{ type: number, data: IOrder[] }> {
  const allOrders = await getOrders();
  return { type: 200, data: allOrders };
}

async function createOrder(orderInfo: INewOrder, userInfo: UserToken | undefined):
Promise<{ type: number, data: string | object }> {
  const { productsIds } = orderInfo;
  if (userInfo !== undefined) {
    const actualUser = await getUser(userInfo);
    const userId = actualUser[0].id;
    if (userId !== undefined) {
      const orderId = await insertOrder(userId);
      const promises = productsIds.map(async (id) => {
        await updateProduct(id, orderId);
      });
      await Promise.all(promises);
      return { type: 201, data: { userId, productsIds } };
    }
  }
  return { type: 400, data: 'algo deu errado' };
}

export { findOrders, createOrder };