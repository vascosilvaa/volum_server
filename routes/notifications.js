var express = require('express'),
    config = require('../config'),
    db = require('../config/db');

var app = module.exports = express.Router();


app.get('/:id', function (req, res) {
    db.get().query('SELECT * FROM notifications WHERE id_user = ?', [req.params.id], function (error, results, fields) {
        console.log(results);
        notifications = results;
        res.json({
            success: true,
            notifications
        })
    });
});

app.get('/:id/not-read/count', function (req, res) {
    db.get().query('SELECT Count(id_notification) AS count FROM notifications WHERE id_user = ? AND notifications.read = ?', [req.params.id, 0], function (error, results, fields) {
        console.log(error);
        console.log(results);
        count = results[0].count;
        res.json({
            success: true,
            count
        })
    });
});


