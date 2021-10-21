const jwt = require('jsonwebtoken');
const loginModel = require('../model/loginModel');


module.exports.singIn = async (user) => {
    let login = new loginModel();
    let data = await login.singIn(user)
    if (data) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return "Regristro fallido Try again"
    }
}

module.exports.loginUser = async (user) => {
    let login = new loginModel();
    let data = await login.loginUser(user)
    if (data) {
        token = jwt.sign({ data }, process.env.SECRETKEY);
        return token;
    }
    else {
        return false
    }
}

module.exports.loginData = async (user) => {
    let login = new loginModel();
    let data = await login.loginData(user)
    return data;
}

module.exports.listUsers = async (user) => {
    
    let response = new loginModel();
    let result =await response.listUsers(user)
    return result;
}