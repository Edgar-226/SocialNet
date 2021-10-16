const sequelize = require('../db/conexion')


module.exports = class hobbiesModel {
    constructor(hobbies) {
        this.hobbies = hobbies
    }


    async hobbiesSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT id_hobby,name_hobby FROM hobbies RIGHT JOIN users ON hobbies.id_user = users.id_user WHERE users.id_user = "+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async hobbiesInsert(user,hobby){
        let result = await sequelize.query("INSERT INTO hobbies VALUES ("+user.id_user+", '"+hobby.name+"')")
        return result
    }

    async hobbiesDelete(user,hobby){
        let result = await sequelize.query("DELETE FROM hobbies WHERE id_hobby = "+hobby.id_hobby+" AND id_user = "+user.id_user)
        return result
    }

}