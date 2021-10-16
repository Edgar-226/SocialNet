const sequelize = require('../db/conexion')


module.exports = class loginModel {
    constructor(login) {
        this.login = login
    }

    async singIn(user) {
        let result = await sequelize.query("INSERT INTO users  VALUES ('" + user.first_name + "', '" + user.last_name + "','"+user.city+"','"+user.country+"', '" + user.linkedln + "','" + user.age + "', '" + user.email + "','"+user.password+"')");
        console.log(result);
        if (result[0].length == 0) {
            let result = await sequelize.query("SELECT  id_user,first_name,last_name,email FROM users WHERE [email] ='" + user.email + "' AND [password] = '" + user.password + "'");
            if (result[0].length > 0) {
                return result[0][0]
            }
            else {
                return false
            }
        }
        else {
            return false
        }
    }


    async loginUser(user) {
        let result = await sequelize.query("SELECT  id_user,first_name,last_name,email FROM users WHERE [email] ='" + user.email + "' AND [password] = '" + user.password + "'");
        if (result[0].length > 0) {
            return result[0][0]
        }
        else {
            return false
        }
    }
    async loginData(user) {
        let result = await sequelize.query("SELECT first_name,last_name,city,country,linkedln,age,email FROM users WHERE id_user =" + user.id_user + " AND [email] = '" + user.email + "'");
        if (result[0].length > 0) {
            return result[0][0]
        }
        else {
            return false
        }
    }

    async listUsers (user){
        console.log(user.id_user)
        let result = await sequelize.query("SELECT id_user,first_name,last_name FROM users WHERE id_user !=" + user.id_user);
        return result
    }
}