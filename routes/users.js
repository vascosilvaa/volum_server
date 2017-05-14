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

app.get('/:id', passport.authenticate(['jwt']), function (req, res) {
    if (isNaN(parseInt(req.params.id))) {
        res.status(400);
        res.send({ success: false, message: "Parâmetros Invalidos" });
    } else {
        getUserById(req.params.id, function (user) {
            if (!user) {
                res.status(400);
                res.send({ success: false, message: "Utilizador Não Encontrado" })

            } else {
                res.status(200);
                res.send({
                    success: true,
                    user: {
                        id_user: user.id_user,
                        login: user.login,
                        username: user.name,
                        email: user.email,
                        password: user.password,
                        photo: user.photo_url,
                        verified: user.verified
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

app.get('/:id/my-vols', function (req, res) {
    if (isNaN(parseInt(req.params.id))) {
        res.status(400);
        res.send({ success: false, message: "Parâmetros Invalidos" });
    } else {
        db.get().query('SELECT * FROM vols WHERE id_user_creator = ?', [req.params.id], function (err, results, fields) {
            if (err) {
                res.status(400);
                res.send({ success: false, message: "Parâmetros Invalidos" });
            } else {
                if (results.length > 0) {
                    let vols = [];
                    for (let i = 0; i < results.length; i++) {
                        vols.push({
                            id_vol: results[i].id_vol,
                            name: results[i].name,
                            date_begin: results[i].date_begin,
                            lat: results[i].lat,
                            long: results[i].long
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

app.get('/:id/vols', function (req, res) {
    console.log(typeof req.params.id)
    console.log(req.params.id);
    if (isNaN(parseInt(req.params.id))) {
        res.status(400).send({ success: false, message: "Parâmetros Invalidos" });
    } else {
        let options = {
            sql: "SELECT user_vol.id_vol, user_vol.confirm, vols.id_vol, vols.id_user_creator, vols.id_vol_type, vols.name, vols.desc, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time,  (SELECT COUNT(user_vol.id_vol)) AS confirmed, (SELECT COUNT(user_vol.id_vol)) AS candidates, users.photo_url, users.name" +
            " FROM vols INNER JOIN user_vol ON vols.id_vol = user_vol.id_vol INNER JOIN users ON vols.id_user_creator = users.id_user WHERE user_vol.id_user = ? GROUP BY user_vol.id_vol" +
            " LIMIT 0, 30"
        }
        db.get().query(options, [req.params.id], function (err, vols, fields) {
            if (err) {
                res.status(400);
                res.send({ success: false, message: 'Erro' });
                console.error(err);
            } else {
                if (vols.length > 0) {

                    res.send({
                        success: true,
                        vols
                    });

                } else {
                    res.send({
                        success: true,
                        body: []
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


app.post('/:id/follow', function (req, res) {
    if (isNaN(parseInt(req.params.id))) {
        res.status(400).send({ success: false, message: "Parâmetros Invalidos" });
    } else {
        console.log("user", req.body)
        db.get().query('INSERT INTO follows VALUES (NULL, ?, ?)', [req.params.id, req.body.id_user],
            function (error, results, fields) {


                db.get().query('INSERT INTO notifications VALUES (NULL, ?, ?, NULL, 2, NULL, 0)', [req.params.id, req.body.id_user],
                    function (error, results, fields) {
                        console.log(results);
                        console.log(error);
                        res.json({
                            success: true,
                            message: "Sucesso"
                        });
                    });
            });

        /*

        */
    }
});

app.get('/auth/facebook', passport.authenticate('facebook', { session: false, scope: ['user_friends', 'user_friends', 'email', 'user_photos', 'user_birthday'] }));

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/',
        session: false
    }));

