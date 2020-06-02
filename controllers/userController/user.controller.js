const {userServices} = require(`../../services`);
const {hasher, checkHasher} = require(`../../helpers`);
const {errorHandler} = require(`../../errors`);
const {errors: {NOTEXIST}} = require(`../../constants`);


module.exports = {
    getUsers: async (req, res) => {
        const allUsers = await userServices.getUsers();
        res
            .json(allUsers)
            .end();
    },

    getUserById: async (req, res, next) => {
        const {userId} = req.params;
        const oneUser = await userServices.getUserBuId(userId);

        if (!oneUser) {
            return next(new errorHandler(INVALIDUSERID, 404, 40004));
        }

        res
            .json(oneUser)
            .end();

    },

    deleteUser: async (req, res, next) => {
        const {userId} = req.params;
        const user = await userServices.getUserBuId(userId);

        if (!user) {
            return next(new errorHandler(INVALIDUSERID, 404, 4001));
        }

        await userServices.deleteUserById(userId);
        res.end();
    },

    creatUser: async (req, res) => {
        const newUser = req.body;

        newUser.password = await hasher(newUser.password);

        await userServices.creatUser(newUser);
        res
            .json(newUser)
            .end();
    },

    userLogin: async (req, res, next) => {

        const {email, password} = req.body;

        const user = await userServices.getUserByParams({email});

        if (!user) {
            return next(new errorHandler(NOTEXIST, 404, 4001));

        }

        await hasher(user.password, password);

        res
            .json(user)
            .end();
    }
}
