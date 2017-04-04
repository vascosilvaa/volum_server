var express = require('express'),
    _ = require('lodash'),
    config = require('../config'),
    jwt = require('jsonwebtoken'),
    db = require('../config/db');

var app = module.exports = express.Router();
var secretKey = "teste";
var bcrypt = require('bcryptjs');

const saltRounds = 10;

function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secretKey, { expiresIn: 60 * 60 * 5 });
}

function getUserDB(login, done) {
    db.get().query('SELECT * FROM users WHERE login = ? LIMIT 1', [login], function(err, rows, fields) {
        if (err) {
            console.log(err);
        } else {
            done(rows[0]);
        }
    });
}

function hashUrl(id) {
    var text = '';
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    text += id;
    return text;
}


/**
 * @api {post} /create Registar 
 * @apiName register
 * @apiGroup Autenticacao
 * @apiParam {String} login Username/login do utilizador
 * @apiParam {String} password password
 * @apiParam {String} email email
 * @apiParam {String} name name
 * @apiParam {JPEG} [photo] foto de perfil
 */

app.post('/create', function(req, res) {
    console.log(req.body)
    if (!req.body.login || !req.body.password || !req.body.email || !req.body.name) {
        return res.status(400).json({ success: false, message: "Falta enviar dados" });
    } else if (req.files && req.files.photo.mimetype != 'image/jpeg') {
        return res.status(200).send('Foto invalida');
    } else {

        getUserDB(req.body.login, function(user) {
            //SE USER NAO EXISTIR
            if (!user && req.files) {
                console.log("mandou foto")

                bcrypt.genSalt(saltRounds, function(err, salt) {
                    bcrypt.hash(req.body.password, salt, function(err, hash) {

                        user = {
                            login: req.body.login,
                            password: hash,
                            email: req.body.email,
                            type_user: 1,
                            name: req.body.name,
                            gender: 0,
                            birth_date: new Date()
                        };

                        db.get().query('INSERT INTO users SET ?', [user], function(err, result) {
                            if (err) {
                                throw new Error(err);

                                res.json({ success: false, error: err })
                            } else {
                                let url = hashUrl(result.insertId);
                                let userId = result.insertId;
                                //USER CRIADO
                                //GERAR TOKEN

                                let sampleFile = req.files.photo;



                                sampleFile.mv('./public/storage/profile_photos/' + url + '.jpg', function(err) {

                                    if (err) {
                                        return res.status(500).send(err);
                                    } else {
                                        console.log(url);
                                        console.log(userId);

                                        db.get().query('UPDATE users SET photo_url = ? WHERE id_user = ?', [url, userId], function(err, result) {
                                            if (err) {
                                                throw new Error(err);

                                            } else {
                                                newUser = {
                                                    id: userId,
                                                    login: user.login,
                                                    password: hash,
                                                    email: user.email,
                                                    type_user: 1
                                                };

                                                res.status(201).send({
                                                    message: "User criado com sucesso",
                                                    id_token: createToken(newUser)
                                                });
                                            }
                                        });
                                    }

                                });


                            }
                        });
                    });
                });
            } else if (!user && !req.files) {
                console.log("nao mandou foto")
                bcrypt.genSalt(saltRounds, function(err, salt) {
                    bcrypt.hash(req.body.password, salt, function(err, hash) {

                        user = {
                            login: req.body.login,
                            password: hash,
                            email: req.body.email,
                            type_user: 1,
                            name: req.body.name,
                            gender: 0,
                            birth_date: new Date()
                        };

                        db.get().query('INSERT INTO users SET ?', [user], function(err, result) {
                            if (err) {
                                throw new Error(err);

                                res.json({ success: false, error: err })
                            } else {

                                //USER CRIADO
                                //GERAR TOKEN

                                newUser = {
                                    id: result.insertId,
                                    login: user.login,
                                    password: hash,
                                    email: user.email,
                                    type_user: 1
                                };

                                res.status(201).send({

                                    message: "User criado com sucesso",
                                    id_token: createToken(newUser)


                                });

                            }
                        });

                    });
                });

            } else res.status(400).send("Já existe um user com esse username");
        });
    }
});


/**
 * @api {post} /login Login 
 * @apiName login
 * @apiGroup Autenticacao
 * @apiParam {String} login Username/login do utilizador
 * @apiParam {String} password password
 */

app.post('/login', function(req, res) {
    if (!req.body.login || !req.body.password) {
        return res.status(400).json({
            success: false,
            message: "Falta enviar dados"
        });
    }
    getUserDB(req.body.login, function(user) {
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "O User não existe"
            });
        }


        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (!result) {
                return res.status(401).json({
                    success: false,
                    message: "Login e Password não coincidem"
                });
            } else {
                var token = jwt.sign({ id: user.id_user }, secretKey);

                res.status(201).send({
                    success: true,
                    user_id: user.id_user,
                    id_token: "JWT " + token
                });

                console.log(res);

            }

        });

    });
});

app.get('/check/:login', function(req, res) {
    if (!req.params.login) {
        return res.status(400).json({
            success: false,
            message: "Falta o User"
        });
    }
    getUserDB(req.params.login, function(user) {
        if (!user) res.status(201).send({ login: "OK" });
        else res.status(400).json({
            success: false,
            message: "Já existe"
        });
    });
});