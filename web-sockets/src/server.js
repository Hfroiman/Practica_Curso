import express from 'express'
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

const app = express();

app.use(express.json());
app.use(express.static(__dirname +'/public'));


app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

app.get('/', (req, res)=>{
    res.render('websocket');
})

const httpserver = app.listen(8080, ()=>{
    console.log(`Escuchando al puerto  8080`);
});

const socketserver = new Server(httpserver);

const products = [];

socketserver.on('connection', (socket) => {

    console.log(`Usuario conectado ${socket.id}`);
    socket.on('disconnect', ()=>{
        console.log('usuario desconectado');
    })

    socket.emit('saludodesdeelback', 'bienvenido a websockets');

    
    socket.on('respuestadesdeelfront', (msg)=>{
        console.log(msg)
    })

    socket.on('newproduct', (prod)=>{
        products.push(prod);
        socketserver.emit('products', products)
    })

    app.post('/', (req, res)=>{
        const {message} = res.body;
        socketserver.emit('message', message)
        res.send('se envia msg al socket del cliente.-')
    })
})