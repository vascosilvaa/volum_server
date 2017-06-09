var express = require('express'),
    _ = require('lodash'),
    config = require('../config'),
    jwt = require('jsonwebtoken'),
    db = require('../config/db');
var passport = require('passport');
const url = require('url');

var app = module.exports = express.Router();
var secretKey = config.secretKey;
var bcrypt = require('bcryptjs');

const saltRounds = 10;

const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
        user: 'pedroaraujo@ua.pt',
        pass: '!Me170796'
    }
});


function createToken(user) {
    return jwt.sign(_.omit(user, 'password'), config.secretKey, {
        expiresIn: 60 * 60 * 5
    });
}

function getUserDB(email, done) {
    db.get().query('SELECT * FROM users WHERE email = ? LIMIT 1', [email], function (err, rows, fields) {
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
 * @api {post} /register Registar 
 * @apiName register
 * @apiGroup Autenticacao
 * @apiParam {String} login Username/login do utilizador
 * @apiParam {String} password password
 * @apiParam {String} email email
 * @apiParam {String} name name
 * @apiParam {JPEG} [photo] foto de perfil
 */

app.post('/register', function (req, res) {
    console.log(req.body)
    if (!req.body.password || !req.body.email || !req.body.name || !req.body.type) {
        return res.status(400).json({
            success: false,
            message: "Falta enviar dados"
        });
    } else {
        getUserDB(req.body.email, function (user) {
            if (!user) {
                console.log("body register", req.body)
                bcrypt.genSalt(saltRounds, function (err, salt) {
                    bcrypt.hash(req.body.password, salt, function (err, hash) {

                        user = {
                            password: hash,
                            email: req.body.email,
                            type_user: req.body.type,
                            birth_date: req.body.birth_date,
                            name: req.body.name,
                            gender: req.body.gender,
                        };
                        console.log("user register", user)

                        db.get().query('INSERT INTO users SET ?', [user], function (err, result) {
                            if (err) {
                                res.json({
                                    success: false,
                                    error: err
                                })
                                throw new Error(err);

                            } else {

                                //USER CRIADO
                                //GERAR TOKEN
                                let userId = result.insertId;
                                newUser = {
                                    id: userId,
                                    password: hash,
                                    email: req.body.email,
                                    type_user: 1
                                };

                                /*
                                                            // setup email data with unicode symbols
                                                            let mailOptions = {
                                                                from: 'Volum Lda. <pedroaraujo@ua.pt>', // sender address
                                                                to: user.email, // list of receivers
                                                                subject: 'Lindo', // Subject line
                                                                html: '<a href="http://localhost:8080/api/auth/confirm-email?hash=' + hash + '&email=' + user.email // html body
                                                            };
                                
                                                            // send mail with defined transport object
                                                            transporter.sendMail(mailOptions, (error, info) => {
                                                                if (error) {
                                                                    return console.log(error);
                                                                }
                                                                console.log('Message %s sent: %s', info.messageId, info.response);
                                                            });
                                */

                                var token = jwt.sign({
                                    id: user.id_user
                                }, secretKey);

                                res.status(201).send({

                                    message: "User criado com sucesso",
                                    id_user: userId,
                                    id_token: "JWT " + token,
                                    success: true,

                                });

                            }
                        });

                    });
                });

            } else res.status(400).send("Já existe um user com esse username");
        });
    }
});

//PHOTO
/*

                                let sampleFile = req.files.photo;
                                sampleFile.mv('./public/storage/profile_photos/' + url + '.jpg', function (err) {

                                    if (err) {
                                        return res.status(500).send(err);
                                    } else {
                                        console.log(url);
                                        console.log(userId);

                                        db.get().query('UPDATE users SET photo_url = ? WHERE id_user = ?', [url, userId], function (err, result) {
                                            if (err) {
                                                throw new Error(err);

                                                */


/**
 * @api {post} /login Login 
 * @apiName login
 * @apiGroup Autenticacao
 * @apiParam {String} login Username/login do utilizador
 * @apiParam {String} password password
 */

app.post('/login', function (req, res) {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            message: "Falta enviar dados"
        });
    }
    getUserDB(req.body.email, function (user) {
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "O User não existe"
            });
        }


        bcrypt.compare(req.body.password, user.password, function (err, result) {
            if (!result) {
                return res.status(401).json({
                    success: false,
                    message: "Login e Password não coincidem"
                });
            } else {
                var token = jwt.sign({
                    id: user.id_user
                }, secretKey);

                res.status(201).send({
                    success: true,
                    id_user: user.id_user,
                    id_token: "JWT " + token
                });

                console.log(res);

            }

        });

    });
});

app.get('/confirm-email', function (req, res) {

    res.send(req.query.email + 'ativado com sucesso');
    // SET USER WHERE EMAIL = X ACTIVE = TRUE
});


app.post('/checkEmail/', function (req, res) {
    if (!req.body.email) {
        return res.status(400).json({
            success: false,
            message: "Falta o User"
        });
    }
    console.log(req.body);
    getUserDB(req.body.email, function (user) {
        if (!user) res.status(200).send({
            success: true
        });
        else res.status(200).json({
            success: false,
            message: "Já existe"
        });
    });
});

app.get('/facebook', passport.authenticate('facebook', {
    session: false,
    scope: ['user_friends', 'user_friends', 'email', 'user_photos', 'user_birthday']
}));

// handle the callback after facebook has authenticated the user
app.get('/facebook/callback',
    passport.authenticate('facebook', {
        session: false,
        failureRedirect: "/"
    }),
    function (req, res) {
        var token = jwt.sign({
            id: req.user.id_user
        }, secretKey);

        // res.redirect("http://localhost:8080/profile/" + req.user.id_user + "?id_token=JWT " + token);

        res.redirect(url.format({
            pathname: "http://bevolun.com/profile/" + req.user.id_user + '/about',
            query: {
                "id_token": "JWT " + token,

            }
        }));

        /*
                res.redirect(url.format({
                    pathname: "http://localhost:8080/profile/" + req.user.id_user,
                    query: {
                        "id_token": "JWT " + token,
        
                    }
                }));
                */

    });