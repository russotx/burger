const mysql = require('mysql');

const burgerDB = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'burgers_db'
});

module.exports = burgerDB;

