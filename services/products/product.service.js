const DataBase = require(`../../DataBase`).getInstance();


module.exports = {

    getProduct: async () => {
        const ProductModel = DataBase.getModels(`Product`);
        let products = await ProductModel.findAll({});
        return products;
    },

       getOneProduct: async (productId) => {
        const ProductModel = DataBase.getModels(`Product`);
        let oneProduct = ProductModel.findOne({
            Where: {productId}
        })
        return oneProduct;
    },

    AddProduct: async (product) => {
        const ProductModel = DataBase.getModels(`Product`);
        let newProduct = await ProductModel.create(product);
        return newProduct;
    },

    deleteProduct: (idOfProduct) => {
        const ProductModel = DataBase.getModels(`Product`);
        let destroyProd = ProductModel.destroy({
            where: {
                id: idOfProduct,
            }
        });
        return destroyProd;
    },

    UpdateProduct: (idOfProduct, paramsToUpdate) => {
        const {name, code} = paramsToUpdate;
        const ProductModel = DataBase.getModels(`Product`);
        let updatedProd = ProductModel.update({
                name: name,
                code: code,
            },
            {
                where: {
                    id: idOfProduct,
                }
            });
        return updatedProd;
    }
}

