var mysql = require('mysql');

var connection = mysql.createPool({

  host:'localhost',
  user:'root',
  password:'',
  database:'demo',
  port: 3308

});

module.exports = connection;
