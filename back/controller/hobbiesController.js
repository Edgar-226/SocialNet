const hobbiesModel = require('../model/hobbiesModel');

module.exports.hobbiesSelect = async (user) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesSelect(user)
    return result;
}
module.exports.hobbiesInsert = async (user,hobby) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesInsert(user,hobby)
    return result;
}
module.exports.hobbiesDelete = async (user,hobby) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesDelete(user,hobby)
    return result;
}