const {Router} = require(`express`);
const productRouter = Router();

const valid_product_to_create = require(`../../middelwarw/product/check_code_product`);
const valid_product_to_push = require(`../../middelwarw/product/valid_push_product`)
const {productContorller} = require(`../../controllers/index`)

productRouter.post(`/`, valid_product_to_create, productContorller.createProducts);
productRouter.get(`/`, productContorller.getProduct);
productRouter.get(`/one`, productContorller.getoneProduct);

productRouter.delete(`/`, productContorller.deletProduct);





productRouter.put(`/`, valid_product_to_push, productContorller.updateProduct);

module.exports = productRouter;
