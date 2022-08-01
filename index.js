const { request, response } = require('express');
const express = require('express')
const app = express()
const port = 3000;

app.get('/', (request, response) => {
    response.send('Hola mi server en express')
})

app.get('/nueva-ruta', (request, response) => {
    response.send('Hola soy una nueva ruta')
})

app.get('/products', (request, response) => {
    response.json([
        {
            name: 'Product 1',
            price: 1580
        },
        {
            name: 'Product 2',
            price: 580
        },
        {
            name: 'Product 3',
            price: 25890
        },
    ])
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