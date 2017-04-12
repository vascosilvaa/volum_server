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

app.get('/profile/:id', passport.authenticate(['jwt']), function(req, res) {
    if (isNaN(req.params.id)) {
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
                        id: user.id,
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