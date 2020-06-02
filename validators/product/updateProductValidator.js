const Joi = require(`joi`);

module.exports = Joi.object().keys({
    name:Joi.string().trim().min(3).max(25),
    title:Joi.string().trim().min(10).max(255),
    kupon:Joi.string().trim().min(6).max(25),
    price:Joi.number().integer().min(1).max(250),
    code:Joi.number().integer().min(1).max(1000000),
})
