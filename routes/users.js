var express = require('express'),
    _ = require('lodash'),
    config = require('../config'),
    jwt = require('jsonwebtoken'),
    db = require('../config/db'),
    passport = require('passport');


function getUserById(id, done) {
    db.get().query('SELECT * FROM users WHERE id_user = ? LIMIT 1', [id], function (err, rows, fields) {
        if (err) throw err;
        done(rows[0]);
    });
}

var app = module.exports = express.Router();

/**
 * @api {get} /profile/:id Retornar Perfil
 * @apiName getProfile
 * @apiParam id ID do user
 * @apiGroup Perfil
 */

var returnRouter = function (io) {


    app.get('/:id', passport.authenticate(['jwt'], ['facebook']), function (req, res) {
        if (!req.params.id) {

            res.send({
                success: false,
                user: req.user
            });
        } else {
            getUserById(req.params.id, function (user) {
                if (!user) {
                    res.status(400);
                    res.send({
                        success: false,
                        message: "Utilizador Não Encontrado"
                    })

                } else {
                    res.status(200);
                    res.send({
                        success: true,
                        user: {
                            id_user: user.id_user,
                            login: user.login,
                            username: user.name,
                            email: user.email,
                            photo: user.photo_url,
                            birth_date: user.birth_date,
                            verified: user.verified,
                            type: user.type_user
                        }
                    });
                }
            });

        }
    });


    /**
     * @api {get} /profile/:id Retornar os meus Vols
     * @apiName getMyVols
     * @apiParam id ID do user
     * @apiGroup Perfil
     */

    app.get('/:id/my-vols', passport.authenticate('jwt'), function (req, res) {
        if (!Number(req.params.id)) {
            res.status(400).send({
                success: false,
                message: "Parametros Invalidos"
            });
        } else {
            db.get().query({
                sql: 'SELECT vols.id_vol, GROUP_CONCAT(photos.url SEPARATOR "->") As photos,  vols.id_user_creator, vols.lat, vols.lng, vols.id_vol_type, vols.name, vols.description, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time ' +
                    'FROM vols INNER JOIN photos ON vols.id_vol = photos.id_vol WHERE photos.id_vol = vols.id_vol AND vols.id_user_creator = ? GROUP BY vols.id_vol ORDER BY vols.date_creation DESC ',
                nestTables: true
            }, [req.params.id], function (err, results, fields) {
                if (err) {
                    console.log(err)
                    res.send({
                        success: false,
                        err
                    });
                } else {
                    console.log(results)
                    if (results.length > 0) {
                        let vols = [];
                        for (let i = 0; i < results.length; i++) {
                            vols.push({
                                id_vol: results[i].vols.id_vol,
                                name: results[i].vols.name,
                                date_begin: results[i].vols.date_begin,
                                description: results[i].vols.description,
                                date_creation: results[i].vols.date_creation,
                                date_end: results[i].vols.date_end,
                                lat: results[i].vols.lat,
                                lng: results[i].vols.lng,
                                start_time: results[i].vols.start_time,
                                end_time: results[i].vols.end_time,
                                photos: (results[i][''].photos).split('->')
                            });
                        }

                        res.send({
                            success: true,
                            vols
                        });

                    } else {
                        res.send({
                            success: true,
                            body: "Sem Registos"
                        });
                    }

                }


            });
        }
    });


    /**
     * @api {get} /profile/:id Retornar Vols em que participei 
     * @apiName getVols
     * @apiParam id ID do user
     * @apiGroup Perfil
     */

    app.get('/:id/checkOnline', passport.authenticate('jwt'), function (req, res) {

        if (!Number(req.params.id)) {
            res.status(400).send({
                success: false,
                message: "Parametros Invalidos"
            });
        } else {
            let index = loggedUsers.findIndex(x => x.user == req.params.id);

            if (index !== -1) {
                res.send({
                    success: true,
                    state: 1
                });;
            } else {
                res.send({
                    success: true,
                    state: 0
                });;
            }
        }


    });

    app.get('/:id/vols', passport.authenticate('jwt'), function (req, res) {
        console.log(typeof req.params.id)
        console.log(req.params.id);
        if (!Number(req.params.id)) {
            res.status(400).send({
                success: false,
                message: "Parametros Invalidos"
            });
        } else {
            let options = {
                sql: "SELECT DISTINCT *, GROUP_CONCAT(photos.url SEPARATOR '->') As photos " +
                    " FROM vols INNER JOIN user_vol ON vols.id_vol = user_vol.id_vol INNER JOIN users ON vols.id_user_creator = users.id_user INNER JOIN photos ON vols.id_vol = photos.id_vol WHERE (user_vol.id_user = ? AND user_vol.confirm = 0 OR user_vol.confirm = 1)",
                nestTables: true
            }
            db.get().query(options, [req.params.id, req.params.id], function (err, results, fields) {
                if (err) {
                    res.status(400);
                    res.send({
                        success: false,
                        message: 'Erro'
                    });
                    console.error(err);
                } else {
                    console.log(results);
                    if (results.length > 0) {

                        let vols = [];
                        for (let i = 0; i < results.length; i++) {
                            vols.push({
                                vol: {
                                    id_vol: results[i].vols.id_vol,
                                    name: results[i].vols.name,
                                    description: results[i].vols.description,
                                    date_begin: results[i].vols.date_begin,
                                    date_creation: results[i].vols.date_creation,
                                    duration: results[i].vols.duration,
                                    lat: results[i].vols.lat,
                                    lng: results[i].vols.lng,
                                    photos: (results[i][''].photos).split('->')

                                },
                                user: {
                                    id_user: results[i].users.id_user,
                                    name: results[i].users.name,
                                    photo_url: results[i].users.photo_url
                                }
                            });
                        }

                        res.send({
                            success: true,
                            vols
                        });;

                    } else {
                        res.send({
                            success: true,
                            vols: []
                        });
                    }

                }

            });
        }
    });


    /**
     * @api {get} /profile/:id/follow Seguir 
     * @apiName getVols
     * @apiParam id ID do user
     * @apiParam id_user ID do user 2
     * @apiGroup Perfil
     */


    app.post('/follow', passport.authenticate('jwt'), function (req, res) {



        if (isNaN(parseInt(req.body.id_user))) {
            res.status(400).send({
                success: false,
                message: "Parametros Invalidos"
            });
        } else {

            console.log("body", req.body.id_user)
            console.log("user", req.user.id_user)

            db.get().query('INSERT INTO follows VALUES (NULL, ?, ?)', [req.user.id_user, req.body.id_user],
                function (error, results, fields) {

                    db.get().query('INSERT INTO notifications VALUES (NULL, ?, ?, NULL, 2, ?, 0)', [req.body.id_user, req.user.id_user, new Date()],
                        function (error, results, fields) {
                            console.log(results);
                            console.log(error);

                            let index = loggedUsers.findIndex(x => x.user == req.body.id_user);
                            console.log("INDEX 1", index);
                            console.log("LOOGED USERS", loggedUsers);
                            console.log("teste", loggedUsers[index]);
                            if (index !== -1) {
                                io.to(loggedUsers[index].socket).emit('request');
                                console.log("mandou notificacao");

                            }
                            res.json({
                                success: true,
                                message: "Sucesso"
                            });



                        });
                });
        }
    });

    app.post('/unfollow', passport.authenticate('jwt'), function (req, res) {
        if (isNaN(parseInt(req.body.id_user))) {
            res.status(400).send({
                success: false,
                message: "Parametros Invalidos"
            });
        } else {

            db.get().query('DELETE FROM follows WHERE id_user = ? AND id_user2 = ?', [req.user.id_user, req.body.id_user],
                function (error, results, fields) {
                    res.json({
                        success: true,
                        message: "Sucesso"
                    });

                });
        }
    });

    app.get('/:id/checkFollow', passport.authenticate('jwt'), function (req, res) {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).send({
                success: false,
                message: "Parâmetros Invalidos"
            });
        } else {
            console.log("user", req.body)

            let users = [];

            db.get().query({
                    sql: 'SELECT COUNT(*) AS count FROM follows WHERE id_user = ? AND id_user2 = ?'
                }, [req.user.id_user, req.params.id],
                function (error, count, fields) {
                    if (count[0].count == 1) {
                        res.json({
                            success: true,
                            state: 1
                        });
                    } else {
                        res.json({
                            success: true,
                            state: 0
                        });

                    }


                });
        }
    });


    app.get('/:id/follows/users', function (req, res) {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).send({
                success: false,
                message: "Parâmetros Invalidos"
            });
        } else {
            console.log("user", req.body)

            let users = [];

            db.get().query({
                    sql: 'SELECT users.id_user, users.type_user, users.name, users.photo_url FROM follows INNER JOIN users ON follows.id_user2 = users.id_user  WHERE follows.id_user = ? AND users.type_user = 2',
                    nestTables: true
                }, [req.params.id],
                function (error, results, fields) {
                    if (results) {

                        for (let i = 0; i < results.length; i++) {
                            users.push({
                                id_user: results[i].users.id_user,
                                name: results[i].users.name,
                                photo_url: results[i].users.photo_url
                            })
                        }
                        res.json({
                            success: true,
                            users
                        });

                    } else {
                        res.json({
                            success: true,
                            users
                        });
                    }

                });
        }
    });

    app.get('/:id/follows/inst', function (req, res) {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).send({
                success: false,
                message: "Parâmetros Invalidos"
            });
        } else {
            console.log("user", req.body)

            let institutions = [];

            db.get().query({
                    sql: 'SELECT users.id_user, users.type_user, users.name, users.photo_url FROM follows INNER JOIN users ON follows.id_user2 = users.id_user  WHERE follows.id_user = ? AND users.type_user = 1',
                    nestTables: true
                }, [req.params.id],
                function (error, results, fields) {
                    if (results) {

                        for (let i = 0; i < results.length; i++) {
                            institutions.push({
                                id_user: results[i].users.id_user,
                                name: results[i].users.name,
                                photo_url: results[i].users.photo_url
                            })
                        }
                        res.json({
                            success: true,
                            institutions
                        });

                    } else {
                        res.json({
                            success: true,
                            institutions
                        });
                    }

                });
        }
    });

    app.get('/:id/follows/users/count', function (req, res) {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).send({
                success: false,
                message: "Parâmetros Invalidos"
            });
        } else {
            console.log("user", req.body)

            let count;

            db.get().query({
                    sql: 'SELECT COUNT(*) AS count FROM follows INNER JOIN users ON follows.id_user2 = users.id_user WHERE follows.id_user = ? AND users.type_user = 2'
                }, [req.params.id],
                function (error, results, fields) {
                    count = results[0].count

                    res.json({
                        success: true,
                        count
                    });

                });
        }
    });

    app.get('/:id/follows/inst/count', function (req, res) {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).send({
                success: false,
                message: "Parâmetros Invalidos"
            });
        } else {
            console.log("user", req.body)

            let count;

            db.get().query({
                    sql: 'SELECT COUNT(*) AS count FROM follows INNER JOIN users ON follows.id_user2 = users.id_user WHERE follows.id_user = ? AND users.type_user = 1'
                }, [req.params.id],
                function (error, results, fields) {
                    count = results[0].count

                    res.json({
                        success: true,
                        count
                    });

                });
        }
    });



    return app;
}

module.exports = returnRouter;