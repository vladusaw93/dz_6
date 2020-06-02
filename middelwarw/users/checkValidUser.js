const Joi = require(`joi`);
const {userValidators: {validUser}} = require(`../../validators/`)
const ErrorHandler = require(`../../errors/errorHandler`)
module.exports = async (req, res, next) => {
    try {
        const user = req.body;

        const {error} = Joi.validate(user, validUser);

        if (error) {
            return next(new ErrorHandler(error.details[0].message, 400))
        }

        next();
    } catch (e) {
        console.log(e);
    }
}
