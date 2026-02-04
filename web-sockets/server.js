import express from 'express'
import { __dirname } from './utils.js';
import handlebars from 'express-handlebars';
import { Server, Socket } from 'socket.io';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname +'public'));


app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/src/views');
app.set('view engine', 'handlebars');

app.get('/', (res, req)=>{
    res.render('websocket');
});

const httpserver = app.listen(8080, ()=>{
    console.log('escuchando el puerto 8080');
});

const socketserver = new Server(httpserver);
socketserver.on('connection', ()=>{
    console.log('usuario conectado:'+ Socket.id );
    Socket.on('disconnect', ()=>{
        console.log('usuario desconectado');
    })

    Socket.emit('saludodesdeelback', 'bienvenido a websockets');
    Socket.on('respuestadesdeelfront', (msg)=>{
        console.log(msg)
    })

    const products = [];
    Socket.on('newproducts', (prod)=>{
        products.push(prod);
        socketserver.emit('products', products)
    })

    app.post('/', (req, res)=>{
        const {message} = res.body;
        socketserver.emit('message', message)
        res.send('se envia msg al socket del cliente.-')
    })
})