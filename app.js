const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./back/db/conexion');
const frontView = require('./back/views/indexView');
const loginView = require('./back/views/loginView');
const studiesView = require('./back/views/studiesView');
const languagesView = require('./back/views/languagesView');
const hobbiesView = require('./back/views/hobbiesView');
const app = express();


app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

async function serverStart() {
    try {
        await sequelize.authenticate();
        console.log('Conección estabilizada correctamente')
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.error('No se pudo conectar correctamemte con la Base de datos:', error);
    }
}

serverStart();

frontView(app);
loginView(app);
studiesView(app);
languagesView(app);
hobbiesView(app);