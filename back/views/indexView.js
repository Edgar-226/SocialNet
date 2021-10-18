module.exports = async (app) => {
    app.get('/', function (req, res) {
        res.render('pages/index');
    });
    app.get('/singIn', function (req, res) {
        res.render('pages/singIn');
    });
    app.get('/perfil', function (req, res) {
        res.render('pages/perfil');
    });

}