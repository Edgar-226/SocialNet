const languagesModel = require('../model/languagesModel');

module.exports.languagesSelect = async (user) => {
    let response = new languagesModel();
    let result =await response.languagesSelect(user)
    return result;
}
module.exports.languagesInsert = async (user,study) => {
    let response = new languagesModel();
    let result =await response.languagesInsert(user,study)
    return result;
}
module.exports.languagesDelete = async (user,study) => {
    let response = new languagesModel();
    let result =await response.languagesDelete(user,study)
    return result;
}