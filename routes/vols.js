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


    var comments = [];
    let user = {};
    let vol = {};
    if (req.query['name']) {

        db.get().query('SELECT * from vols INNER JOIN users ON vols.id_user_creator = users.id_user INNER JOIN place ON vols.id_place = place.id_place WHERE vols.deleted = 0 AND vols.name = ?  ', [req.query['name']], function(error, results, fields) {
            if (error) {
                res.send({ success: false, message: error })
                console.log(error);
            } else {
                if (results.length == 0) {
                    res.status(404);
                    res.send({ success: true, message: "No records found" })
                } else {

                    for (let i = 0; i < results.length; i++) {
                        db.get().query('SELECT comments.id_user, comments.id_comment, users.name, users.id_user, comments.id_vol, comments.message, users.photo_url FROM `comments` INNER JOIN users ON comments.id_user = users.id_user WHERE comments.id_vol = ?', [results[i].id_vol], function(error, comment_res, fields) {
                            console.log(comment_res);
                            comments.push({
                                user: {
                                    id: comment_res[0].id_user,
                                    name: comment_res[0].name,
                                    photo_url: comment_res[0].photo_url
                                },
                                comment: {
                                    message: comment_res[0].message,
                                    comment_id: comment_res[0].id_comment
                                }
                            });

                            vol = {
                                    id_vol: results[i].id_vol,
                                    place: results[i].address,
                                    name: results[i].name,
                                    desc: results[i].desc,
                                    date_begin: results[i].date_begin,
                                    duration: results[i].duration,
                                    active: results[i].active,
                                    insurance: results[i].insurance,
                                    long: results[i].long,
                                    lat: results[i].lat,
                                    user: user,

                                },
                                user = {
                                    login: results[i].login,
                                    photo_url: results[i].photo_url
                                }

                            if (i == results.length - 1) {

                                res.json({
                                    success: true,
                                    body: {
                                        vols: vol,
                                        creator: user,
                                        comments: comments
                                    }
                                })
                            }

                        });
                    }


                }
            }
        });

    } else {

        var options = {
            sql: 'SELECT * FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user INNER JOIN place ON vols.id_place = place.id_place WHERE vols.deleted = 0;',
            nestTables: true
        };

        db.get().query(options,
            function(error, results, fields) {
                let comments = [];
                if (error) {
                    res.send({ success: false, message: error })
                    console.log(error);
                } else {

                    console.log("RESULTS", results);
                    if (results.length == 0) {
                        res.status(404);
                        res.send({ success: true, message: "No records found" })
                    } else {

                        res.json({
                            success: true,
                            vols: results,

                        })
                    }
                }

            });
    }
});

app.post('/', jwtCheck, function(req, res) {

    var name = req.body.name;
    if (!req.body.name || !req.body.desc) {
        return res.status(400).send("Falta enviar dados");
    }

    var query = db.get().query('INSERT INTO vols SET ?', req.body, function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });

});

app.post('/:id/comments', function(req, res) {

    if (req.body.id_user || req.body.message) {

        console.log(req.body)
        let body = {
            id_user: req.body.id_user,
            message: req.body.message,
            id_vol: req.params.id
        }

        db.get().query('INSERT INTO comments SET ?', [body],
            function(error, results, fields) {
                console.log(error);
                if (!error) {
                    res.json({
                        success: true,
                    })
                } else {
                    res.status(500);
                    res.json({
                        success: false,
                        message: "Internal Server Error"
                    })
                }
            });
    } else {
        console.log(req.body);
        res.json({
            success: false,
            message: "Falta enviar dados"
        })
    }
});

app.get('/:id/comments', function(req, res) {

    db.get().query('SELECT * FROM comments where id_vol = ?', [req.params.id], function(error, results, fields) {
        if (error) {
            res.json({
                success: false
            });
            throw error;
        } else {

            res.json({
                success: true,
                message: results
            });

        }

    });
});

app.post('/delete', jwtCheck, function(req, res) {
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