const {Router} = require(`express`);
const productRouter = Router();

const {ProductMiddlowares:{ValidProduct, checkProductToUpdate}} = require(`../../middelwarw`);
const {productContorller} = require(`../../controllers`)

productRouter.get(`/`, productContorller.getProduct);
productRouter.post(`/`, ValidProduct, productContorller.createProducts);


productRouter.get(`/:productId`, productContorller.getoneProduct);
productRouter.delete(`/:productId`, productContorller.deletProduct);
productRouter.put(`/:productId` ,checkProductToUpdate, productContorller.updateProduct);

module.exports = productRouter;
