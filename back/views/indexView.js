module.exports = async (app) => {
    app.get('/', function(req, res) {
        res.render('pages/index');
    });
    
    // about page
    app.get('/about', function(req, res) {
        res.render('pages/about');
    });
    
}