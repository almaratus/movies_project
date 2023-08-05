// var Pool = require('pg').Pool;
// var pool = new Pool({
//   user: 'root',
//   host: 'localhost',
//   database: 'movies',
//   password: '',
//   port: 3306,
// });

// module.exports = pool;

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: 'movies',
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
