const sequelize = require('../db/conexion')


module.exports = class languagesModel {
    constructor(languages) {
        this.languages = languages
    }


    async languagesSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT id_language,name_language,language_level FROM languages RIGHT JOIN users ON languages.id_user = users.id_user WHERE users.id_user = "+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async languagesInsert(user,language){
        let result = await sequelize.query("INSERT INTO languages VALUES ("+user.id_user+", '"+language.name+"', '"+language.level+"')")
        return result
    }

    async languagesDelete(user,language){
        let result = await sequelize.query("DELETE FROM languages WHERE id_language = "+language.id_language+" AND id_user = "+user.id_user)
        return result
    }

}