var express = require('express'),
    config = require('../config'),
    db = require('../config/db');

var app = module.exports = express.Router();


app.get('/:id/', function (req, res) {
    db.get().query({ sql: 'SELECT * FROM notifications INNER JOIN users ON notifications.id_user2 = users.id_user INNER JOIN vols ON notifications.id_vol = vols.id_vol WHERE notifications.id_user = ?', nestTables: true }, [req.params.id], function (error, results, fields) {
        let notifications = [];
        if (results) {


            for (let i = 0; i < results.length; i++) {

                notifications.push({
                    id_vol: results[i].vols.id_vol,
                    type: results[i].notifications.type,
                    vol_name: results[i].vols.name,
                    user_name: results[i].users.name,
                    photo_url: results[i].users.photo_url,
                    id_user: results[i].users.id_user2,
                    date: results[i].notifications.date
                })

            }

            res.json({
                success: true,
                notifications
            })
        }
    });
});

app.get('/:id/requests', function (req, res) {
    db.get().query({ sql: 'SELECT * FROM notifications INNER JOIN users ON notifications.id_user2 = users.id_user WHERE notifications.id_user = ?', nestTables: true }, [req.params.id], function (error, results, fields) {
        if (results) {

            let notifications = [];
            for (let i = 0; i < results.length; i++) {

                notifications.push({
                    type: results[i].notifications.type,
                    user_name: results[i].users.name,
                    photo_url: results[i].users.photo_url,
                    id_user: results[i].users.id_user2,
                    date: results[i].notifications.date
                })

            }

            res.json({
                success: true,
                notifications
            })

        }   
    });
});

app.get('/:id/not-read/count', function (req, res) {
    db.get().query('SELECT Count(id_notification) AS count FROM notifications WHERE id_user = ? AND notifications.read = ?', [req.params.id, 0], function (error, results, fields) {
        console.log(error);
        console.log(results);
        if (results) {

            count = results[0].count;
            res.json({
                success: true,
                count
            })

        } else {
            res.json({
                success: true,
                count: []
            })
        }
    });
});


