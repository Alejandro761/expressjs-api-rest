const express = require('express')
const ProductService = require('../services/product')
const router = express.Router() //creamos el router de los productos //primer paso
const service = new ProductService()

router.get('/', async (request, response) => {
    const products = await service.find()
    // const { size } = request.query;
    
    response.json(products)
})

//el endpoint de filter debe ir antes del id ya que si lo ponemos abajo, entonces cuando pongamos filter el navegador lo tomara como un id, filter es un endpoint especifico y id es un endpoint dinamico
router.get('/filter', (req, res) => {
    res.send('Yo soy un filter');
})

//resquest.params guarda los parametros del endpoint
router.get('/:id', async (request, response) => {
    const {id} = request.params; //request.params.id

    const product = await service.findOne(id);
    response.json(product);
})

router.post('/', async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body)

    res.status(201).json(newProduct)
})

router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body;
        const product = await service.update(id, body)
        
        res.json(product)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const product = await service.delete(id)

    res.json(product)
})

module.exports = router