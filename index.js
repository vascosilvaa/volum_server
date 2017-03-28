require('pmx').init({
    http: true, // HTTP routes logging (default: true)
    errors: true, // Exceptions logging (default: true)
    custom_probes: true, // Auto expose JS Loop Latency and HTTP req/s as custom metrics
    network: true, // Network monitoring at the application level
    ports: true // Shows which ports your app is listening on (default: false)
});

var morgan = require('morgan')
var http = require('http');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser')
var cors = require('cors');

var vols = require('./routes/vols');
var auth = require('./routes/auth');
var users = require('./routes/users');
var path = require('path');
var app = express();
var fileUpload = require('express-fileupload');



var searchData = [];

app.use(morgan('dev'));
app.use(cors());
app.use(fileUpload());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public/')));

app.use('/api', express.static(path.join(__dirname, 'static')))

app.use('/api/auth', auth);
app.use('/api/vols', vols);
app.use('/api/users', users);


app.get('/api/search', function(req, res) {
    console.log(req.query.search);
    if (req.query['search'] != undefined || req.query['search'] != null) {
        let query = (req.query.search).replace(/['"]+/g, '');

        db.get().query('SELECT vols.name from vols where vols.name LIKE ?; SELECT users.login, users.photo_url FROM users where users.login LIKE ?', ['%' + query + '%', '%' + query + '%'],
            function(error, results, fields) {
                if (error) {
                    res.send({ success: false, message: error })
                    console.log(error);
                } else {

                    if (results[0].length == 0 && results[1].length == 0) {
                        res.status(404);
                        res.send({ success: false, message: "No records found" })
                    } else {
                        searchData = results[0].concat(results[1]);
                        res.send({ success: true, message: searchData })

                    }
                }
            });
    } else {
        res.send({ success: false, message: 'Please provide a search query' })
    }

});



app.listen(process.env.PORT || 3000);
console.log("listening on 3000");