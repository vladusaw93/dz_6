const {Router} = require(`express`);
const productRouter = Router();

const {ValidProduct} = require(`../../middelwarw/product`);
const {productContorller} = require(`../../controllers`)

productRouter.post(`/`, ValidProduct, productContorller.createProducts);

productRouter.get(`/`, productContorller.getProduct);

productRouter.get(`/:id`, productContorller.getoneProduct);

productRouter.delete(`/:id`, productContorller.deletProduct);

productRouter.put(`/:id`, productContorller.updateProduct);

module.exports = productRouter;
