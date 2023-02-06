import express from 'express';
import { insertProduct, getProducts } from './controllers/productsController';
import insertUser from './controllers/usersController';
import getOrders from './controllers/ordersController';

const app = express();

app.use(express.json());

app.post('/products', insertProduct);

app.get('/products', getProducts);

app.post('/users', insertUser);

app.get('/orders', getOrders);

// starting

export default app;
