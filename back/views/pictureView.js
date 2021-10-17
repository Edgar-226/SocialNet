const pictureController = require('../controller/pictureController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/picture/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await pictureController.pictureSelect(user.data));
    });
    app.post('/picture/insert', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let picture = req.body
        res.send(await pictureController.pictureInsert(user.data, picture));
    });
    app.delete('/picture/delete', autentication.userAutentication, async(req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let picture = req.body
        res.send(await pictureController.pictureDelete(user.data, picture));
    });
}