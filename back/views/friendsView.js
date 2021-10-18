const friendsController = require('../controller/friendsController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/friends/selectUsers', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await friendsController.friendsUserSelect(user.data));
    });
    // app.post('/friends/insert', autentication.userAutentication, async (req, res) => {
    //     const token = req.headers.authorization.split(' ')[1];
    //     let user = jwt.verify(token, process.env.SECRETKEY);
    //     let friend = req.body
    //     res.send(await friendsController.friendsInsert(user.data, friend));
    // });
    // app.delete('/friends/delete', autentication.userAutentication, async(req, res) => {
    //     const token = req.headers.authorization.split(' ')[1];
    //     let user = jwt.verify(token, process.env.SECRETKEY);
    //     let friend = req.body
    //     res.send(await friendsController.friendsDelete(user.data, friend));
    // });
}