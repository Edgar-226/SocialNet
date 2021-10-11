const loginController = require('../controller/loginController');
const validation = require('../middleware/validation')
const autentication = require('../middleware/autentication');
const jwt = require("jsonwebtoken")

module.exports = async (app) => {

    app.post('/login/singIn', async (req,res) =>{
        let user = req.body;
        res.send(await loginController.singIn(user));
    });

    app.post('/login', validation.loginValidation, async (req, res) => {
        let user = req.body;
        let token = await loginController.loginUser(user)
        if (token == false) {
            res.status(500).json({ error: 'Usuario no encontrado' })
        } else {
            res.send(token);
        }
    });
    app.get('/login/data', autentication.userAutentication, async (req, res) => {
        const token = req.headers.authorization.split(' ')[1];
        let user = jwt.verify(token, process.env.SECRETKEY);
        res.send(await loginController.loginData(user.data));
    });

    app.get('/login/select', autentication.userAutentication, async (req, res) => {
        res.send(await loginController.listUsers())
    });

}