const sequelize = require('../db/conexion')


module.exports = class friendsModel {
    constructor(friends) {
        this.friends = friends
    }


    async friendsUserSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT img,first_name,last_name,users.id_user FROM perfilPicture RIGHT JOIN users ON perfilPicture.id_user = users.id_user WHERE users.id_user !="+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    // async friendsInsert(user,hobby){
    //     let result = await sequelize.query("INSERT INTO friends VALUES ("+user.id_user+", '"+hobby.name+"')")
    //     return result
    // }

    // async friendsDelete(user,hobby){
    //     let result = await sequelize.query("DELETE FROM friends WHERE id_hobby = "+hobby.id_hobby+" AND id_user = "+user.id_user)
    //     return result
    // }

}