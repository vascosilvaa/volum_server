var express = require('express'),
    _ = require('lodash'),
    config = require('../config'),
    jwt = require('jsonwebtoken')
db = require('../db');
var app = module.exports = express.Router();
var secretKey = "don't share this key";

var bcrypt = require('bcrypt');
const saltRounds = 10;


function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secretKey, { expiresIn: 60 * 60 * 5 });
}

function getUserDB(username, done) {
    db.get().query('SELECT * FROM users WHERE username = ? LIMIT 1', [username], function(err, rows, fields) {
        if (err) throw err;
        done(rows[0]);
    });
}
app.post('/create', function(req, res) {
    if (!req.body.username || !req.body.password || !req.body.email) {
        return res.status(400).send("Falta enviar dados");
    }
    getUserDB(req.body.username, function(user) {
        if (!user) {

            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    console.log(hash);

                    user = {
                        username: req.body.username,
                        password: hash,
                        email: req.body.email
                    };

                    db.get().query('INSERT INTO users SET ?', [user], function(err, result) {
                        if (err) throw err;
                        newUser = {
                            id: result.insertId,
                            username: user.username,
                            password: hash,
                            email: user.email
                        };
                        res.status(201).send({
                            message: "User criado com sucesso",
                            id_token: createToken(newUser)
                        });
                    });

                });

            });

        } else res.status(400).send("Já existe um user com esse nome");
    });
});

app.post('/login', function(req, res) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send("Falta enviar dados");
    }
    getUserDB(req.body.username, function(user) {
        if (!user) {
            return res.status(401).send("O User não existe");
        }


        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (!result) {
                return res.status(401).send("O Username e password não coincidem");
                console.log(res);
            } else {
                res.status(201).send({
                    id_token: createToken(user)
                });

                console.log(res);

            }

        });


    });
});
app.get('/check/:username', function(req, res) {
    if (!req.params.username) {
        return res.status(400).send("You must send a username");
    }
    getUserDB(req.params.username, function(user) {
        if (!user) res.status(201).send({ username: "OK" });
        else res.status(400).send("A user with that username already exists");
    });
});