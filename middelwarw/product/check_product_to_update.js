const Joi = require(`joi`);
const {productsValidators: {updateProductValidator}} = require(`../../validators`)
const ErrorHandler = require(`../../errors/errorHandler`)
module.exports = async (req, res, next) => {
    try {
        const product = req.body;

        const {error} = Joi.validate(product, updateProductValidator);

        if (error) {
            return next(new ErrorHandler(error.details[0].message, 400))
        }

        next();
    } catch (e) {
        console.log(e);
    }
}
