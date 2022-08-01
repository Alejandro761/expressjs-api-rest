const express = require('express')
const faker = require('faker')

const router = express.Router() //creamos el router de los productos //primer paso

router.get('/', (request, response) => {
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
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
})

//resquest.params guarda los parametros del endpoint
router.get('/:id', (request, response) => {
    const {id} = request.params; //request.params.id
    response.json({
        id,
        name: 'Product 3',
        price: 25890
    })
})

router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    })
})

module.exports = router