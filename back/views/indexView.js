module.exports = async (app) => {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    
    // about page
    app.get('/singIn', function(req, res) {
        res.render('pages/singIn');
    });
    app.get('/portada', function(req, res) {
        res.render('pages/portada');
    });
    
}