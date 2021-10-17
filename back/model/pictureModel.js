const sequelize = require('../db/conexion')


module.exports = class pictureModel {
    constructor(picture) {
        this.picture = picture
    }


    async pictureSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT id_picture,img FROM picture RIGHT JOIN users ON picture.id_user = users.id_user WHERE users.id_user = "+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async pictureInsert(user,picture){
        let result = await sequelize.query("INSERT INTO picture VALUES ("+user.id_user+", '"+picture.img+"')")
        return result
    }

    async pictureDelete(user,picture){
        let result = await sequelize.query("DELETE FROM picture WHERE id_picture = "+picture.id_picture+" AND id_user = "+user.id_user)
        return result
    }

}