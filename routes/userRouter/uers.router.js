const {Router} = require(`express`);
const userRouter = Router();

const {userContorller}= require(`../../controllers`)
const {UserMiddlowares:{ValidUser}} = require(`../../middelwarw`);

userRouter.get(`/` , userContorller.getUsers);
userRouter.post(`/`, ValidUser, userContorller.creatUser);

userRouter.get(`/:userId` , userContorller.getUserById);
userRouter.delete(`/:userId`, userContorller.deleteUser);
userRouter.post(`/auth`, userContorller.userLogin);


module.exports = userRouter;
