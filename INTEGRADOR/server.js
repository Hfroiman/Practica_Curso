import { InitMongodb } from './src/daos/mongodb/connection.js'
import express from 'express'
import morgan from 'morgan';
import router from './src/routes/product.router.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use('/products', router);

InitMongodb();

const PORT = 2020;
app.listen(PORT, () => console.log('Server ok on port '+ PORT));