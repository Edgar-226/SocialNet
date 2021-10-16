const languagesModel = require('../model/languagesModel');

module.exports.languagesSelect = async (user) => {
    let response = new languagesModel();
    let result =await response.languagesSelect(user)
    return result;
}
module.exports.languagesInsert = async (user,language) => {
    let response = new languagesModel();
    let result =await response.languagesInsert(user,language)
    return result;
}
module.exports.languagesDelete = async (user,language) => {
    let response = new languagesModel();
    let result =await response.languagesDelete(user,language)
    return result;
}