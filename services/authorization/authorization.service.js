const DataBase = require(`../../DataBase`).getInstance();
const {moduleNamesEnum: {TOKEN}} = require(`../../constants`);

module.exports = {

    getTokens: (tokenParams) => {
        const tokenModel = DataBase.getModels(TOKEN);

        return tokenModel.findOne({where: tokenParams});
    },


    createTokens: (tokensToCreate) => {
        const tokenModel = DataBase.getModels(TOKEN);
        return tokenModel.create(tokensToCreate);
    },


    deleteByParams: (params) => {
        const TokenModel = DataBase.getModels(TOKEN);
        return TokenModel.destroy({where: params})
    },
}
