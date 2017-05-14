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



app.get('/:id', function (req, res) {
    if (!req.params.id) {
        res.json({
            success: false,
            message: 'Falta Enviar o id'
        });
    } else if (isNaN(req.params.id)) {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {
        db.get().query('SELECT * FROM user_relations INNER JOIN users ON user_relations.id_user2 = users.id_user WHERE user_relations.id_user = ? ', [req.params.id], function (error, results, fields) {
            if (error) throw error;
            let conversations = [];
            for (let i = 0; i < results.length; i++) {
                conversations.push({
                   // id_conversation: results[i].id_conversation,
                    id_user: results[i].id_user2,
                    user_name: results[i].name,
                    photo_url: results[i].photo_url

                })
            }
            res.json({
                success: true,
                conversations
            });
        });
    }
});

/**
 * @api {post} /chat/:id Criar Conversa
 * @apiName createConv
 * @apiParam id ID do user (url)
 * @apiParam id_user ID do user (body)
 * @apiGroup Chat
 */

app.post('/:id', function (req, res) {
    if (!req.body.id_user) {
        res.json({
            success: false,
            message: 'Falta Enviar o id'
        });
    } else if (isNaN(req.body.id_user)) {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {

        db.get().query('SELECT * FROM chat WHERE id_user = ? AND id_user2 = ? OR id_user2 = ? AND id_user = ?;', [req.params.id, req.body.id_user, req.params.id, req.body.id_user], function (error, messages, fields) {
            if (error) throw error;

            res.json({
                success: true,
                messages
            });
        });
    }
});

/**
 * @api {post} /chat/:id Mandar Mensagem
 * @apiName createConv
 * @apiParam id ID do user (url)
 * @apiParam id_user ID do user (body)
 * @apiParam message Mensagem (body)
 * @apiGroup Chat
 */

app.post('/:id/message', function (req, res) {
    if (!req.body.id_user) {
        res.json({
            success: false,
            message: 'Falta Enviar o id'
        });
    } else if (isNaN(req.body.id_user)) {
        res.json({
            success: false,
            message: 'Id Inválido'
        });
    } else {
        console.log(req.params.id);
        console.log(req.body.id_user);
        db.get().query('INSERT INTO chat VALUES (NULL, ?, ?, ?, NULL) ;', [req.params.id, req.body.id_user, req.body.message], function (error, results, fields) {
            if (error) throw error;

            res.json({
                success: true,
                results
            });
        });
    }
});

