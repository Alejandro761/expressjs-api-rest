console.clear()
const express = require('express')
const faker = require('faker');
const app = express()
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hola mi server en express')
})

app.get('/nueva-ruta', (request, response) => {
    response.send('Hola soy una nueva ruta')
})

app.get('/products', (request, response) => {
    const products = []
    const { size } = request.query;
    const limit = size || 10;

    for (let index = 0; index < limit; index++) {
        products.push({
            name: faker.commerce.productName(),
            precio: parseInt(faker.commerce.price()),
            image: faker.image.imageUrl()
        })
    }
    response.json(products)
})
//el endpoint de filter debe ir antes del id ya que si lo ponemos abajo, entonces cuando pongamos filter el navegador lo tomara como un id, filter es un endpoint especifico y id es un endpoint dinamico
app.get('/products/filter', (req, res) => {
    res.send('Yo soy un filter');
})

//resquest.params guarda los parametros del endpoint
app.get('/products/:id', (request, response) => {
    const {id} = request.params; //request.params.id
    response.json({
        id,
        name: 'Product 3',
        price: 25890
    })
})

//en req.query se guardan los query parameters
app.get('/users', (req, res) => {
    const {limit, offset} = req.query;
    
    if (limit && offset) {
        res.json({
            limit, offset
        })
    } else {
        res.send('No hay parametros')
    }
})

app.get('/categories/:categoryId/products/:productId', (request, response) => {
    const {categoryId, productId} = request.params
    response.json({
        categoryId,
        productId,
    })
})

app.listen(port, () => {
    console.log('Mi port ' + port);
});