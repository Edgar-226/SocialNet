const sequelize = require('../db/conexion')


module.exports = class studiesModel {
    constructor(studies) {
        this.studies = studies
    }


    async studiesSelect(user) {
        console.log(user)
        let result = await sequelize.query("SELECT first_name, place, title FROM studies RIGHT JOIN users ON studies.id_user = users.id_user WHERE users.id_user = "+user.id_user);
        if (result[0].length > 0) {
            return result[0]
        }
        else {
            return false
        }
    }

    async studiesInsert(user,study){
        let result = await sequelize.query("INSERT INTO studies VALUES ("+user.id_user+", '"+study.place+"', '"+study.title+"')")
        return result
    }
}