var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var upload = multer(); 
var app = express();

var home = require('./ctrl/home.js');

app.set('view engine', 'ejs');
app.set('views','./view');

app.use(express.static('pub')); // to send static files

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(upload.array()); // for parsing multipart/form-data

app.use(cookieParser());

app.use('/home', home);

app.get('/', function(req, res) {
  res.redirect(301, '/home/');
});

app.listen(3000);