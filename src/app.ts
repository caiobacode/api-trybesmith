import express from 'express';
import postProduct from './controllers/productsController';

const app = express();

app.use(express.json());

app.post('/products', postProduct);

// starting

export default app;
