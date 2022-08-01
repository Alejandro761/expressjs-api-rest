const express = require('express')
const categoriesRouter = express.Router()

categoriesRouter.get('/:categoryId/products/:productId', (request, response) => {
    const {categoryId, productId} = request.params
    response.json({
        categoryId,
        productId,
    })
})

module.exports = categoriesRouter;