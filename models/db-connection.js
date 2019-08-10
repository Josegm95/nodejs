const mysql = require('mysql');
const dbConf = require('./db-conf');

const myConnection = mysql.createConnection(dbConf);
myConnection.connect((err) => {
  if (err) {
    console.log(`mysql connection error: ${err.stack}`);
  } else {
    console.log('mysql connection succes');
  }
});

module.exports = myConnection;
