var logger = require('morgan');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var app = express();


///////////////////
// Express setup //
///////////////////

// Routes
var routes = require('./routes/routes'); // Client page route

// Middlewares
app.use(favicon(path.join(__dirname + '/public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Public folder setup
app.use(express.static(path.join(__dirname, 'public')));

// Attach views/route
app.use('/', routes); // Client page view

module.exports = app;
