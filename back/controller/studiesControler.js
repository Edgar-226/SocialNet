const jwt = require('jsonwebtoken');
const studiesModel = require('../model/studiesModel');


module.exports.studiesSelect = async () => {
    let response = new studiesModel();
    let result =await response.studiesSelect()
    return result;
}