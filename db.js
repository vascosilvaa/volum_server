var mysql = require('mysql');
var pool = null;

pool = mysql.createPool({
    host: 'labmm.clients.ua.pt',
    user: 'deca_15L4_14_dbo',
    password: 'NWKD5Z',
    database: 'deca_15l4_14'
});

exports.get = function() {
    return pool;
}