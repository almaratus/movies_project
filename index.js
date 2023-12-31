var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(morgan('common'));

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Require the Router we defined in movies.js
var movies = require('./routes/movies.js');
var users = require('./routes/users.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);
app.use('/users', users);

app.listen(3000);
