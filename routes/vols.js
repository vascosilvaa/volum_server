var express = require('express'),
    jwt = require('express-jwt'),
    config = require('../config'),
    db = require('../config/db');
var passport = require('passport');

var app = module.exports = express.Router();


var jwtCheck = jwt({
    secret: config.secretKey
});


var comments = [];
let user = {};
let vol = {};


app.get('/:id', function(req, res) {

    let options = {
        sql: 'SELECT * FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user WHERE vols.deleted = 0 AND vols.id_vol = ?',
        nestTables: true
    };

    db.get().query(options, [req.params['id']], function(error, results, fields) {
        if (error) {
            res.send({ success: false, message: error })
            throw new Error(error);
        } else {
            console.log(results);
            if (results.length == 0) {
                res.status(404);
                res.send({ success: true, message: "No records found" })
            } else {
                console.log(results);
                for (let i = 0; i < results.length; i++) {

                    vol = {

                        id_vol: results[i].vols.id_vol,
                        place: results[i].vols.address,
                        name: results[i].vols.name,
                        desc: results[i].vols.desc,
                        date_creation: results[i].vols.date_creation,
                        date_begin: results[i].vols.date_begin,
                        duration: results[i].vols.duration,
                        active: results[i].vols.active,
                        insurance: results[i].vols.insurance,
                        long: results[i].vols.long,
                        lat: results[i].vols.lat,
                        user: results[i].users,

                    }
                }
                res.json({
                    success: true,
                    vol
                })

            }
        }
    });


});

/**
 * @api {get} /vols Listar todos os voluntariados
 * @apiName listVols
 * @apiGroup Voluntariados 
 */

app.get('/', function(req, res) {
    let vols = [];
    let options = {
        sql: 'SELECT vols.id_vol, vols.id_user_creator, vols.id_vol_type, vols.name, vols.desc, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time, ' +
            'users.id_user, users.name, users.photo_url, (SELECT COUNT(likes.id_vol)) AS likes FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user RIGHT JOIN likes ON vols.id_vol = likes.id_vol WHERE vols.deleted = 0 GROUP BY likes.id_vol ',
        nestTables: true
    };
    if (req.query['type'] == 'inst') {
        options = {
            sql: 'SELECT vols.id_vol, vols.id_user_creator, vols.id_vol_type, vols.name, vols.desc, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time, ' +
                'users.id_user, users.name, users.photo_url, (SELECT COUNT(likes.id_vol)) AS likes FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user RIGHT JOIN likes ON vols.id_vol = likes.id_vol WHERE vols.deleted = 0 AND vols.id_vol_type = 1 GROUP BY likes.id_vol ',
            nestTables: true
        };
    } else if (req.query['type'] == 'private') {

        options = {
            sql: 'SELECT vols.id_vol, vols.id_user_creator, vols.id_vol_type, vols.name, vols.desc, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time, ' +
                'users.id_user, users.name, users.photo_url, (SELECT COUNT(likes.id_vol)) AS likes FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user RIGHT JOIN likes ON vols.id_vol = likes.id_vol WHERE vols.deleted = 0 AND vols.id_vol_type = 2 GROUP BY likes.id_vol ',
            nestTables: true
        };
    }

    db.get().query(options,
        function(error, results, fields) {
            if (error) {
                res.send({ success: false, message: error })
                throw new Error(error);
            } else {
                if (results.length == 0) {
                    res.status(404);
                    res.send({ success: true, message: "No records found" })
                } else {

                    for (let i = 0; i < results.length; i++) {
                        vols.push({
                            vol: {
                                id_vol: results[i].vols.id_vol,
                                place: results[i].vols.address,
                                name: results[i].vols.name,
                                desc: results[i].vols.desc,
                                date_begin: results[i].vols.date_begin,
                                date_creation: results[i].date_creation,
                                duration: results[i].vols.duration,
                                active: results[i].vols.active,
                                insurance: results[i].vols.insurance,
                                likes: results[i]['']
                            },
                            user: {
                                id_user: results[i].users.id_user,
                                name: results[i].users.name,
                                photo_url: results[i].users.photo_url
                            }
                        });
                    }
                }
                res.json({
                    success: true,
                    vols
                })
            }

        });
});

/**
 * @api {post} /vols Inserir Voluntariado
 * @apiName insertVol
 * @apiParam {String} name Nome do Voluntariado  
 * @apiParam {String} desc Descrição do Voluntariado  
 * @apiGroup Voluntariados 
 */

app.get('/categories', function(req, res) {
    db.get().query('SELECT id_category, name FROM categories', function(error, results, fields) {
        if (error) {
            res.json({
                success: false,
                error: error
            });
            throw error;
        } else {
            res.json({
                success: true,
                message: results
            });
        }
    });
});


app.post('/:id/like', function(req, res) {
    db.get().query('INSERT INTO likes (id_user, id_vol, _like) VALUES (?, ?, 1)', [req.body.id_user, req.params.id],
        function(error, results, fields) {
            if (error) {
                res.json({
                    success: false,
                    message: "Ja tens Like",
                });
            } else {
                res.json({
                    success: true,
                    message: results
                });
            }
        });
});

app.post('/:id/dislike', function(req, res) {
    db.get().query('DELETE FROM likes WHERE id_user = ? AND id_vol = ?', [req.body.id_user, req.params.id],
        function(error, results, fields) {
            if (error) {
                res.json({
                    success: false
                });
            } else {
                res.json({
                    success: true,
                    message: results
                });
            }
        });
});

app.post('/', jwtCheck, function(req, res) {

    var name = req.body.name;
    if (!req.body.name || !req.body.desc) {
        return res.status(400).send("Falta enviar dados");
        throw new Error(error);

    }

    var query = db.get().query('INSERT INTO vols SET ?', req.body, function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });

});

/**
 * @api {post} /vols/:id/comments Comentar Voluntariado
 * @apiName commentVol
 
 * @apiGroup Voluntariados 
 */

app.post('/:id/comments', function(req, res) {

    if (req.body.id_user || req.body.message) {

        let body = {
            id_user: req.body.id_user,
            message: req.body.message,
            id_vol: req.params.id
        }

        db.get().query('INSERT INTO comments SET ?', [body],
            function(error, results, fields) {
                console.log(error);
                if (!error) {
                    res.json({
                        success: true,
                    })
                } else {
                    res.status(500);
                    res.json({
                        success: false,
                        message: "Internal Server Error"
                    })
                    throw new Error(error);
                }
            });
    } else {
        console.log(req.body);
        res.json({
            success: false,
            message: "Falta enviar dados"
        })
    }
});



/**
 * @api {get} /vols/:id/comments Retornar Comentários
 * @apiName getVolComments

 * @apiGroup Voluntariados 
 */


app.get('/:id/comments', function(req, res) {

    db.get().query('SELECT * FROM comments where id_vol = ?', [req.params.id], function(error, results, fields) {
        if (error) {
            res.json({
                success: false
            });
            throw error;
        } else {
            res.json({
                success: true,
                message: results
            });
        }
    });
});


/**
 * @api {post} /vols/:id/apply Candidatar a Voluntariado
 * @apiName apply
 * @apiParam {String}  id_user ID do user
 * @apiGroup Voluntariados 
 */



app.post('/:id/apply', function(req, res) {
    if (!req.body) {
        res.json({
            success: false,
            message: 'Falta Enviar o Body'
        });
    } else if (typeof req.body.id_user !== 'string') {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {
        db.get().query('INSERT INTO user_vol (`id_user`, `id_vol`) VALUES (?, ?)', [req.body.id_user, req.params.id],
            function(error, results, fields) {
                if (error) {
                    res.json({
                        success: false,
                        error: "Ja te candidataste a este voluntariado"
                    });
                } else {
                    res.json({
                        success: true,
                        message: "Sucesso"
                    });
                }
            });
    }
});

/**
 * @api {get} /vols/:id/comments Listar Confirmados
 * @apiName getConfirmed
 * @apiGroup Voluntariados 
 */

app.get('/:id/applies/confirmed', function(req, res) {

    let users = [];

    if (isNaN(parseInt(req.params.id))) {
        res.json({
            success: false,
            message: 'ID INVALIDO'
        });
    } else {
        let options = {
            sql: 'SELECT users.id_user, users.photo_url, users.name FROM user_vol INNER JOIN users ON user_vol.id_user = users.id_user WHERE user_vol.confirm = 1 AND user_vol.active = 1 AND user_vol.id_vol = ?',
            nestTables: true
        };

        db.get().query(options, [req.params.id], function(error, results, fields) {
            console.log(results);
            if (error) {
                console.log(error);
            } else if (results.length == 0) {
                res.json({
                    success: true,
                    message: "Sem Confirmados"
                });
            } else {
                for (let i = 0; i < results.length; i++) {
                    users.push({
                        id_user: results[i].users.id_user,
                        name: results[i].users.name,
                        photo_url: results[i].users.photo_url
                    });
                }
                res.json({
                    success: true,
                    users
                });
            }
        });
    }
});

app.get('/:id/applies/candidates', function(req, res) {

    let users = [];

    if (isNaN(parseInt(req.params.id))) {
        res.json({
            success: false,
            message: 'ID INVALIDO'
        });
    } else {

        let options = {
            sql: 'SELECT users.id_user, users.photo_url, users.name FROM user_vol INNER JOIN users ON user_vol.id_user = users.id_user WHERE user_vol.confirm = 0 AND user_vol.active = 1 AND user_vol.id_vol = ?',
            nestTables: true
        };

        db.get().query(options, [req.params.id], function(error, results, fields) {
            console.log(results);
            if (error) {
                console.log(error);
            } else if (results.length == 0) {
                res.json({
                    success: true,
                    message: "Sem Candidatos"
                });
            } else {
                for (let i = 0; i < results.length; i++) {
                    users.push({
                        id_user: results[i].users.id_user,
                        name: results[i].users.name,
                        photo_url: results[i].users.photo_url
                    });
                }
                res.json({
                    success: true,
                    users
                });
            }
        });
    }
});

app.post('/:id/applies/accept', function(req, res) {
    if (isNaN(parseInt(req.body.id_user))) {
        res.json({
            success: false,
            message: 'ID INVALIDO'
        });
    } else if (isNaN(parseInt(req.params.id))) {
        res.json({
            success: false,
            message: 'ID INVALIDO'
        });
    } else {

        db.get().query('UPDATE user_vol SET confirm = 1 WHERE id_vol = ? AND id_user = ?', [req.params.id, req.body.id_user], function(error, results, fields) {
            if (error) {
                res.json({
                    success: false,
                    error: error
                });
            } else if (results.affectedRows == 1 && results.changedRows == 0) {
                res.json({
                    success: false,
                    message: 'Este User já está confirmado'
                });
            } else if (results.changedRows == 0) {
                res.json({
                    success: false,
                    message: 'Este User não existe ou não é um candidato'
                });
            } else {
                res.json({
                    success: true,
                    message: "Sucesso"
                });
            }

        });
    }
});





/**
 * @api {post} /vols/:id/comments Apagar Voluntariado
 * @apiName deleteVol
 * @apiParam {String}  id ID do Vol  
 * @apiGroup Voluntariados 
 */


app.post('/delete', jwtCheck, function(req, res) {
    var id = req.body.id;

    db.get().query('UPDATE vols SET deleted = ? WHERE id = ?', [1, id], function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });

});

/**
 * @api {post} /vols/:id/comments Recuperar Voluntariado
 * @apiName undeleteVol
 * @apiParam {String} id ID do Vol  
 * @apiGroup Voluntariados 
 */

app.post('/undelete', function(req, res) {
    var id = req.body.id;
    db.get().query('UPDATE vols SET deleted = ? WHERE id = ?', [0, id], function(error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });
});