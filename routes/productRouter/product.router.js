const {Router} = require(`express`);
const productRouter = Router();

const valid_product = require(`../../middelwarw/product/check_code_product`);
const {productContorller} = require(`../../controllers/index`)

productRouter.post(`/`, valid_product, productContorller.createProducts);

productRouter.get(`/`, productContorller.getProduct);

productRouter.get(`/:name`, productContorller.getoneProduct);

productRouter.delete(`/`, productContorller.deletProduct);

productRouter.put(`/`, valid_product, productContorller.updateProduct);

module.exports = productRouter;
