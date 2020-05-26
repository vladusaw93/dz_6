products = [
    {name: `moloko`, StrihCode: 1111},
    {name: `AceCream`, StrihCode: 2222},
    {name: `Kinder`, StrihCode: 3333},
    {name: `kovbasa`, StrihCode: 4444},
];

class ProductService {
    AddProduct(product) {
        products.push(product);
    }

    getProduct() {
        return products;
    }

    getOneProduct(nameOfProduct) {
        console.log(nameOfProduct);
        const productIndex = products.findIndex(productone => productone.name === nameOfProduct);

        if (productIndex > -1) {
            console.log(products[productIndex]);
        } else {
            console.log(`no product`)
        }
    }

    deleteProduct(product) {
        const {name} = product;
        const productIndex = products.findIndex(productOne => productOne.name === name);

        if (productIndex > -1) {
            products.splice(productIndex, 1);
        }
    }

    UpdateProduct(updateProduct) {
        console.log(updateProduct);

        let arr = products.map(product => {
            if (product.name === updateProduct.name) {
                return updateProduct;
            } else {
                return product;
            }
        })
        products =arr;
        console.log(arr);
    }
}

module.exports = new ProductService;
