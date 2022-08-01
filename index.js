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
    response.json({
        name: 'Product 1',
        price: 1580
    })
})

app.listen(port, () => {
    console.log('Mi port ' + port);
});