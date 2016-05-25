var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 8080;

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', '/images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Require Routes js
var routesIndex = require('./routes/index');
var routesHome = require('./routes/home');
var routesTodo = require('./routes/todo');
var routesDiscussion = require('./routes/discussion');
var routesCounter = require('./routes/counter');
var routesApi = require('./routes/api');

// Serve static files
app.use(express.static(__dirname + '/public'));

// Page Routes
app.use('/', routesIndex);
app.use('/home', routesHome);
app.use('/todo', routesTodo);
app.use('/discussion', routesDiscussion);
app.use('/counter', routesCounter);
app.use('/api', routesApi);

// View Engine To ejs
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// Served Localhost
console.log('Served: http://localhost:' + port);
app.listen(port);