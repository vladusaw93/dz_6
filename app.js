const express = require('express');
const {productsRouter, usersRouter, authorizationRouter} = require('./routes');

const dataBase = require(`./DataBase`).getInstance();
dataBase.setModels();

const myApp = express();


myApp.use(express.json());
myApp.use(express.urlencoded());

myApp.use(`/products`, productsRouter);
myApp.use(`/users`, usersRouter);
myApp.use(`/authorization`, authorizationRouter);



myApp.use('*', (err, req, res, next) => {
    res
        .status(err.status || 400)
        .json({
            message: err.message || `page no found`,
            code: err.customCode
        })
})


myApp.listen(6969, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('PORT 6969 work');
    }
})


