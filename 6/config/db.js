var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Welcome@123',
    database: 'bike'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Db connection success")
});

module.exports = connection;