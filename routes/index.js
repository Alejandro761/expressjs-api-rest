const express = require('express')
const categoriesRouter = require("./categories");
const productsRouter = require("./products");
const usersRouter = require("./users");

const routerAppi = app => {
    const router = express.Router()
    app.use('/api/v1', router)

    router.use('/products', productsRouter); //segundo paso para crear un router
    router.use('/categories', categoriesRouter)
    router.use('/users', usersRouter)
}

module.exports = routerAppi