import IProduct from '../interfaces/productsInterfaces';
import { createProduct, getProducts } from '../models/productsModel';

export async function postProduct(product: IProduct): Promise<{ type: number, data: IProduct }> {
  const newProduct = await createProduct(product);
  return { type: 201, data: newProduct };
}

export async function findProducts(): Promise<{ type: number, data:IProduct[] }> {
  const allProducts = await getProducts();
  return { type: 200, data: allProducts };
}