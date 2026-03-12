import { InitMongodb } from './src/daos/mongodb/connection.js'
import express from 'express'
import morgan from 'morgan';
import router from './src/routes/product.router.js';
import routercart from './src/routes/carts.router.js'


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use('/products', router);
app.use('/carts', routercart);

InitMongodb();

const PORT = 8080;
app.listen(PORT, () => console.log('Server ok on port '+ PORT));