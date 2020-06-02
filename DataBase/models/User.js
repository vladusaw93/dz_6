module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(`Users`,
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },

        },

        {
            tableName: `users`,
            timestamps: false,
        });
    return User;
};
