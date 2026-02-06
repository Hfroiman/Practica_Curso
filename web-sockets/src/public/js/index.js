const socketclient = io();

socketclient.on("saludodesdeelback", (msg)=>{
    console.log(msg);
    socketclient.emit('respuestadesdeelfront', 'muchas gracias');
})


const form = document.getElementById('form');

const inputnombre = document.getElementById('name');
const inputprice = document.getElementById('price');
const products = document.getElementById('products');

form.onsubmit=(e)=>{
    e.preventDefault();
    const name = inputnombre.value;
    const price = inputprice.value;
    const product = { name, price};

    socketclient.emit('newproduct', product);
}

socketclient.on('products', (arrayproducts) => {
    let infoproducts =``;
    arrayproducts.map((pr)=>{
        infoproducts += `${pr.name} - ${pr.price} </br>`;
    })
    products.innerHTML = infoproducts;
})

socketclient.on('message', (message)=>{
    console.log(message);
})