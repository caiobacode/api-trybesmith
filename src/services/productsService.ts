import IProduct from '../interfaces/productsInterfaces';
import createProduct from '../models/productsModel';

async function postProduct(product: IProduct): Promise<{ type: number, data: IProduct }> {
  const newProduct = await createProduct(product);
  return { type: 201, data: newProduct };
}

export default postProduct;