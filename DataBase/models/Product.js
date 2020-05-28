module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(`Product`,
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
            code: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },

        {
            tableName: `products`,
            timestamps: false,
        });
    return Product;
};
