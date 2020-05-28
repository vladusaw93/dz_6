const productServices = require(`../../services/products/product.service`)
module.exports = {
    getProduct: async (req, res) => {
        try {
            const allProduct = await productServices.getProduct();
            res.json(allProduct);
        } catch (e) {
            console.log(e);
        }
        res.end();
    },
    getoneProduct: async (req, res) => {
        try {
            const oneProduct = await productServices.getOneProduct(req.params.id);
            res.json(oneProduct);
        } catch (e) {
            console.log(e);
        }
        res.end();
    },

    createProducts: async (req, res) => {
        try {
            let newProd = await productServices.AddProduct(req.body);
            res.json(newProd);
        } catch (e) {
            console.log(e);
        }
        res.end();
    },
    deletProduct: async (req, res) => {
        try {
            await productServices.deleteProduct(req.params.id);
        } catch (e) {
            console.log(e);
        }
        res.end();
    },

    updateProduct: (req, res) => {
        try {
            let updatedProduct = productServices.UpdateProduct(req.params.id, req.body);
            res.json(updatedProduct);
        } catch (e) {
            console.log(e);
        }
        res.end();
    }

}
