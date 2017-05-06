var express = require('express'),
    _ = require('lodash'),
    config = require('../config'),
    jwt = require('jsonwebtoken'),
    db = require('../config/db'),
    passport = require('passport');


function getUserById(id, done) {
    db.get().query('SELECT * FROM users WHERE id_user = ? LIMIT 1', [id], function(err, rows, fields) {
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

app.get('/:id', passport.authenticate(['jwt']), function(req, res) {
    if (isNaN(parseInt(req.params.id))) {
        res.status(400);
        res.send({ success: false, message: "Parâmetros Invalidos" });
    } else {
        getUserById(req.params.id, function(user) {
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
                        verified: user.tinyint
                    }
                });
            }
        });

    }
});

app.get('/:id/my-vols', function(req, res) {
    if (isNaN(parseInt(req.params.id))) {
        res.status(400);
        res.send({ success: false, message: "Parâmetros Invalidos" });
    } else {
        db.get().query('SELECT * FROM vols WHERE id_user_creator = ?', [req.params.id], function(err, rows, fields) {
            if (err) {
                res.status(400);
                res.send({ success: false, message: "Parâmetros Invalidos" });
            } else {
                if (rows.length > 0) {

                    res.send({
                        success: true,
                        body: {
                            rows
                        }
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


app.get('/:id/vols', function(req, res) {
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
        db.get().query(options, [req.params.id], function(err, vols, fields) {
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
                        body: "Sem Registos"
                    });
                }

            }

        });
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

