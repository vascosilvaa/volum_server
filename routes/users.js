var express = require('express'),
    _ = require('lodash'),
    config = require('../config'),
    jwt = require('jsonwebtoken')
db = require('../db');


function getUserById(id, done) {
    db.get().query('SELECT * FROM users WHERE idusers = ? LIMIT 1', [id], function(err, rows, fields) {
        if (err) throw err;
        done(rows[0]);
    });
}


var app = module.exports = express.Router();

app.get('/profile/:id', function(req, res) {
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
                        username: user.username,
                        email: user.email

                    }
                });
            }
        });

    }



});