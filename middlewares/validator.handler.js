const boom = require("@hapi/boom")

const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const data = req[property]
        const {error} = schema.validate(data)
        if (error) {
            next(boom.badRequest(error)) //lo enviamos al middleware de error
        }
        next() //si no hay un error sigue tu camino xd
    }
}

module.exports = { validatorHandler }