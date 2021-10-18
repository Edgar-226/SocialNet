const friendsModel = require('../model/friendsModel');

module.exports.friendsUserSelect = async (user) => {
    let response = new friendsModel();
    let result =await response.friendsUserSelect(user)
    return result;
}
module.exports.friendsFindSelect = async (user, friend) => {
    let response = new friendsModel();
    let result =await response.friendsFindSelect(user, friend)
    return result;
}
module.exports.friendsAdd = async (user,friend) => {
    let response = new friendsModel();
    let result =await response.friendsAdd(user,friend)
    return result;
}

module.exports.friendsRequest = async (user) => {
    let response = new friendsModel();
    let result =await response.friendsRequest(user)
    return result;
}
module.exports.friendsRequest2 = async (user) => {
    let response = new friendsModel();
    let result =await response.friendsRequest2(user)
    return result;
}
module.exports.friendsAccept = async (user,friend) => {
    let response = new friendsModel();
    let result =await response.friendsAccept(user,friend)
    return result;
}

module.exports.friendsFriendSelect = async (user) => {
    let response = new friendsModel();
    let result =await response.friendsFriendSelect(user)
    return result;
}


