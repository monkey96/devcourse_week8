// mysql module
const mysql = require('mysql2');

// connec to DB
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Bookstore',
    dateStrings: true
});

module.exports = connection;