var mysql = require('mysql');
var pool = null;

pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'volum'
});


exports.get = function() {
    return pool;
}