var mysql = require('mysql');
var pool = null;

/*
pool = mysql.createConnection({
    host: 'mysql-sa.mgmt.ua.pt',
    user: 'deca-vol-dbo',
    password: '437K9VFuuWmlVRVc',
    database: 'deca-vol',

});
*/

/*
pool = mysql.createPool({
    host: 'labmm.clients.ua.pt',
    user: 'deca_15L4_14_dbo',
    password: 'NWKD5Z',
    database: 'deca_15l4_14'
});


*/

pool = mysql.createConnection({
    host: 'localhost',
    port: '2063',
    user: 'tm25ztdr_volum',
    password: 'Volum123',
    database: 'tm25ztdr_volum',
});



exports.get = function() {
    return pool;
}