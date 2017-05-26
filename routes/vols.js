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


/**
 * @api {get} /vols Listar todos os voluntariados
 * @apiName listVols
 * @apiGroup Voluntariados 
 */

app.get('/', function (req, res, next) {

    let vols = [];
    let options = {
        sql: 'SELECT vols.id_vol,  GROUP_CONCAT(photos.url SEPARATOR "->") As photos,  vols.id_user_creator, vols.lat, vols.lng, vols.id_vol_type, vols.name, vols.description, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time, ' +
            'users.id_user, users.name, users.photo_url FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user INNER JOIN photos ON vols.id_vol = photos.id_vol WHERE photos.id_vol = vols.id_vol AND vols.deleted = 0 GROUP BY vols.id_vol ORDER BY vols.date_creation DESC ',
        nestTables: true
    };
    if (req.query['type'] == 'inst') {
        options = {
            sql: 'SELECT vols.id_vol,GROUP_CONCAT(photos.url SEPARATOR "->") As photos, vols.id_user_creator, vols.lat, vols.lng, vols.id_vol_type, vols.name, vols.description, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time, ' +
                'users.id_user, users.name, users.photo_url FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user  INNER JOIN photos ON vols.id_vol = photos.id_vol WHERE vols.deleted = 0 AND vols.id_vol_type = 1 AND  photos.id_vol = vols.id_vol GROUP BY vols.id_vol ORDER BY vols.date_creation',
            nestTables: true
        };
    } else if (req.query['type'] == 'private') {

        options = {
            sql: 'SELECT vols.id_vol,GROUP_CONCAT(photos.url SEPARATOR "->") As photos, vols.id_user_creator, vols.id_vol_type, vols.lat, vols.lng, vols.name, vols.description, vols.date_creation, vols.deleted, vols.date_begin, vols.date_end, vols.start_time, vols.end_time, ' +
                'users.id_user, users.name, users.photo_url FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user  INNER JOIN photos ON vols.id_vol = photos.id_vol WHERE vols.deleted = 0 AND vols.id_vol_type = 2 AND  photos.id_vol = vols.id_vol GROUP BY vols.id_vol ORDER BY vols.date_creation',
            nestTables: true
        };
    }

    db.get().query(options,
        function (error, results, fields) {
            if (error) {
                console.log(error);
                res.send({
                    success: false,
                    message: error
                })
                throw new Error(error);
            } else {
                console.log(results);
                if (results.length == 0) {} else {

                    for (let i = 0; i < results.length; i++) {
                        vols.push({
                            vol: {
                                id_vol: results[i].vols.id_vol,
                                name: results[i].vols.name,
                                description: results[i].vols.description,
                                date_begin: results[i].vols.date_begin,
                                date_creation: results[i].vols.date_creation,
                                duration: results[i].vols.duration,
                                lat: results[i].vols.lat,
                                lng: results[i].vols.lng,
                                photos: (results[i][''].photos).split('->')
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
                });
            }
        });
});


/**
 * @api {post} /vols/ Novo Voluntariado
 * @apiName newVol
 * @apiParam name nome
 * @apiParam description descriptionriçao
 * @apiParam photo_1 descriptionriçao
 * @apiParam lat Latitude
 * @apiParam lng lngitude
 * @apiGroup Voluntariados 
 */

app.post('/', passport.authenticate('jwt'), function (req, res) {

    console.log("body", req.body)

    if (!req.body.name || !req.body.description || !req.body.category || !req.body.date_begin) {
        res.status(400).json({
            success: false,
            message: "Falta Enviar Dados"
        })

    } else {

        if (!Date(req.body.date_begin || !Date(req.body.date_end))) {
            res.status(400).json({
                success: false,
                message: 'Datas Invalidas'
            })

        } else {

            db.get().query('INSERT INTO vols (id_vol_type, id_user_creator, name, description, date_begin, date_end, duration, start_time, end_time, lat, lng, insurance)' +
                'VALUES ( ? , ? , ? , ? , ? , ? , ?, ? , ?, ? , ? , ? )', [req.body.category, req.user.id_user, req.body.name, req.body.description, req.body.date_begin, req.body.date_end, req.body.duration, req.body.start_time, req.body.end_time, req.body.lat, req.body.lng, req.body.insurance],
                function (error, results, fields) {
                    if (error) {
                        console.log(error);
                        res.json({
                            error
                        });
                    } else {
                        if (!req.photo_1) {

                            db.get().query('INSERT INTO photos (id_vol, url) VALUES( ?, ?)', [results.insertId, 'https://maps.googleapis.com/maps/api/staticmap?center=' + req.body.lat + ',' + req.body.lng + '&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyB9S3UNffz8CYVqeg4RXjdI51M9xBPo12w'], function (error, result, field) {
                                if (error) {
                                    res.json({
                                        error
                                    });
                                } else {

                                    res.json({
                                        message: 'Success',
                                        id_vol: results.insertId
                                    });


                                }
                            });
                        } else {
                            res.json({
                                message: 'Success',
                                id_vol: results.insertId
                            });
                        }
                    }
                });
        }
    }
});



/**
 * @api {get} /vols/:id Listar Especifico
 * @apiParam id ID do vol
 * @apiName listVol
 * @apiGroup Voluntariados 
 */


app.get('/:id', function (req, res, next) {
    console.log("query", req.query);


    let options = {
        sql: 'SELECT * FROM vols INNER JOIN users ON vols.id_user_creator = users.id_user WHERE vols.deleted = 0 AND vols.id_vol = ? LIMIT 1',
        nestTables: true
    };


    db.get().query(options, [req.params['id']], function (error, results, fields) {
        if (error) {
            res.send({
                success: false,
                message: error
            })
            throw new Error(error);
        } else {
            if (results.length == 0) {
                res.status(404);
                res.send({
                    success: true,
                    message: "No records found"
                })
            } else {
                for (let i = 0; i < results.length; i++) {

                    vol = {

                        id_vol: results[i].vols.id_vol,
                        place: results[i].vols.address,
                        name: results[i].vols.name,
                        description: results[i].vols.description,
                        date_creation: results[i].vols.date_creation,
                        date_begin: results[i].vols.date_begin,
                        date_end: results[i].vols.date_end,
                        start_time: results[i].vols.start_time,
                        end_time: results[i].vols.end_time,
                        duration: results[i].vols.duration,
                        active: results[i].vols.active,
                        insurance: results[i].vols.insurance,
                        lng: results[i].vols.lng,
                        lat: results[i].vols.lat,
                        user: results[i].users
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
 * @api {get} /vols/:id/likes/count Count dos lIkes
 * @apiParam id ID do vol
 * @apiName listLikeCount
 * @apiGroup Voluntariados 
 */

app.get('/:id/likes/count', function (req, res) {

    let options = {
        sql: 'SELECT COUNT(*) AS likes FROM likes WHERE id_vol = ? ',
    };

    db.get().query(options, [req.params['id']], function (error, results, fields) {
        if (error) {
            res.send({
                success: false,
                message: error
            })
            throw new Error(error);
        } else {
            let likes = results[0].likes;
            if (results.length == 0) {
                res.status(404);
                res.send({
                    success: true,
                    likes: 0
                })
            } else {
                res.status(200);
                res.send({
                    success: true,
                    likes
                })
            }
        };

    });
});
app.get('/:id/checkLike', passport.authenticate('jwt'), function (req, res) {
    if (!Number(req.params.id)) {
        res.status(400).send({
            success: false,
            message: "Parâmetros Invalidos"
        });
    } else {
        let users = [];

        db.get().query({
                sql: 'SELECT COUNT(*) AS count FROM likes WHERE id_user = ? AND id_vol = ?'
            }, [req.user.id_user, req.params.id],
            function (error, count, fields) {
                console.log(count);
                if (count[0].count == 1) {
                    res.json({
                        success: true,
                        state: 1
                    });
                } else {
                    res.json({
                        success: true,
                        state: 0
                    });

                }


            });
    }
});
/**
 * @api {get} /vols/:id/likes/count Listar quem fez like
 * @apiParam id ID do vol
 * @apiName listLikes
 * @apiGroup Voluntariados 
 */

app.get('/:id/likes', passport.authenticate('jwt', {
    session: false
}), function (req, res) {

    let options = {
        sql: 'SELECT users.id_user, users.photo_url, users.name  FROM likes INNER JOIN users ON likes.id_user = users.id_user WHERE id_vol = ?',
    };

    db.get().query(options, [req.params['id']], function (error, results, fields) {
        if (error) {
            res.send({
                success: false,
                message: error
            })
            throw new Error(error);
        } else {

            if (results.length == 0) {
                res.status(404);
                res.send({
                    success: true,
                    body: []
                })
            } else {
                res.status(200);
                res.send({
                    success: true,
                    body: results
                })
            }
        };

    });
});
/**
 * @api {get} /vols/categories' Listar Categorias
 * @apiName listVols
 * @apiGroup Voluntariados 
 */

app.get('/list/categories', function (req, res) {
    db.get().query('SELECT id_category, name FROM vol_categories WHERE active = 1', function (error, categories, fields) {
        if (error) {
            res.json({
                success: false,
                error: error
            });
            throw error;
        } else {
            res.json({
                success: true,
                categories
            });
        }
    });
});
/**
 * @api {post} /vols/:id/like Like
 * @apiName like
 * @apiParam id ID do vol
 * @apiGroup Voluntariados 
 */


app.post('/:id/like', passport.authenticate('jwt'), function (req, res) {
    db.get().query('INSERT INTO likes (id_user, id_vol, _like) VALUES (?, ?, 1)', [req.user.id_user, req.params.id],
        function (error, results, fields) {
            if (error) {
                res.json({
                    success: false,
                    message: error
                });
            } else {
                res.json({
                    success: true,
                    message: results
                });
            }
        });
});
/**
 * @api {post} /vols/:id/dislike dislike
 * @apiName dislike
 * @apiParam id ID do vol
 * @apiGroup Voluntariados 
 */

app.post('/:id/dislike', passport.authenticate('jwt'), function (req, res) {
    db.get().query('DELETE FROM likes WHERE id_user = ? AND id_vol = ?', [req.user.id_user, req.params.id],
        function (error, results, fields) {
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
/**
 * @api {post} /vols/:id/comment Comentar Voluntariado
 * @apiName commentVol
 * @apiParam id id do vol ( url)
 * @apiParam id_user id_user ( body)
 * @apiParam message message (body)
 * @apiGroup Voluntariados 
 */

app.post('/:id/comment', passport.authenticate('jwt'), function (req, res) {

    if (req.body.message) {

        let body = {
            id_user: req.user.id_user,
            message: req.body.message,
            id_vol: req.params.id
        }

        db.get().query('INSERT INTO comments SET ?', [body],
            function (error, results, fields) {
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
 * @apiParam id id_vol
 
 * @apiGroup Voluntariados 
 */


app.get('/:id/comments', passport.authenticate('jwt'), function (req, res) {

    db.get().query('SELECT * FROM comments INNER JOIN users ON comments.id_user = users.id_user WHERE id_vol = ? ', [req.params.id], function (error, comments, fields) {
        if (error) {
            res.json({
                success: false
            });
            throw error;
        } else {
            res.json({
                success: true,
                comments
            });
        }
    });
});
app.get('/:id/comments/count', passport.authenticate('jwt'), function (req, res) {

    let options = {
        sql: 'SELECT COUNT(*) AS count FROM comments WHERE id_vol = ? ',
    };

    db.get().query(options, [req.params['id']], function (error, results, fields) {
        if (error) {
            res.send({
                success: false,
                message: error
            })
            throw new Error(error);
        } else {
            let count = results[0].count;
            if (results.length == 0) {
                res.status(404);
                res.send({
                    success: true,
                    count: 0
                })
            } else {
                res.status(200);
                res.send({
                    success: true,
                    count
                })
            }
        };

    });
});
/**
 * @api {post} /vols/:id/apply Candidatar a Voluntariado
 * @apiName apply
 * @apiParam {String}  id_user ID do user
 * @apiGroup Voluntariados 
 */

app.post('/:id/apply', passport.authenticate('jwt'), function (req, res) {
    if (!req.body) {
        res.json({
            success: false,
            message: 'Falta Enviar o Body'
        });

    } else {

        db.get().query('INSERT INTO user_vol (`id_user`, `id_vol`) VALUES (?, ?)', [req.user.id_user, req.params.id],
            function (error, results, fields) {
                if (error) {
                    console.log(error);
                    res.json({
                        success: false,
                        error: "Ja te candidataste a este voluntariado"
                    });
                } else {

                    db.get().query('SELECT id_user_creator from vols WHERE id_vol = ?', [req.params.id],
                        function (error, results, fields) {

                            let id_creator = results[0].id_user_creator;

                            db.get().query('INSERT INTO notifications VALUES (NULL, ?, ?, ?, 1, NULL, NULL)', [id_creator, req.body.id_user, req.params.id],
                                function (error, results, fields) {
                                    console.log(results);
                                    console.log(error);
                                    res.json({
                                        success: true,
                                        message: "Sucesso"
                                    });
                                });
                        });


                }
            });
    }
});
/**
 * @api {post} /vols/:id/checkState Verifica o estado do vol para o user especifico
 * @apiName checkState
 * @apiParam id ID do vol
 * @apiParam id_user ID do user
 * @apiGroup Voluntariados 
 */

app.post('/:id/checkState', passport.authenticate('jwt'), function (req, res) {
    if (!req.body) {
        res.json({
            success: false,
            message: 'Falta Enviar o Body'
        });
    } else if (isNaN(req.body.id_user)) {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {
        db.get().query("SELECT * FROM user_vol WHERE id_user = ? AND id_vol = ?", [req.body.id_user, req.params.id],
            function (error, results, fields) {
                if (error) {
                    console.log(error);
                } else if (results) {
                    console.log(results);
                    if (results.length == 0) {
                        res.json({
                            success: true,
                            state: 0,
                            message: 'Ainda nao se candidatou nem esta confirmado'
                        });
                    } else if (results[0].confirm == '0') {
                        res.json({
                            success: true,
                            state: 1,
                            message: 'Ja te Candidataste'
                        });
                    } else if (results[0].confirm == '1') {
                        res.json({
                            success: true,
                            state: 2,
                            message: 'Ja estas confirmado'
                        });
                    } else if (results[0].confirm == '2') {
                        res.json({
                            success: true,
                            state: 4,
                            message: 'Ninguem gosta de ti'
                        });
                    }


                }
            });
    };
});
/**
 * @api {get} /vols/:id/applies/confirmed Listar Confirmados
 * @apiName getConfirmed
 * @apiGroup Voluntariados 
 */

app.get('/:id/applies/confirmed', passport.authenticate('jwt'), function (req, res) {

    let users = [];

    console.log("QUERY", req.query);
    console.log("PARAMS", req.params);
    if (!Number(req.params.id) || !req.params.id) {
        res.json({
            success: false,
            message: 'ID INVALIDO'
        });
    } else {

        if (req.query.amount) {
            req.query.amount = parseInt(req.query['amount']);

        } else {
            req.query.amount = 100;
        }

        let options = {
            sql: 'SELECT users.id_user, users.photo_url, users.name FROM user_vol INNER JOIN users ON user_vol.id_user = users.id_user WHERE user_vol.confirm = 1 AND user_vol.active = 1 AND user_vol.id_vol = ? LIMIT ?',
            nestTables: true
        };

        db.get().query(options, [req.params.id, req.query.amount], function (error, results, fields) {
            console.log("results", results);
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
app.get('/:id/applies/confirmed/count', passport.authenticate('jwt'), function (req, res) {

    let options = {
        sql: 'SELECT COUNT(*) AS count FROM user_vol WHERE user_vol.confirm = 1 AND user_vol.active = 1 AND user_vol.id_vol = ?',
    };

    db.get().query(options, [req.params['id']], function (error, results, fields) {
        if (error) {
            res.send({
                success: false,
                message: error
            })
            throw new Error(error);
        } else {
            let count = results[0].count;
            if (results.length == 0) {
                res.status(404);
                res.send({
                    success: true,
                    count: 0
                })
            } else {
                res.status(200);
                res.send({
                    success: true,
                    count
                })
            }
        };

    });
});
/**
 * @api {get} /vols/:id/applies/confirmed Listar Candidatos
 * @apiName getCandidates
 * @apiGroup Voluntariados 
 */

// CONFIRM = 1 -> ACEITE CONFIRM = 2 -> NEGADO


app.get('/:id/applies/candidates', passport.authenticate('jwt'), function (req, res) {

    console.log("QUEERY", req.query);
    console.log("a")
    let users = [];

    if (!Number(req.params.id)) {
        res.json({
            success: false,
            message: 'ID INVALIDO'
        });
    } else {

        if (req.query.amount) {
            req.query.amount = parseInt(req.query['amount']);

        } else {
            req.query.amount = 100;
        }

        let options = {
            sql: 'SELECT users.id_user, users.photo_url, users.name FROM user_vol INNER JOIN users ON user_vol.id_user = users.id_user WHERE user_vol.confirm = 0 AND user_vol.active = 1 AND user_vol.id_vol = ? LIMIT ?',
            nestTables: true
        };

        db.get().query(options, [req.params.id, req.query.amount], function (error, results, fields) {

            console.error(error)
            if (error) {
                res.json({
                    success: false,
                    error: "ERRO"
                });
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
app.get('/:id/applies/candidates/count', passport.authenticate('jwt'), function (req, res) {

    let options = {
        sql: 'SELECT COUNT(*) AS count FROM user_vol WHERE user_vol.confirm = 0 AND user_vol.active = 1 AND user_vol.id_vol = ?',
    };

    db.get().query(options, [req.params['id']], function (error, results, fields) {
        if (error) {
            res.send({
                success: false,
                message: error
            })
            throw new Error(error);
        } else {
            let count = results[0].count;
            if (results.length == 0) {
                res.status(404);
                res.send({
                    success: true,
                    count: 0
                })
            } else {
                res.status(200);
                res.send({
                    success: true,
                    count
                })
            }
        };

    });
});
/**
 * @api {get} /vols/:id/applies/aceitar Aceitar User
 * @apiName accept
 * @apiParam id ID do vol
 * @apiParam id_user ID do user
 * @apiGroup Voluntariados 
 */

app.post('/:id/applies/accept', passport.authenticate('jwt'), function (req, res) {

    if (!Number(req.params.id)) {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {
        db.get().query('UPDATE user_vol SET confirm = 1 WHERE id_vol = ? AND id_user = ?', [req.params.id, req.user.id_user], function (error, results, fields) {
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
                    message: 'Este User ou voluntariado não existe ou não é um candidato'
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


app.post('/:id/applies/deny', passport.authenticate('jwt'), function (req, res) {
    console.log(req.params.id);
    if (!Number(req.params.id)) {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {
        db.get().query('UPDATE user_vol SET confirm = 2 WHERE id_vol = ? AND id_user = ?', [req.params.id, req.user.id_user], function (error, results, fields) {
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

app.post('/:id/applies/cancel', passport.authenticate('jwt'), function (req, res) {
    if (!Number(req.params.id)) {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {
        db.get().query('DELETE FROM user_vol WHERE id_vol = ? AND id_user = ?', [req.params.id, req.user.id_user], function (error, results, fields) {
            console.log(results);
            if (error) {
                res.json({
                    success: false,
                    error: error
                });
            } else if (results.affectedRows == 1 && results.changedRows == 0) {
                res.json({
                    success: false,
                    message: 'Sucesso'
                });
            } else if (results.changedRows == 0) {
                res.json({
                    success: false,
                    message: 'Este Voluntariado nao existe ou o user nao é candidato'
                });
            } else {
                res.json({
                    success: false,
                    message: "Erro Desconhecido"
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


app.post('/delete', passport.authenticate('jwt'), function (req, res) {
    if (!Number(req.body.id_vol)) {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {
        db.get().query('SELECT id_user_creator FROM vols WHERE id_vol = ? LIMIT 1', [req.body.id_vol], function (error, results, fields) {

            if (results) {
                if (results[0].id_user_creator == req.user.id_user) {
                    db.get().query('UPDATE vols SET deleted = ? WHERE id_vol = ?', [1, req.body.id_vol], function (error, results, fields) {
                        if (error) throw error;
                        res.json({
                            success: true,
                        });
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'Apenas o criador do voluntariado pode apaga-lo',

                    });
                }


            } else {

            }
        });


    }
});
/**
 * @api {post} /vols/:id/comments Recuperar Voluntariado
 * @apiName undeleteVol
 * @apiParam {String} id ID do Vol  
 * @apiGroup Voluntariados 
 */

app.post('/undelete', passport.authenticate('jwt'), function (req, res) {
    var id = req.body.id;
    db.get().query('UPDATE vols SET deleted = ? WHERE id = ?', [0, id], function (error, results, fields) {
        if (error) throw error;
        res.json({
            message: 'Success',
        });
    });
});