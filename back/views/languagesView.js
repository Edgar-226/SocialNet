const languagesController = require('../controller/languagesController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/languages/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await languagesController.languagesSelect(user.data));
    });
    app.post('/languages/insert', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let language = req.body
        res.send(await languagesController.languagesInsert(user.data, language));
    });
    app.delete('/languages/delete', autentication.userAutentication, async(req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let language = req.body
        res.send(await languagesController.languagesDelete(user.data, language));
    });
}