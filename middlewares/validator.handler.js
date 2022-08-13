const boom = require("@hapi/boom")

const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const data = req[property] //property porque puede ser params, query, body
        const {error} = schema.validate(data, {abortEarly: false})
        //abortEarly lo ponemos falso para que muestre todos los errores
        if (error) {
            next(boom.badRequest(error)) //lo enviamos al middleware de error
        }
        next() //si no hay un error sigue tu camino xd
    }
}

module.exports = { validatorHandler }