const express = require('express');
const {productsRouter} = require('./routes');

const dataBase = require(`./DataBase`).getInstance();
dataBase.setModels();

const myApp = express();


myApp.use(express.json());
myApp.use(express.urlencoded());


myApp.use(`/products`, productsRouter);


myApp.listen(6969, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('PORT 6969 work');
    }
})


