const validatorHandler = (schema, property) => {
    return (req, res, next) => {
        const data = req[property]
        const error = schema.validate(data)
    }
}

module.exports = { validatorHandler }