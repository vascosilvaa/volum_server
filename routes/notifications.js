var express = require('express'),
    config = require('../config'),
    db = require('../config/db');
var passport = require('passport');

var app = module.exports = express.Router();


/**
 * @api {get} /vols Listar todas as notificações
 * @apiName listNotifications
 * @apiParam id ID do user
 * @apiGroup Notifications
 */
var returnRouter = function(io) {
    app.get('/', passport.authenticate('jwt'), function(req, res) {
        if (!req.query.amount && !req.query.startAt) {
            res.json({
                succes: false,
                message:
                "Falta Enviar o Amount e startAt"
            })
        } else {

            db.get().query({
                sql: `
            SELECT * FROM notifications 
            INNER JOIN users ON notifications.id_user2 = users.id_user 
            INNER JOIN vols ON notifications.id_vol = vols.id_vol
            WHERE notifications.id_user = ? 
            AND notifications.type <> 2 
            ORDER BY date DESC
            LIMIT ?, ?`
                , nestTables: true
            }, [req.user.id_user, parseInt(req.query.startAt), parseInt(req.query.amount)], function(error, results, fields) {
                console.log(error);

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
                            date: results[i].notifications.date,
                            id_vol: results[i].vols.id_vol
                        })

                    }

                    res.json({
                        success: true,
                        notifications
                    })
                }
            });

        }

    });

    app.get('/list/all', passport.authenticate('jwt'), function(req, res) {
        if (!req.query.amount && !req.query.startAt) {
            res.json({
                succes: false,
                message:
                "Falta Enviar o Amount e startAt"
            })
        } else {

            db.get().query({
                sql: `
            SELECT * FROM notifications 
            INNER JOIN users ON notifications.id_user2 = users.id_user 
            INNER JOIN vols ON notifications.id_vol = vols.id_vol
            WHERE notifications.id_user = ? 
            ORDER BY date DESC
            LIMIT ?, ?`
                , nestTables: true
            }, [req.user.id_user, parseInt(req.query.startAt), parseInt(req.query.amount)], function(error, results, fields) {
                console.log(error);

                let notifications = [];
                if (results) {

                    for (let i = 0; i < results.length; i++) {

                        notifications.push({
                            id_vol: results[i].vols.id_vol,
                            type: results[i].notifications.type,
                            vol_name: results[i].vols.name,
                            user_name: results[i].users.name,
                            photo_url: results[i].users.photo_url,
                            id_user: results[i].users.id_user,
                            date: results[i].notifications.date,
                            id_vol: results[i].vols.id_vol
                        })

                    }

                    res.json({
                        success: true,
                        notifications
                    })
                }
            });

        }

    });

    /**
     * @api {get} /notifications/:id/requests Listar todos os Pedidos
     * @apiName listRequests
     * @apiParam id ID do user
     * @apiGroup Notifications
     */


    app.get('/requests', passport.authenticate('jwt'), function(req, res) {
        if (req.query.amount && req.query.startAt) {
            db.get().query({
                sql: `
        SELECT * FROM notifications
        INNER JOIN users ON notifications.id_user2 = users.id_user
        WHERE notifications.id_user = ? 
        AND notifications.type = 2  
        ORDER BY notifications.id_notification DESC 
        LIMIT ?,?`,
                nestTables: true
            }, [req.user.id_user, parseInt(req.query.startAt), parseInt(req.query.amount)], function(error, results, fields) {
                if (results) {
                    let notifications = [];
                    for (let i = 0; i < results.length; i++) {

                        notifications.push({
                            type: results[i].notifications.type,
                            user_name: results[i].users.name,
                            photo_url: results[i].users.photo_url,
                            id_user: results[i].users.id_user,
                            date: results[i].notifications.date
                        })

                    }

                    res.json({
                        success: true,
                        notifications
                    })

                }
            });

        } else {
            res.json({
                succes: false,
                message:
                "Falta Enviar o Amount e startAt"
            })
        }




    });

    app.get('/:type', passport.authenticate('jwt'), function(req, res) {

        req.checkParams('type', 'Type tem que ser um numero').notEmpty().isInt();

        req.getValidationResult().then(function(result) {
            if (!result.isEmpty()) {
                console.log(result.array())
                res.status(400).send(result.mapped());
                return;
            } else {

                let notifications = [];


                db.get().query({
                    sql: `SELECT notifications.id_notification, notifications.date, notifications.type, notifications.id_vol, notifications.id_user, notifications.id_user2,
                     GROUP_CONCAT(photos.url SEPARATOR "->") As photos,
                     vols.id_vol, vols.name, vols.lat, vols.lng, vols.description, vols.date_begin, vols.date_end, vols.start_time, vols.end_time,
                     users.id_user, users.photo_url, users.name
                     FROM notifications
                     INNER JOIN users ON notifications.id_user2 = users.id_user
                     INNER JOIN vols ON notifications.id_vol = vols.id_vol
                     INNER JOIN photos ON photos.id_vol = notifications.id_vol
                     WHERE notifications.id_user = ? 
                     AND notifications.type = ? AND vols.active = 1
                     GROUP BY notifications.id_notification
                     ORDER BY notifications.id_notification DESC`,
                    nestTables: true
                }, [req.user.id_user, req.params.type],
                    function(error, results, fields) {
                        if (error) {
                            console.log(error);
                            res.json({
                                success: false,
                                message: error
                            });
                        } {

                            console.log(results);

                            if (results.length == 0) {
                                res.json({
                                    success: true,
                                    notifications
                                });
                            } else {

                                for (let i = 0; i < results.length; i++) {

                                    notifications.push({
                                        type: results[i].notifications.type,

                                        user: {
                                            id_user: results[i].users.id_user,
                                            name: results[i].users.name,
                                            photo_url: results[i].users.photo_url,
                                        },
                                        vol: {
                                            id_vol: results[i].vols.id_vol,
                                            name: results[i].vols.name,
                                            description: results[i].vols.description,
                                            date_begin: results[i].vols.date_begin,
                                            date_end: results[i].vols.date_end,
                                            start_time: results[i].vols.start_time,
                                            end_time: results[i].vols.end_time,
                                            lat: results[i].vols.lat,
                                            lng: results[i].vols.lng,
                                            photo: (results[i][''].photos).split('->')

                                        },
                                        date: results[i].notifications.date
                                    })

                                }
                                res.json({
                                    success: true,
                                    notifications
                                });
                            }


                        }



                    });
            }



        });
    });

    /**
     * @api {get} /notifications/:id/not-read/count Contagem das notificações não lidas
     * @apiName listNotificationCount
     * @apiParam id ID do user
     * @apiGroup Notifications
     */

    app.get('/not-read/count', passport.authenticate('jwt'), function(req, res) {
        db.get().query('SELECT Count(id_notification) AS count FROM notifications WHERE id_user = ? AND notifications.read = ? AND notifications.type <> 2', [req.user.id_user, 0], function(error, results, fields) {
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
                    count: 0
                })
            }
        });
    });

    /**
     * @api {get} /notifications/:id/requests/not-read/count Contagem dos pedidos não lidos
     * @apiName listRequestCount
     * @apiParam id ID do user
     * @apiGroup Notifications
     */

    app.get('/requests/not-read/count', passport.authenticate('jwt'), function(req, res) {
        db.get().query('SELECT Count(id_notification) AS count FROM notifications WHERE id_user = ? AND notifications.read = ? AND notifications.type = 2', [req.user.id_user, 0], function(error, results, fields) {

            if (results) {

                count = results[0].count;
                res.json({
                    success: true,
                    count
                })

            } else {
                res.json({
                    success: true,
                    count: 0
                })
            }
        });
    });


    /**
     * @api {post} /vols Contagem dos pedidos não lidos
     * @apiName listRequestCount
     * @apiParam id ID do user
     * @apiGroup Notifications
     */

    app.post('/requests/read-all', passport.authenticate('jwt'), function(req, res) {
        db.get().query('UPDATE notifications SET notifications.read = 1 WHERE id_user = ? AND type = 2', [req.user.id_user], function(error, results, fields) {

            res.json({
                success: true
            })

        });
    });

    /**
     * @api {post} /vols Contagem dos pedidos não lidos
     * @apiName listRequestCount
     * @apiParam id ID do user
     * @apiGroup Notifications
     */


    app.post('/read-all', passport.authenticate('jwt'), function(req, res) {
        db.get().query('UPDATE notifications SET notifications.read = 1 WHERE id_user = ? AND type <> 2', [req.user.id_user], function(error, results, fields) {

            res.json({
                success: true
            })

        });
    });
    return app;
}
module.exports = returnRouter;
