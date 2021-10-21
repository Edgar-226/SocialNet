const friendsController = require('../controller/friendsController');
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")



module.exports = async (app) => {
    app.get('/friends/selectUsers', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let friend = req.body
        res.send(await friendsController.friendsUserSelect(user.data,friend));
    });
    app.post('/friends/findUsers', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let friend = req.body
        res.send(await friendsController.friendsFindSelect(user.data,friend));
    });
    app.post('/friends/addfriend', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let friend = req.body
        res.send(await friendsController.friendsAdd(user.data, friend));
    });
    app.get('/friends/getRequest', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await friendsController.friendsRequest(user.data));
    });
    app.get('/friends/getRequest2', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await friendsController.friendsRequest2(user.data));
    });
    app.post('/friends/acceptRequest', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        let friend = req.body
        res.send(await friendsController.friendsAccept(user.data, friend));
    });
    app.get('/friends/selectFriends', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        
        res.send(await friendsController.friendsFriendSelect(user.data));
    });
}