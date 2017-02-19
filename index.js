var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'volum'
});

var app = express();


app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

app.get('/vols', function(req, res) {

    connection.query('SELECT ID, Name from VOLS WHERE deleted = 0', function(error, results, fields) {
        if (error) throw error;
        res.send(results);

    });
})

app.post('/vols', function(req, res) {
    var name = req.body.name;


    var query = connection.query('INSERT INTO vols SET ?', req.body, function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });

});
app.post('/vols/delete', function(req, res) {
    var id = req.body.id;

    connection.query('UPDATE vols SET deleted = ? WHERE id = ?', [1, id], function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });
});

app.post('/vols/undelete', function(req, res) {
    var id = req.body.id;
    connection.query('UPDATE vols SET deleted = ? WHERE id = ?', [0, id], function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });
});

app.listen(3000);
console.log("listening on 3000")