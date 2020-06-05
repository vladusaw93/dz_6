const {Router} = require(`express`);
const userRouter = Router();

const {userContorller} = require(`../../controllers`)

const {
    UserMiddlowares: {
        ValidUserToCreate,
        ValidUser
    }
} = require(`../../middelwarw`);

userRouter.get(`/`, userContorller.getUsers);
userRouter.post(`/`, ValidUserToCreate, userContorller.creatUser);

userRouter.get(`/:userId`, userContorller.getUserById);
userRouter.delete(`/:userId`, ValidUser, userContorller.deleteUser);


module.exports = userRouter;
