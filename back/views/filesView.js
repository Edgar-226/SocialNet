const fileUpload = require('express-fileupload')

module.exports = async (app) => {



    app.post('/upload', function (req, res) {
        console.log(req.files); // the uploaded file object
    });
}