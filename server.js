var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

// Require Routes js
var routesIndex = require('./routes/index');
var routesHome = require('./routes/home');
var routesTodo = require('./routes/todo');

// Serve static files
app.use(express.static(__dirname + '/public'));

// Page Routes
app.use('/', routesIndex);
app.use('/home', routesHome);
app.use('/todo', routesTodo);

// View Engine To ejs
app.set('view engine', 'ejs');

// Served Localhost
console.log('Served: http://localhost:' + port);
app.listen(port);