import { Socket } from "socket.io";

const socketclient = io();
socketclient("saludosdesdeback", (msg)=>{
    console.log(msg);
    socketclient.emit('respuestadesdeelfront', 'muchas gracias');
})

const form = document.getElementById('form');

const inputnombre = document.getElementById('name');
const inputprice = document.getElementById('price');
const products = document.getElementById('products');

form.onsubmit=(e)=>{
    e.preventdefault();
    const name = inputnombre.value;
    const price = inputprice.value;
    const product = {
        name,
        price
    };
    socketclient.emit('newproduct', product);
    socketclient.on('products', (arrayproducts) => {
        let infoproducts ="";
        arrayproducts.map((pr)=>{
            infoproducts+=pr.name + ' - ' + pr.price + <br></br>
        })
        products.innerHTML = infoproducts;
    })
    socketclient.on('message', (message)=>{
        console.log(message);
    })
}