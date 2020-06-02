const DataBase = require(`../../DataBase`).getInstance();
const {moduleNamesEnum: {USER}} = require(`../../constants`);


module.exports = {
    getUsers: () => {
        const userModel = DataBase.getModels(USER);
        return userModel.findAll({});
    },

    getUserBuId: (userId) => {
        const userModel = DataBase.getModels(USER);
        return userModel.findByPk(userId);
    },

    getUserByParams: (params) => {
        const userModel = DataBase.getModels(USER);
        return userModel.findOne({
            where: params
        })
    },

    deleteUserById(userId) {
        const userModel = DataBase.getModels(USER);
    return  userModel.destroy({
            where: {
                id: userId,
            }
        })
    },

    creatUser(newUser) {
        const userModel = DataBase.getModels(USER);
        return userModel.create(newUser);
    },


}
