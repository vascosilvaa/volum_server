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
function getSimplifiedUserById(id, done) {
    db.get().query('SELECT name, photo_url, id_user FROM users WHERE id_user = ? LIMIT 1', [id], function (err, rows, fields) {
        if (err) throw err;
        done(rows[0]);
    });
}
function refreshUserScore(id, done) {
    db.get().query('SELECT AVG(classification) as score FROM classification WHERE id_user2 = ? AND type = 0', [id], function (err, rows, fields) {
        if (err) throw err;
        console.log("ROWS", rows);

        done(rows[0].score);
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




    app.get('/:id', passport.authenticate(['jwt']), function (req, res) {
        if (!req.params.id) {
            console.log("gawagaw", req.user)
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
                    console.log("USER", user)
                    res.status(200);
                    res.send({
                        success: true,
                        user: {
                            id_user: user.id_user,
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            gender: user.gender,
                            photo: user.photo_url,
                            cover_photo: user.cover_photo,
                            birth_date: user.birth_date,
                            verified: user.verified,
                            type: user.type_user,
                            about: user.about,
                            hobbies: user.hobbies,
                            other: user.other,
                            history: user.history,
                            score: user.score,
                            languages: user.languages,
                            region: user.region,
                            country: user.country,
                            facebook_id: user.facebook_link,
                        }
                    });
                }
            });

        }
    });






    app.get('/:id/simple', passport.authenticate(['jwt']), function (req, res) {
        if (!req.params.id) {
            res.send({
                success: false,
                error: "Falta Enviar o ID"
            });
        } else {
            getSimplifiedUserById(req.params.id, function (user) {
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
                            name: user.name,
                            photo: user.photo_url,
                        }
                    });
                }
            });

        }
    });

    app.put('/', passport.authenticate('jwt'), function (req, res, next) {


        let options = {
            sql: 'UPDATE users SET' +
            ' name = IFNULL( ?, name), ' +
            ' gender = IFNULL(?, gender),' +
            ' email = IFNULL(?, email),' +
            ' about = IFNULL(?, about),' +
            ' birth_date = IFNULL(?, birth_date),' +
            ' country = IFNULL(?, country),' +
            ' region = IFNULL(?, region)' +
            '  WHERE id_user = ?;'
        };
        console.log(options.sql)

        console.log(req.body);

        db.get().query(options, [req.body.name, req.body.gender, req.body.email, req.body.about, req.body.birth_date, req.body.country, req.body.region, req.user.id_user], function (error, results, fields) {
            console.log(error);
            console.log(fields);
            if (error) {
                res.send({
                    success: false,
                    message: error
                })
                throw new Error(error);
            } else {
                res.send({
                    success: true,
                    results
                })

            }
        });



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
                'FROM vols INNER JOIN photos ON vols.id_vol = photos.id_vol WHERE photos.id_vol = vols.id_vol AND vols.id_user_creator = ? AND vols.deleted = 0 GROUP BY vols.id_vol ORDER BY vols.date_creation DESC ',
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
                            vols: []
                        });
                    }

                }


            });
        }
    });

    app.get('/:id/my-vols/history', passport.authenticate('jwt'), function (req, res) {
        req.checkQuery('user_type', 'Type tem que ser um numero').notEmpty().isInt();
        req.checkParams('id', 'Type tem que ser um numero').notEmpty().isInt();

        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                console.log(result.array())
                res.status(400).send(result.mapped());
                return;
            } else {

                let options;
                //SE FOR INSTITUIÇAO
                // OS QUE CRIOU E JA ACABARAM
                if (req.query['user_type'] == 1) {


                    options = {
                        sql: `SELECT vols.id_vol, GROUP_CONCAT(photos.url SEPARATOR "->") As photos,
                 vols.id_user_creator, vols.lat, vols.lng, vols.id_vol_type, vols.name, vols.description, vols.date_creation,
                vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time
                FROM vols
                INNER JOIN photos ON vols.id_vol = photos.id_vol
                WHERE photos.id_vol = vols.id_vol AND vols.id_user_creator = ?
                AND vols.deleted = 0 AND vols.active = 0
                GROUP BY vols.id_vol
                ORDER BY vols.date_creation DESC`,
                        nestTables: true
                    }

                    // SE FOR USER
                    //OS QUE PARTICIPOU E JA ACABARAM
                } else if (req.query['user_type'] == 2) {
                    options = {
                        sql: `SELECT *, GROUP_CONCAT(photos.url SEPARATOR '->') As photos
                        FROM vols 
                        inner JOIN user_vol ON vols.id_vol = user_vol.id_vol
                       INNER JOIN photos ON vols.id_vol = photos.id_vol 
                       INNER JOIN users ON vols.id_user_creator = users.id_user
                        WHERE user_vol.id_user = ? 
                 AND user_vol.confirm = 1
                 AND vols.deleted = 0 AND vols.active = 0
                 GROUP BY vols.id_vol
                ORDER BY vols.date_creation DESC`,
                        nestTables: true
                    }
                }


                db.get().query(
                    options, [req.params.id], function (err, results, fields) {
                        if (err) {
                            console.log(err)
                            res.send({
                                success: false,
                                err
                            });
                        } else {
                            if (results.length > 0) {
                                let vols = [];
                                for (let i = 0; i < results.length; i++) {
                                    console.log(req.query.user_type)
                                    if (req.query.user_type == 2) {
                                        // SE FOR TIPO 2 INSERE O USER
                                        vols.push({
                                            vol: {
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
                                            },
                                            user: {
                                                id_user: results[i].users.id_user,
                                                name: results[i].users.name,
                                                photo_url: results[i].users.photo_url,
                                            }
                                        });

                                    } else {
                                        vols.push({
                                            vol: {
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
                                            }
                                        });

                                    }

                                }

                                res.send({
                                    success: true,
                                    vols
                                });

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
    });



    app.get('/:id/vols/all', passport.authenticate('jwt'), function (req, res) {
        req.checkParams('id', 'Type tem que ser um numero').notEmpty().isInt();

        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                console.log(result.array())
                res.status(400).send(result.mapped());
                return;
            } else {

                let options;

                options = {
                    sql: `SELECT *, GROUP_CONCAT(photos.url SEPARATOR '->') As photos
                        FROM vols 
                       INNER JOIN user_vol ON vols.id_vol = user_vol.id_vol
                       INNER JOIN photos ON vols.id_vol = photos.id_vol 
                       INNER JOIN users ON vols.id_user_creator = users.id_user
                         WHERE (user_vol.id_user = ? OR vols.id_user_creator = ?)
                       AND vols.deleted = 0
                       AND (user_vol.confirm = 1 OR user_vol.confirm IS NULL)
                       AND vols.active = 1
                       GROUP BY vols.id_vol
                       ORDER BY vols.date_creation DESC`,
                    nestTables: true
                }



                db.get().query(
                    options, [req.params.id, req.params.id], function (err, results, fields) {
                        if (err) {
                            console.log(err)
                            res.send({
                                success: false,
                                err
                            });
                        } else {
                            if (results.length > 0) {
                                let vols = [];
                                for (let i = 0; i < results.length; i++) {

                                    vols.push({
                                        vol: {
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
                                            active: results[i].vols.active,

                                            photos: (results[i][''].photos).split('->')
                                        },
                                        user: {
                                            id_user: results[i].users.id_user,
                                            name: results[i].users.name,
                                            photo_url: results[i].users.photo_url,
                                        }
                                    });




                                }

                                res.send({
                                    success: true,
                                    vols
                                });
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
    });





    app.get('/:id/vols/all/history', passport.authenticate('jwt'), function (req, res) {
        req.checkParams('id', 'ID tem que ser um numero').notEmpty().isInt();

        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                console.log(result.array())
                res.status(400).send(result.mapped());
                return;
            } else {

                let options;

                options = {
                    sql: `SELECT *, GROUP_CONCAT(photos.url SEPARATOR '->') As photos
                        FROM vols 
                       INNER JOIN user_vol ON vols.id_vol = user_vol.id_vol
                       INNER JOIN photos ON vols.id_vol = photos.id_vol 
                       INNER JOIN users ON vols.id_user_creator = users.id_user
                         WHERE (user_vol.id_user = ? OR vols.id_user_creator = ?)
                       AND vols.deleted = 0
                       AND (user_vol.confirm = 1 OR user_vol.confirm IS NULL)
                       AND vols.active = 0
                       GROUP BY vols.id_vol
                       ORDER BY vols.date_creation DESC`,
                    nestTables: true
                }



                db.get().query(
                    options, [req.params.id, req.params.id], function (err, results, fields) {
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
                                    console.log(req.query.user_type)

                                    vols.push({
                                        vol: {
                                            id_vol: results[i].vols.id_vol,
                                            name: results[i].vols.name,
                                            date_begin: results[i].vols.date_begin,
                                            description: results[i].vols.description,
                                            date_creation: results[i].vols.date_creation,
                                            date_end: results[i].vols.date_end,
                                            lat: results[i].vols.lat,
                                            active: results[i].vols.active,
                                            lng: results[i].vols.lng,
                                            start_time: results[i].vols.start_time,
                                            end_time: results[i].vols.end_time,
                                            photos: (results[i][''].photos).split('->')
                                        },
                                        user: {
                                            id_user: results[i].users.id_user,
                                            name: results[i].users.name,
                                            photo_url: results[i].users.photo_url,
                                        }
                                    });




                                }

                                res.send({
                                    success: true,
                                    vols
                                });
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
    });



    //VOLS A QUE ESTA CANDIDATO

    app.get('/vols/my-applies', passport.authenticate('jwt'), function (req, res) {
        db.get().query({
            sql: 'SELECT vols.id_vol, users.id_user, users.photo_url, users.name, GROUP_CONCAT(photos.url SEPARATOR "->") As photos,  vols.id_user_creator, vols.lat, vols.lng, vols.id_vol_type, vols.name, vols.description, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time ' +
            'FROM vols INNER JOIN photos ON vols.id_vol = photos.id_vol INNER JOIN user_vol ON user_vol.id_vol = vols.id_vol INNER JOIN users ON vols.id_user_creator = users.id_user WHERE photos.id_vol = vols.id_vol AND vols.deleted = 0 AND user_vol.id_user = ? AND user_vol.confirm = 0 GROUP BY vols.id_vol ORDER BY vols.date_creation DESC  ',
            nestTables: true
        }, [req.user.id_user], function (err, results, fields) {
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
                            photos: (results[i][''].photos).split('->'),
                            user_creator: {
                                id_user: results[i].users.id_user,
                                photo_url: results[i].users.photo_url,
                                name: results[i].users.name
                            }
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

    });

    //VOLS QUE ESTA CONFIRMADO

    app.get('/vols/confirmed', passport.authenticate('jwt'), function (req, res) {
        db.get().query({
            sql: `SELECT vols.id_vol, GROUP_CONCAT(photos.url SEPARATOR "->") As photos,
              vols.id_user_creator, vols.lat, vols.lng, vols.id_vol_type, 
              vols.name, vols.description, vols.date_creation, vols.deleted,
              vols.date_begin, vols.date_end, vols.start_time, vols.end_time,
              users.id_user, users.photo_url, users.name
              FROM vols 
              INNER JOIN photos
              ON vols.id_vol = photos.id_vol
              INNER JOIN user_vol ON user_vol.id_vol = vols.id_vol
              INNER JOIN users ON vols.id_user_creator = users.id_user
              WHERE photos.id_vol = vols.id_vol AND vols.deleted = 0 
               AND user_vol.id_user = ? AND user_vol.confirm = 1 
               GROUP BY vols.id_vol 
               ORDER BY vols.date_creation DESC `,
            nestTables: true
        }, [req.user.id_user], function (err, results, fields) {
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
                            photos: (results[i][''].photos).split('->'),
                            user_creator: {
                                id_user: results[i].users.id_user,
                                photo_url: results[i].users.photo_url,
                                name: results[i].users.name
                            }
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
                });

            } else {
                db.get().query('SELECT last_online FROM users WHERE id_user = ?', [req.params.id], function (error, results, fields) {
                    res.send({
                        success: true,
                        last_online: results[0].last_online,
                        state: 0
                    });
                });
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
                sql: `SELECT vols.id_vol, vols.name, vols.description, vols.date_begin, vols.date_creation, vols.duration, vols.lat, vols.lng,
                users.id_user, users.name, users.photo_url,
                GROUP_CONCAT(photos.url SEPARATOR '->') As photos

                FROM vols 
                LEFT JOIN user_vol ON vols.id_vol = user_vol.id_vol 
                INNER JOIN users ON vols.id_user_creator = users.id_user 
                INNER JOIN photos ON vols.id_vol = photos.id_vol
                WHERE user_vol.id_user = ? 
                AND user_vol.confirm = 1 OR user_vol.confirm = 2  AND vols.deleted = 0 AND vols.active = 1`,
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
                    console.log("RESULTS", results);
                    if (results.length > 0 && results[0].vols.id_vol != null) {

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

    app.get('/:id/vols/history', passport.authenticate('jwt'), function (req, res) {
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
                " FROM vols LEFT JOIN user_vol ON vols.id_vol = user_vol.id_vol INNER JOIN users ON vols.id_user_creator = users.id_user INNER JOIN photos ON vols.id_vol = photos.id_vol WHERE user_vol.id_user = ? AND user_vol.confirm = 1 OR user_vol.confirm = 2  AND vols.deleted = 0 AND vols.active = 0",
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
                    console.log(results.length);
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

            db.get().query('INSERT IGNORE INTO follows VALUES (NULL, ?, ?)', [req.user.id_user, req.body.id_user],
                function (error, results, fields) {
                    if (error) {
                        console.log(error)
                        res.status(400).send({
                            success: false,
                            message: "Já segues esta pessoa"
                        });
                    } else {


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
                    }
                });
        }
    });


    app.get('/followers/search', passport.authenticate('jwt'), function (req, res) {
        console.log("a");
        if (req.query['q'] == undefined || req.query['q'] == null || req.query['q'] == '') {
            res.send({ success: false, message: 'Please provide a search query' })
        } else if (typeof req.query['q'] !== 'string') {
            res.send({ success: false, message: 'Please provide a valid search query' })
        } else {

            let query = (req.query.q).replace(/['"]+/g, '');

            db.get().query('SELECT users.id_user, users.photo_url, users.name FROM users INNER JOIN follows ON users.id_user = follows.id_user2  WHERE users.name LIKE ? AND follows.id_user = ? AND users.type_user = ?; ', ['%' + query + '%', req.user.id_user, req.query.type],
                function (error, results, fields) {
                    console.log(results);
                    if (error) {
                        res.send({ success: false, message: error })
                        console.log(error);
                    } else {


                        res.send({ success: false, results })
                    }

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

    app.get('/:id/following/users', function (req, res) {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).send({
                success: false,
                message: "Parâmetros Invalidos"
            });
        } else {
            console.log("user", req.body)

            let users = [];

            db.get().query({
                sql: 'SELECT users.id_user, users.type_user, users.name, users.photo_url FROM follows INNER JOIN users ON follows.id_user2 = users.id_user  WHERE follows.id_user2 = ? AND users.type_user = 2',
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

    app.get('/:id/follows/count', function (req, res) {
        if (isNaN(parseInt(req.params.id))) {
            res.status(400).send({
                success: false,
                message: "Parâmetros Invalidos"
            });
        } else {
            console.log("user", req.body)

            let count;

            db.get().query({
                sql: 'SELECT COUNT(*) AS count FROM follows WHERE follows.id_user2 = ?'
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


    app.post('/score', passport.authenticate('jwt'), function (req, res) {
        if (!Number(req.body.id_user2) || !Number(req.body.classification) || !Number(req.body.id_vol) || !Number(req.body.type)) {
            res.status(400).send({
                success: false,
                message: "Parâmetros Invalidos"
            });
        } else {

            db.get().query({
                sql: 'INSERT INTO classification (id_user, id_user2, id_vol ,classification, message, type) VALUES ( ?, ? , ? , ?, ?, ?)',
            }, [req.user.id_user, req.body.id_user2, req.body.classification, req.body.message, req.body.type],
                function (error, results, fields) {
                    console.log(error)
                    res.json({
                        success: true,
                        classification
                    });

                    //refreshUserScore(req.body.id_user2, function (classification) {

                    console.log("CLASSIFICATION", classification)


                    //     });
                });
        }
    });

    app.get('/:id/vols/finished/count', passport.authenticate('jwt'), function (req, res) {

        if (Number(req.params.id)) {
            db.get().query(`SELECT COUNT (*) as count FROM user_vol INNER JOIN vols ON vols.id_vol = user_vol.id_vol WHERE user_vol.id_user = ? AND vols.active = 0 AND user_vol.confirm = 2`, [req.params.id], function (error, rows, fields) {
                if (error) {
                    console.log(error)
                } else {
                    res.json({
                        success: true,
                        rows
                    });

                }
            });
        } else {
            res.json({
                success: false,
                message: 'Invalid ID'
            });
        }

    });

    app.get('/:id/my-vols/count', passport.authenticate('jwt'), function (req, res) {

        let query;
        if (Number(req.params.id)) {

            if (req.query.state == 'active') {

                query = `SELECT COUNT (*) AS count FROM vols WHERE vols.id_user_creator = ? AND vols.active = 1`;

            } else if (req.query.state == 'finished') {
                query = `SELECT COUNT (*) AS count FROM vols WHERE vols.id_user_creator = ? AND vols.active = 0`;

            } else {

                query = `SELECT COUNT (*) AS count FROM vols WHERE vols.id_user_creator = ?`;

            }


            db.get().query(query, [req.params.id], function (error, rows, fields) {
                if (error) {
                    console.log(error)
                } else {
                    res.json({
                        success: true,
                        count: rows[0].count
                    });

                }
            });


        } else {
            res.json({
                success: false,
                message: 'Invalid ID'
            });
        }

    });

    app.get('/:id/education', passport.authenticate('jwt'), function (req, res) {

        req.checkParams('id', 'ID invalido').notEmpty().isInt();

        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {
                console.log(result.array())
                res.status(400).send(result.mapped());
                return;
            } else {
                db.get().query({
                    sql: 'SELECT * FROM education WHERE id_user = ?'
                }, [req.params.id],
                    function (error, education, fields) {
                        res.json({
                            success: true,
                            education
                        });

                    });
            }



        });
    });

    app.post('/education', passport.authenticate('jwt'), function (req, res) {

        req.checkBody('name', 'Nome Inválido').notEmpty().isAlphanumeric();
        req.checkBody('start_at', 'Start At Inválido').notEmpty().isInt();
        req.checkBody('end_at', 'End At Inválido. Falta tirar obrigatoriadade').isInt().notEmpty();
        req.checkBody('institution', 'Institution tem que ser uma string').notEmpty().isAlphanumeric();


        req.getValidationResult().then(function (result) {
            if (!result.isEmpty()) {

                console.log(result.array())
                res.status(400).send(result.mapped());
                return;

            } else {
                db.get().query({
                    sql: 'INSERT INTO education (id_user, name, start_at, end_at, institution)   VALUES (?,?,?,?,?)',
                }, [req.user.id_user, req.body.name, req.body.start_at, req.body.end_at, req.body.institution],
                    function (error, results, fields) {


                        if (error) {
                            res.json({
                                success: false,
                                message: error
                            });
                        }


                        res.json({
                            success: true,
                            message: "Inserido com sucesso"
                        });

                    });
            }



        });
    });



    app.get('/:id/score', passport.authenticate('jwt'), function (req, res) {

        refreshUserScore(req.params.id, function (score) {
            res.json({
                success: true,
                score
            });
        });
    });

    app.get('/:id/score/list', passport.authenticate('jwt'), function (req, res) {
        if (!req.query.amount && !req.query.startAt) {
            res.json({
                succes: false,
                message:
                "Falta Enviar o Amount e startAt"
            })
        } else {
            let results = [];

            db.get().query({
                sql: `SELECT classification.id_vol, classification.id_user, classification.classification,   vols.name, vols.id_vol, classification.message, users.name, users.id_user, users.photo_url
         FROM classification 
         INNER JOIN users ON classification.id_user = users.id_user
          INNER JOIN vols ON classification.id_vol = vols.id_vol
         WHERE classification.id_user2 = ?
         LIMIT ?, ?`, nestTables: true
            }, [req.params.id, parseInt(req.query.startAt), parseInt(req.query.amount)], function (error, rows, fields) {
                console.log(rows)
                if (error) {
                    res.send({
                        success: false,
                        message: error
                    })
                    throw new Error(error);
                } else {
                    for (let i = 0; i < rows.length; i++) {

                        results.push({
                            user: {
                                name: rows[i].users.name,
                                photo_url: rows[i].users.photo_url,
                                id_user: rows[i].users.id_user
                            },
                            message: rows[i].classification.message,
                            classification: rows[i].classification.classification,
                            vol: {
                                id_vol: rows[i].vols.id_vol,
                                name: rows[i].vols.name
                            }
                        })

                    }
                    res.send({
                        success: true,
                        results
                    })

                }
            });
        }
    });






    return app;
}

module.exports = returnRouter;