// load up the user model

var db = require('./db'); // get db config file


var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    FacebookStrategy = require('passport-facebook').Strategy;


function getUserById(id, done) {
    db.get().query('SELECT * FROM users WHERE id_user = ? LIMIT 1', [id], function(err, rows, fields) {
        if (err) throw err;
        done(rows[0]);
    });
}

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id_user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        db.get().query('SELECT * FROM users WHERE id_user = ? LIMIT 1', id, function(err, rows, fields) {
            done(err, rows[0]);

        });
    });


    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
    opts.secretOrKey = "teste"

    passport.use(new FacebookStrategy({
            clientID: '1657614757878644',
            clientSecret: '36b1c065c723b228239c4504dc7a6396',
            callbackURL: 'http://localhost:' + 8080 + '/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'photos', 'email', 'birthday']
        },
        function(accessToken, refreshToken, profile, done) {
            process.nextTick(function() {

                console.log("USER", profile._json.id);

                getUserById(profile._json.id, function(user) {
                    console.log(user);
                    if (user && user != undefined) {
                        console.log("ja existe");
                        done(null, user);
                    } else {

                        let newUser = {

                            email: profile._json.email,
                            type_user: 1,
                            name: profile._json.name,
                            gender: 0,
                            id_user: profile._json.id,
                            photo_url: profile._json.picture.data.url,
                            birth_date: new Date(profile._json.birthday).getTime()
                        };

                        db.get().query('INSERT INTO users SET ?', [newUser], function(err, result) {
                            if (err) {
                                throw new Error(err);
                            } else {
                                done(null, newUser);
                            }
                        });


                    }

                });
            });
        }));

    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        console.log(jwt_payload);

        db.get().query('SELECT * FROM users WHERE id_user = ? LIMIT 1', jwt_payload.id, function(err, rows, fields) {
            if (err) {
                console.log("erro");
                console.log(err);
            } else {
                console.log(rows[0]);
                done(null, rows[0]);
            }
        });
    }));


}


/*


*/