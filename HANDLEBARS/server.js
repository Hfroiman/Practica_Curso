import express from 'express'
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import ViewsRouter from './src/Routes/views.router.js'
import { dirname } from 'path';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname +'public'));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/src/views');
app.set('view engine', 'handlebars');
app.use('/', ViewsRouter);

console.log("A ver donde apunta el bendito: " + __dirname + '/src' + '/views')

const PORT = 2020;
app.listen(PORT, () => console.log('Server ok on port '+ PORT));