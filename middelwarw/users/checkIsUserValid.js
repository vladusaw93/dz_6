const Joi = require(`joi`);
const {userValidators: {validUser}} = require(`../../validators`)
const ErrorHandler = require(`../../errors/errorHandler`)

const {errorsStatusEnum: {UNAUTHORIZED}} = require(`../../constants`)


module.exports = async (req, res, next) => {
    try {
        const user = req.body;

        const {error} = Joi.validate(user, validUser);

        if (error) {
            return next(new ErrorHandler(
                error.details[0].message,
                UNAUTHORIZED))
        }
        next();
    } catch (e) {
        console.log(e);
    }
}
