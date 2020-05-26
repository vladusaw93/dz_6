const express = require('express');
const myApp = express();

const {productsRouter} = require('./routes');

myApp.use(express.json());

myApp.use(express.urlencoded());


myApp.use(`/products`, productsRouter);


myApp.listen(6499, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('PORT 6969 work');
    }
})


