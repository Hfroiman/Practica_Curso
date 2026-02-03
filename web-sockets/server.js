import express from 'express'
import {_dirname} from './utils.js'
import handlebars from 'express-handlebars'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(_dirname + 'public'));

app.engine('handlebars', handlebars.engine());
app.set('views', _dirname+'/views');
app.set('view engine', 'handlebars');

const PORT = 8080;
app.listen(PORT, ()=> console.log('Server ok en puerto ${ PORT }'))

console.log("Hello broo..")