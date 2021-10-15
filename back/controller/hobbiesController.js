const hobbiesModel = require('../model/hobbiesModel');

module.exports.hobbiesSelect = async (user) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesSelect(user)
    return result;
}
module.exports.hobbiesInsert = async (user,study) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesInsert(user,study)
    return result;
}
module.exports.hobbiesDelete = async (user,study) => {
    let response = new hobbiesModel();
    let result =await response.hobbiesDelete(user,study)
    return result;
}