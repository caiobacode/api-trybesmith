import express from 'express';
import { insertProduct, getProducts } from './controllers/productsController';
import insertUser from './controllers/usersControllers';

const app = express();

app.use(express.json());

app.post('/products', insertProduct);

app.get('/products', getProducts);

app.post('/users', insertUser);

// starting

export default app;
