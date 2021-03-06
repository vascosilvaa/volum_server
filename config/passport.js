// load up the user model

var db = require('./db'); // get db config file


var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    FacebookStrategy = require('passport-facebook').Strategy;
var request = require('request');

function getUserById(id, done) {
    db.get().query('SELECT * FROM users WHERE id_user = ? LIMIT 1', [id], function (err, rows, fields) {
        if (err) throw err;
        done(rows[0]);
    });
}


function getUserByEmail(email, done) {
    db.get().query('SELECT * FROM users WHERE email = ? LIMIT 1', [email], function (err, rows, fields) {
        if (err) throw err;
        done(rows[0]);
    });
}

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id_user);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        db.get().query('SELECT * FROM users WHERE id_user = ? LIMIT 1', id, function (err, rows, fields) {
            done(err, rows[0]);

        });
    });


    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = "teste"

    passport.use(new FacebookStrategy({
        clientID: '1657614757878644',
        clientSecret: '36b1c065c723b228239c4504dc7a6396',
        callbackURL: 'http://bevolun.com/api/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'photos', 'email', 'birthday']
    },
        function (accessToken, refreshToken, profile, done) {
            process.nextTick(function () {


                console.log("profile facebook", profile)

                getUserByEmail(profile._json.email, function (user) {
                    if (user && user != undefined) {
                        console.log("user ja existe")
                        done(null, user);
                    } else {
                        request('https://graph.facebook.com/me/picture?access_token=' + accessToken + '&type=large&redirect=false', function (error, response, body) {

                            console.log("USER", profile)
                            let data = JSON.parse(body);

                            console.log("DATA", data.data.url)
                            console.log(body['data'])
                            console.log
                            let newUser = {
                                facebook_link: profile._json.id,
                                email: profile._json.email,
                                type_user: 2,
                                name: profile._json.name,
                                gender: 0,
                                photo_url: data.data.url,
                                birth_date: profile._json.birthday,
                            };
                            db.get().query('INSERT INTO users SET ?', [newUser], function (err, result) {
                                if (err) {
                                    throw new Error(err);
                                } else {
                                    done(null, newUser);
                                }
                            });


                        });
                    }
                });
            });
        }));

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {

        db.get().query('SELECT * FROM users WHERE id_user = ? LIMIT 1', jwt_payload.id, function (err, rows, fields) {
            if (err) {
                done(null, false, {
                    message: 'erro'
                })
            } else {
                done(null, rows[0]);
            }
        });
    }));


}