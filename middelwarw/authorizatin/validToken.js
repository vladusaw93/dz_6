const jwt = require(`jsonwebtoken`);

const {
    errorsStatusEnum: {UNAUTHORIZED},
    tokenEnum: {
        JWTCREATE,
        AUTH,
        DELETED,
    }
} = require(`../../constants`)

const {
    errorHandler,
    errors: {
        INVALIDTOKEN,
        NOTOKEN,
    },
} = require(`../../errors`)

const {authorizationServices} = require(`../../services`)


module.exports = async (req, res, next) => {
    try {
        const token = req.get(AUTH);

        if (!token) {
            return next(new errorHandler(
                NOTOKEN.message,
                UNAUTHORIZED,
                NOTOKEN.code));
        }

        await jwt.verify(token, JWTCREATE, err => {
            if (err) {
                return next(new errorHandler(
                    INVALIDTOKEN.message,
                    UNAUTHORIZED,
                    INVALIDTOKEN.code));
            }
        })

        const tokenByParams = await
            authorizationServices.getTokens
            ({accessedToken: token});

        if (!tokenByParams) {
            return next(new errorHandler(
                INVALIDTOKEN.message,
                UNAUTHORIZED,
                INVALIDTOKEN.code));
        }

        res.json(DELETED)
        next();
    } catch (e) {
        console.log(e);
    }
}

