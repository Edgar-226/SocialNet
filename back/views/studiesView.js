const studiesController = require('../controller/studiesController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/studies/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await studiesController.studiesSelect(user.data));
    });
}