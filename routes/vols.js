var express = require('express'),
    jwt = require('express-jwt'),
    config = require('../config'),
    db = require('../db');

var app = module.exports = express.Router();


var jwtCheck = jwt({
    secret: config.secretKey
});


// app.use('/', jwtCheck);

app.get('/', function(req, res) {
    if (req.query['name']) {
        db.get().query('SELECT id_vol, Name from Vols WHERE deleted = 0 AND Name = ?', [req.query['name']], function(error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    } else {
        db.get().query('SELECT id_vol, Name from Vols WHERE deleted = 0', function(error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    };
});

app.post('/', function(req, res) {

    var name = req.body.name;
    var query = db.get().query('INSERT INTO vols SET ?', req.body, function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });

});

app.post('/delete', function(req, res) {
    var id = req.body.id;

    db.get().query('UPDATE vols SET deleted = ? WHERE id = ?', [1, id], function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });

});

app.post('/undelete', function(req, res) {
    var id = req.body.id;
    db.get().query('UPDATE vols SET deleted = ? WHERE id = ?', [0, id], function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });
});