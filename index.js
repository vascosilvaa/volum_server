require('pmx').init({
    http: true, // HTTP routes logging (default: true)
    errors: true, // Exceptions logging (default: true)
    custom_probes: true, // Auto expose JS Loop Latency and HTTP req/s as custom metrics
    network: true, // Network monitoring at the application level
    ports: true // Shows which ports your app is listening on (default: false)
});

//DEPENDENCIES
var morgan = require('morgan')
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var path = require('path');
var app = express();
var fileUpload = require('express-fileupload');
var server = http.createServer(app);

var io = require('socket.io').listen(server);

//ROUTES

var vols = require('./routes/vols')(io)
var auth = require('./routes/auth');
var users = require('./routes/users')(io)
var notifications = require('./routes/notifications')(io)
var chat = require('./routes/chat')(io)
var db = require('./config/db');

var searchData = [];
loggedUsers = [];
app.use(passport.initialize());
app.use(morgan('dev'));
app.use(cors());
app.use(fileUpload());
require('./config/passport')(passport);
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


app.use(express.static(path.join(__dirname, 'public/dist')));
app.use('/api', express.static(path.join(__dirname, 'docs')))
app.use('/mobile', express.static(path.join(__dirname, 'www')))

//ROUTES
app.use('/api/auth', auth);
app.use('/api/vols', vols);
app.use('/api/users', users);
app.use('/api/chat', chat);

app.use('/api/notifications', notifications);

app.get('/api/search', function (req, res) {
    console.log("a");
    if (req.query['search'] == undefined || req.query['search'] == null || req.query['search'] == '') {
        res.send({ success: false, message: 'Please provide a search query' })
    } else if (typeof req.query['search'] !== 'string') {
        res.send({ success: false, message: 'Please provide a valid search query' })
    } else {

        let query = (req.query.search).replace(/['"]+/g, '');

        db.get().query('SELECT vols.id_vol AS id, vols.name from vols where vols.name LIKE ?; SELECT users.id_user AS id, users.name, users.photo_url, users.type_user AS type FROM users where users.name LIKE ? LIMIT 10', ['%' + query + '%', '%' + query + '%'],
            function (error, results, fields) {
                console.log(results);
                if (error) {
                    res.send({ success: false, message: error })
                    console.log(error);
                } else {

                    for (let i = 0; i < results[0].length; i++) {
                        results[0][i].type = 0;
                    }


                    if (results[0].length == 0 && results[1].length == 0) {
                        res.send({ success: false, message: [] })
                    } else {
                        searchData = results[0].concat(results[1]);
                        res.send({ success: true, message: searchData })
                    }
                }
            });
    }
});
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/dist/index.html'));
});

*/

app.use('/*', express.static(path.join(__dirname, 'public/dist'), { redirect: false }));



/**
 * @api {get} /search Pesquisar 
 * @apiGroup Geral
 * @apiParam {String} search Termo a pesquisar
 */


function ensureUnauthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        // display an "already logged in" message
        return res.redirect('/feed');
    }
    next();
}


io.on('connection', function (socket) {

    socket.on('user', function (id) {
        console.log("entrou");

        console.log("USER", id);
        loggedUsers.push({ socket: socket.id, user: id })
        console.log("logged", loggedUsers);
        app.set('users', loggedUsers);
    });

    socket.on('disconnect', function () {
        console.log("SOCKET", socket.id);

        let index = loggedUsers.findIndex(x => x.socket == socket.id)
        console.log("index", index);
        console.log("USERS", loggedUsers)
        loggedUsers.splice(index, 1);
        app.set('users', loggedUsers);

    });


});

server.listen(process.env.PORT || 8080);
console.log("Listening...");