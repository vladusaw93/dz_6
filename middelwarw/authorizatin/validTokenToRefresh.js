const jwt = require(`jsonwebtoken`);

const {
    errorsStatusEnum: {UNAUTHORIZED},
    tokenEnum:{
        AUTH,
        DELETED,
        JWTREFRESH,
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

        await jwt.verify(token, JWTREFRESH, err => {
            if (err) {
                return next(new errorHandler(
                    INVALIDTOKEN.message,
                    UNAUTHORIZED,
                    INVALIDTOKEN.code));
            }
        })

        const tokenByParams = await
            authorizationServices.getTokens
            ({refreshedToken: token});

        if (!tokenByParams) {
            return next(new errorHandler(
                INVALIDTOKEN.message,
                UNAUTHORIZED,
                INVALIDTOKEN.code));
        }

res.userId = tokenByParams.userId;

        next();
    } catch (e) {
        console.log(e);
    }
}

