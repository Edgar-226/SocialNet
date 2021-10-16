const hobbiesController = require('../controller/hobbiesController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/hobbies/select', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await hobbiesController.hobbiesSelect(user.data));
    });
    app.post('/hobbies/insert', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let hobby = req.body
        res.send(await hobbiesController.hobbiesInsert(user.data, hobby));
    });
    app.delete('/hobbies/delete', autentication.userAutentication, async(req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let hobby = req.body
        res.send(await hobbiesController.hobbiesDelete(user.data, hobby));
    });
}