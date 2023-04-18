import express from 'express';
import { insertProduct, getProducts } from './controllers/productsController';
import { insertUser, login } from './controllers/usersController';
import { authProductName, authProductAmount } from './middlewares/productsMiddleware';
import authUserFields from './middlewares/userMiddleware';
import getOrders from './controllers/ordersController';

const app = express();

app.use(express.json());

app.post('/products', authProductName, authProductAmount, insertProduct);

app.get('/products', getProducts);

app.post('/users', authUserFields, insertUser);

app.get('/orders', getOrders);

app.post('/login', login);

// starting

export default app;
