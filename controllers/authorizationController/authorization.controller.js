const {
    errorsStatusEnum: {UNAUTHORIZED},
    tokenEnum: {AUTH}
} = require(`../../constants`);

const {
    errorHandler,
    errors: {NOUSER}
} = require(`../../errors`)

const {tokensCreator} = require(`../../helpers`)

const {authorizationServices, userServices} = require(`../../services`);


module.exports = {

    login: async (req, res, next) => {
        try {
            const token = tokensCreator();
            await authorizationServices.createTokens({...token, userId: req.userId});

            res.json(token);
            next();

        } catch (e) {
            next(e);
        }
    },


    logout: async (req, res, next) => {

        try {
            const accessedToken = req.get(AUTH);
            await authorizationServices.deleteByParams({accessedToken});

            res.json(accessedToken);
            next();

        } catch (e) {
            console.log(e);
        }
    },

    refresh: async (req, res, next) => {
        try {
            const refreshedToken = req.get(AUTH);
            const userId = res.userId;

            const oneUser = await userServices.getUserBuId(userId);

            if (!oneUser) {
                return next(new errorHandler(
                    NOUSER.message,
                    UNAUTHORIZED,
                    NOUSER.code));
            }

            const token = tokensCreator();
            await authorizationServices.deleteByParams({refreshedToken});

            await authorizationServices.createTokens({...token, userId: res.userId});

            res.json(token)
            next();

        } catch (e) {
            next(e);
        }
    }
}
