const jwt = require('jsonwebtoken');
const studiesModel = require('../model/studiesModel');


module.exports.studiesSelect = async (user) => {
    let response = new studiesModel();
    let result =await response.studiesSelect(user)
    return result;
}
module.exports.studiesInsert = async (user,study) => {
    let response = new studiesModel();
    let result =await response.studiesInsert(user,study)
    return result;
}