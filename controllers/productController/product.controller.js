const ProductService = require(`../../services/products/product.service`)
module.exports = {


    updateProduct: (req, res) => {
        res.end(`____put______`);
    },


    createProducts: (req, res) => {
        res.end(ProductService.AddProduct(req.body));
        console.log(req.body);
    },
    getProduct: () => {
        console.log(ProductService.getProduct());
    },
    getoneProduct: (req, res) => {
        ProductService.getOneProduct(req.body);
    },

    deletProduct:(req, res) =>{
        ProductService.deleteProduct(req.body);
    }

}
