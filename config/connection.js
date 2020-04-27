const mysql = require('mysql2');

let connection;

// production connection - variable that only exist in production 
if( process.env.JAWSDB.URL){
connection = mysql.createConnection(process.env.JAWSDB_URL).promise();
} 
// local host conenction
else {
  connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todos_db',
}).promise();
}
module.exports = connection;
