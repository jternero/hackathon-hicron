const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'main',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}).promise();

module.exports = pool;