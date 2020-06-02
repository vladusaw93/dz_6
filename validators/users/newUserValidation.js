const {regexEnum} =require(`../../constants`)
const Joi = require(`joi`);

module.exports = Joi.object().keys({
    name:Joi.string().trim().min(3).max(25).required(),
    email:Joi.string().regex(regexEnum.EMAIL).required(),
    password:Joi.string().trim().min(6).max(2500).required(),
    age:Joi.number().integer().min(1).max(100).required(),
})
