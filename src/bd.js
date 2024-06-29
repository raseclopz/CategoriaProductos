const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'thinkpad2044',
    database: 'CategoriaProductosDB'
});

module.exports = pool.promise();
