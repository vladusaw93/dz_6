const {Router} = require(`express`);
const AuthorizationRouter = Router();

const {AuthorizationController} = require(`../../controllers`);

const {
    authMidlovare: {
        validToken,
        validLoginning,
        validTokenToRefresh,
    }
} = require(`../../middelwarw`);


AuthorizationRouter.post(`/login`, validLoginning, AuthorizationController.login);
AuthorizationRouter.post(`/logout`, validToken, AuthorizationController.logout);
AuthorizationRouter.post(`/refresh`, validTokenToRefresh, AuthorizationController.refresh);


module.exports = AuthorizationRouter;
