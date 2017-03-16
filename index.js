var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser')

var vols = require('./routes/vols');
var auth = require('./routes/auth');
var users = require('./routes/users');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use('/api', express.static(path.join(__dirname, 'static')))

app.use('/api/auth', auth);
app.use('/api/vols', vols);
app.use('/api/users', users);


app.listen(process.env.PORT || 3000);
console.log("listening on 3000");