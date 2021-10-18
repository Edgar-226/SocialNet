const friendsModel = require('../model/friendsModel');

module.exports.friendsUserSelect = async (user) => {
    let response = new friendsModel();
    let result =await response.friendsUserSelect(user)
    return result;
}
module.exports.friendsInsert = async (user,friend) => {
    let response = new friendsModel();
    let result =await response.friendsInsert(user,friend)
    return result;
}
module.exports.friendsDelete = async (user,friend) => {
    let response = new friendsModel();
    let result =await response.friendsDelete(user,friend)
    return result;
}