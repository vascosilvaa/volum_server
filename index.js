var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser')

var vols = require('./routes/vols');
var auth = require('./routes/auth');
var users = require('./routes/users');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/auth', auth);
app.use('/vols', vols);
app.use('/users', users);


app.listen(process.env.PORT || 3000);
console.log("listening on 3000");