const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const { urlencoded } = require('express');

//Initialization
require('./database');

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlerwares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.use(require('./routes/index'));

module.exports = app;