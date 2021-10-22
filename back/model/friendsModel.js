const sequelize = require('../db/conexion')


module.exports = class friendsModel {
    constructor(friends) {
        this.friends = friends
    }


    async friendsUserSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT img,first_name,last_name,users.id_user FROM perfilPicture RIGHT JOIN users ON perfilPicture.id_user = users.id_user WHERE users.id_user !=" + user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }
    async friendsFindSelect(user, friend) {
        console.log(user)
        let result = await sequelize.query("SELECT img,first_name,last_name,users.id_user FROM perfilPicture RIGHT JOIN users ON perfilPicture.id_user = users.id_user WHERE users.id_user !=" + user.id_user + " AND users.id_user = " + friend.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async friendsAdd(user, friend) {
        let result = await sequelize.query("SELECT id_friend, request_status FROM friend_request RIGHT JOIN users ON friend_request.id_user = users.id_user WHERE friend_request.id_user = " + user.id_user + " AND friend_request.id_friend = " + friend.id_friend)
        if (result[0].length > 0) {
            return false
        }
        else {
            let result = await sequelize.query("INSERT INTO friend_request VALUES (" + user.id_user + ", " + friend.id_friend + "," + friend.request_status + ")")
            return result
        }
    }

    async friendsRequest(user) {
        let result = await sequelize.query("SELECT id_friend, request_status FROM friend_request RIGHT JOIN users ON friend_request.id_user = users.id_user WHERE users.id_user =" + user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }
    async friendsRequest2(user) {
        console.log(user)
        let result = await sequelize.query("SELECT friend_request.id_user,request_status FROM friend_request RIGHT JOIN users ON friend_request.id_friend = users.id_user WHERE friend_request.id_friend =" + user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async friendsAccept(user, friend) {
        let result = await sequelize.query("Update friend_request SET request_status =" + friend.request_status + " WHERE id_user = " +  friend.id_friend + " AND id_friend =" +user.id_user)
        if (result) {
            let result = await sequelize.query("INSERT INTO friends values (" + user.id_user + "," + friend.id_friend + "),(" + friend.id_friend + "," + user.id_user + ")")
            return result
        }
    }


    async friendsFriendSelect(user) {
        let result = await sequelize.query("SELECT id_friend FROM friends WHERE id_user =" + user.id_user)
        return result
    }

}
