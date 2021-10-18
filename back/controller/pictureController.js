const pictureModel = require('../model/pictureModel');

module.exports.pictureSelect = async (user) => {
    let response = new pictureModel();
    let result =await response.pictureSelect(user)
    return result;
}
module.exports.pictureInsert = async (user,picture) => {
    let response = new pictureModel();
    let result =await response.pictureInsert(user,picture)
    return result;
}
module.exports.pictureUpdate = async (user,picture) => {
    let response = new pictureModel();
    let result =await response.pictureUpdate(user,picture)
    return result;
}
module.exports.pictureDelete = async (user,picture) => {
    let response = new pictureModel();
    let result =await response.pictureDelete(user,picture)
    return result;
}