

module.exports = async (app) => {
    app.get('/inputFile', function (req, res) {
        img = req.body.img
        res.render('images/'+img+".jpg");
    });


    app.post('/upload', function (req, res) {
        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        var startup_image = req.files.foo;
        var fileName = req.body.fileName;
        // Use the mv() method to place the file somewhere on your server
        startup_image.mv(__dirname + '../../../public/doc/' + fileName + '.pdf', function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log("uploaded");
                res.send('')
            }
        });
    });
}