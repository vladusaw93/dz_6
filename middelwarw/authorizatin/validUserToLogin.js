const Joi = require(`joi`);

const {errorsStatusEnum: {UNAUTHORIZED}} = require(`../../constants`)

const {
    ErrorHandler,
    errors: {
        INVALIDTOKEN,
        NOUSER,
        INVALIDPASS,
    },
} = require(`../../errors`);

const {checkHasher} = require(`../../helpers`);
const {userServices} = require(`../../services`)
const {userValidators: {validUserToLogin}} = require(`../../validators`)


module.exports = async (req, res, next) => {
    try {

        const user = req.body;

        const {error} = Joi.validate(user, validUserToLogin);

        if (error) {
            return next(new ErrorHandler(
                INVALIDTOKEN.message,
                UNAUTHORIZED,
                INVALIDTOKEN.code));
        }

        const {email, password} = req.body;

        const userByParams = await userServices.getUserByParams({email});

        if (!userByParams) {
            return next(new ErrorHandler(
                NOUSER.message,
                UNAUTHORIZED,
                NOUSER.code));
        }

        const valid = await checkHasher(userByParams.password, password);

        if (!valid) {
            return next(new ErrorHandler(
                INVALIDPASS.message,
                UNAUTHORIZED,
                INVALIDPASS.code));
        }

        req.userId = userByParams.id;
        next();

    } catch (e) {
        console.log(e);
    }
}
