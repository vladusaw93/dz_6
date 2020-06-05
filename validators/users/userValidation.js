const {regexEnum} =require(`../../constants`)
const Joi = require(`joi`);

module.exports = Joi.object().keys({
    email:Joi.string().regex(regexEnum.EMAIL).required(),
    password:Joi.string().trim().min(6).max(2500).required(),
})
