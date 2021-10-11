const Joi = require('joi');

module.exports = {
    loginModel: Joi.object().keys({
        email: Joi.string().min(3).required().email(),
        password:Joi.string().min(5).max(50).required()
    }).with('email','password')
}