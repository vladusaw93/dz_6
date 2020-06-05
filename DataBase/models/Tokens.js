const {moduleNamesEnum:{TOKEN}} =require(`../../constants`)

module.exports = (sequelize, DataTypes) => {
    const Token = sequelize.define(`Token`,
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            accessedToken: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            refreshedToken: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tokenCreateData:{
                type: DataTypes.DATE,
                date: sequelize.fn(`now`)
            }
        },

        {
            tableName: `tokens`,
            timestamps: false,
        });
    return Token;
};
