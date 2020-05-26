const ProductService = require(`../../services/products/product.service`)
module.exports = {



    createProducts: (req, res) => {
        res.end(ProductService.AddProduct(req.body));
        console.log(req.body);
    },
    getProduct: () => {
        console.log(ProductService.getProduct());
    },
    getoneProduct: (req, res) => {
        res.end(ProductService.getOneProduct(req.params.name));
    },

    deletProduct:(req, res) =>{
        res.end(ProductService.deleteProduct(req.params));
    },

        updateProduct: (req, res) =>{
            res.end(ProductService.UpdateProduct(req.body));
        }

}
