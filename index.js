const express = require('express');
const cors = require('cors')
const routerAppi  = require('./routes'); //ya sabe que debe ir a index.js

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express()
const port = 3000;

app.use(express.json()) //para que el post pueda enviarnos su body
const whiteList = ['http://localhost:8080', 'https://myapp.co']
const options = {
    origin: (origin, callback) => {
        if (whiteList.includes(origin)) {
            callback(null, true)
        } else {
            callback(new Error('No permitido'))
        }
    } 
}
app.use(cors(options))
app.get('/', (request, response) => {
    response.send('Hola mi server en express')
})

app.get('/nueva-ruta', (request, response) => {
    response.send('Hola soy una nueva ruta')
})

routerAppi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
    console.log('Mi port ' + port);
});