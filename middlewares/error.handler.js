const logErrors = (err, req, res, next) => {
    console.log('logErrors')
    console.error(err)
    next(err) //para que se dirija al siguiente middleware
}

const errorHandler = (err, req, res, next) => {
    console.log('errorHandler')
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
}

const boomErrorHandler = (err, req, res, next) => {
    //si el error es de tipo boom, entonces no ejecutara el siguiente middleware (linea 21)
    if (err.isBoom) {
        const {output} = err
        res.status(output.statusCode).json(output.payload)
    }
    next(err) //para que vaya al sig middleware (se dirige a errorHandler)
}

module.exports = { logErrors, errorHandler, boomErrorHandler }