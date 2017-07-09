var express = require('express'),
    _ = require('lodash'),
    config = require('../config'),
    jwt = require('jsonwebtoken'),
    db = require('../config/db'),
    passport = require('passport');


var app = module.exports = express.Router();



/**
 * @api {get} /chat/:id Listar Conversas
 * @apiName getConversations
 * @apiParam id ID do user
 * @apiGroup Chat
 */

function refSort(targetData, refData) {
    // Create an array of indices [0, 1, 2, ...N].
    var indices = Object.keys(refData);

    // Sort array of indices according to the reference data.
    indices.sort(function (indexA, indexB) {
        if (refData[indexA] < refData[indexB]) {
            return -1;
        } else if (refData[indexA] > refData[indexB]) {
            return 1;
        }
        return 0;
    });

    // Map array of indices to corresponding values of the target array.
    return indices.map(function (index) {
        return targetData[index];
    });
}

var returnRouter = function (io) {

    io.on('connection', function (socket) {

        socket.on('join', function (room) {

            socket.join(room);

            console.log(socket.id + "joined " + room);

        })
    })




    app.get('/', passport.authenticate('jwt'), function (req, res) {

        db.get().query('SELECT * FROM user_relations INNER JOIN users ON user_relations.id_user = users.id_user WHERE user_relations.id_user = ? OR user_relations.id_user2 = ? ORDER BY user_relations.date DESC', [req.user.id_user, req.user.id_user], function (error, results, fields) {
            if (error) throw error;
            let conversations = [];


            let userIds = [];

            let resultArray = results;

            for (let i = 0; i < results.length; i++) {

                if (results[i].id_user == req.user.id_user) {

                    conversations.push({
                        id_conversation: results[i].id_conversation,
                        id_user: results[i].id_user2,
                    });

                } else {
                    conversations.push({
                        id_conversation: results[i].id_conversation,
                        id_user: results[i].id_user,
                    });
                }
            }



            res.json({
                success: true,
                conversations
            });


        });

    });

    /**
     * @api {post} /chat/:id Criar Conversa
     * @apiName createConv
     * @apiParam id ID do user (url)
     * @apiParam id_user ID do user (body)
     * @apiGroup Chat
     */

    app.get('/:id/messages', function (req, res) {


        db.get().query('SELECT * FROM chat WHERE id_conversation = ?', [req.params.id], function (error, messages, fields) {
            if (error) {
                console.log(error);
                if (error) throw error;

            } else {
                res.json({
                    success: true,
                    messages
                });

            }
        });

    });

    /**
     * @api {post} /chat/:id Mandar Mensagem
     * @apiName createConv
     * @apiParam id ID do user (url)
     * @apiParam id_user ID do user (body)
     * @apiParam message Mensagem (body)
     * @apiGroup Chat
     */


    app.post('/:id/message', passport.authenticate('jwt'), function (req, res) {
        console.log("wgwag", req)
        console.log(req.params.id);
        console.log(req.body.id_user);
        db.get().query('INSERT INTO chat VALUES (NULL, ?, ?, ?, ?, NULL)', [req.body.message, new Date(), req.params.id, req.user.id_user], function (error, results, fields) {
            if (error) throw error;

            let data = {
                from_id: req.user.id_user,
                message: req.body.message
            }
            let index = loggedUsers.findIndex(x => x.user == req.body.id_user);

            io.to(req.params.id).emit('message', data);


            //    io.to(loggedUsers[index].socket).emit('new message');


            res.json({
                success: true,
                results
            });
        });

    });

    app.get('/:id/user', passport.authenticate('jwt'), function (req, res) {
        let id_user;
        db.get().query('SELECT id_user, id_user2 FROM user_relations WHERE id_conversation = ?', [req.params.id, req.user.id_user, req.user.id_user], function (error, results, fields) {
            if (error) {
                console.log(error);
                if (error) throw error;
            } else {

                if (results) {

                    if (results[0].id_user == req.user.id_user) {
                        id_user = results[0].id_user2;
                    } else {
                        id_user = results[0].id_user
                    }

                    db.get().query('SELECT * FROM users WHERE id_user = ?', [id_user], function (error, result, fields) {
                        res.json({
                            success: true,
                            result
                        });
                    });
                }
                


            }


        });

    });


    app.get('/:id/messages/last', function (req, res) {


        db.get().query('SELECT * FROM chat WHERE id_conversation = ?  ORDER BY id_message DESC LIMIT 1', [req.params.id], function (error, messages, fields) {
            if (error) {
                console.log(error);
                if (error) throw error;

            } else {
                res.json({
                    success: true,
                    messages
                });

            }
        });
    });

    app.get('/:id/messages/last', function (req, res) {


        db.get().query('SELECT * FROM chat WHERE id_conversation = ?  ORDER BY id_message DESC LIMIT 1', [req.params.id], function (error, messages, fields) {
            if (error) {
                console.log(error);
                if (error) throw error;

            } else {
                res.json({
                    success: true,
                    messages
                });

            }
        });

    });

    app.post('/', passport.authenticate('jwt'), function (req, res) {
        console.log("aaa")
        console.log(req.body.id_user);
        console.log(req.user.id_user);

        db.get().query('SELECT * FROM user_relations WHERE ((id_user = ? AND id_user2 = ?) OR (id_user2 = ? AND id_user = ?))', [req.user.id_user, req.body.id_user, req.user.id_user, req.body.id_user],
            function (error, results, fields) {
                if (error) {
                    res.json({
                        success: false,
                        error
                    });
                } else {
                    if (results.length > 0) {
                        console.log("results", results[0].id_conversation);
                        res.json({
                            success: true,
                            id_conversation: results[0].id_conversation
                        });

                    } else {

                        db.get().query('INSERT INTO user_relations (id_user, id_user2) VALUES (?, ?, ?)', [req.user.id_user, req.body.id_user, new Date()],
                            function (error, results, fields) {
                                if (error) {
                                    res.json({
                                        success: false,

                                    });
                                } else {
                                    res.json({
                                        success: true,
                                        id_conversation: results.insertId
                                    });
                                }


                            });

                    }
                }


            });

        /*
               
        
                    */

    });


    return app;
}

module.exports = returnRouter;
