const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 const port = 6600 ; 
 var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password:"root" 
   password: "1234" 
//  , database: "todo"
}); 

con.connect(function(err) {
  if (err) throw err ;  console.log("Connected!");
  // con.query("CREATE DATABASE todo", function (err, result) { if (err) throw err;  console.log("Database created"); });

//   var sql ="CREATE TABLE data (id INT UNSIGNED NOT NULL AUTO_INCREMENT ," +
//  " input VARCHAR(255) NOT NULL , status  BOOLEAN , PRIMARY KEY (`id`) ) ";
// con.query(sql, function (err, result) {  if (err) throw err ;   console.log("Table created"); });

//   var sql ="INSERT INTO student (firstName, LastName , grade ) VALUES ('Francesco', 'Lenahan' , '78')";
//   con.query(sql, function (err, result) {  if (err) throw err;   console.log("insert created");});
});