const Joi = require(`joi`);

module.exports = Joi.object().keys({
    accessedToken:Joi.string().required()
})
