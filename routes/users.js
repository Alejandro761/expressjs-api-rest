const express = require('express')
const usersRouter = express.Router();

//en req.query se guardan los query parameters
usersRouter.get('/', (req, res) => {
    const {limit, offset} = req.query;
    
    if (limit && offset) {
        res.json({
            limit, offset
        })
    } else {
        res.send('No hay parametros')
    }
})

module.exports = usersRouter