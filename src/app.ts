import express from 'express';
import { insertProduct, getProducts } from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/products', insertProduct);

app.get('/products', getProducts);

// starting

export default app;
