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
  , database: "user"
}); 

con.connect(function(err) {
  if (err) throw err ;  console.log("Connected!");
  //con.query("CREATE DATABASE user ", function (err, result) { if (err) throw err;  console.log("Database created"); });

//   var sql ="CREATE TABLE header (id INT UNSIGNED NOT NULL AUTO_INCREMENT ," +
//  " logo VARCHAR(255) NOT NULL , PRIMARY KEY (`id`) ) ";
//  con.query(sql, function (err, result) {  if (err) throw err ;   console.log("Table created"); });

//   var sql ="CREATE TABLE home (id INT UNSIGNED NOT NULL AUTO_INCREMENT ," +
//  " image VARCHAR(255) NOT NULL ,title VARCHAR(255) NOT NULL ,location VARCHAR(255)  ,date VARCHAR(255)  ,  PRIMARY KEY (`id`) ) ";
//  con.query(sql, function (err, result) {  if (err) throw err ;   console.log("Table created"); });

//   var sql ="CREATE TABLE about (id INT UNSIGNED NOT NULL AUTO_INCREMENT ," +
//  " title VARCHAR(255) NOT NULL ,description VARCHAR(255)  ,url VARCHAR(255)  ,  PRIMARY KEY (`id`) ) ";
//  con.query(sql, function (err, result) {  if (err) throw err ;   console.log("Table created"); });


// var sql ="CREATE TABLE schedule (id INT UNSIGNED NOT NULL AUTO_INCREMENT ," +
//  " title VARCHAR(255) NOT NULL ,date VARCHAR(255)  , VARCHAR(255)  ,  PRIMARY KEY (`id`) ) ";
//  con.query(sql, function (err, result) {  if (err) throw err ;   console.log("Table created"); });

});


























// SQL Server FORMAT output examples
// Below is a list of formats and an example of the output.  The date used for all of these examples is "2018-03-21 11:36:14.840".

// Query	Sample output
// SELECT FORMAT (getdate(), 'dd/MM/yyyy ') as date	21/03/2018
// SELECT FORMAT (getdate(), 'dd/MM/yyyy, hh:mm:ss ') as date	21/03/2018, 11:36:14
// SELECT FORMAT (getdate(), 'dddd, MMMM, yyyy') as date	Wednesday, March, 2018
// SELECT FORMAT (getdate(), 'MMM dd yyyy') as date	Mar 21 2018
// SELECT FORMAT (getdate(), 'MM.dd.yy') as date	03.21.18
// SELECT FORMAT (getdate(), 'MM-dd-yy') as date	03-21-18
// SELECT FORMAT (getdate(), 'hh:mm:ss tt') as date	11:36:14 AM
// SELECT FORMAT (getdate(), 'd','us') as date	03/21/2018
// As you can see, we used a lot of options for the date and time formatting, which are listed below.

// dd - this is day of month from 01-31
// dddd - this is the day spelled out
// MM - this is the month number from 01-12
// MMM - month name abbreviated
// MMMM - this is the month spelled out
// yy - this is the year with two digits
// yyyy - this is the year with four digits
// hh - this is the hour from 01-12
// HH - this is the hour from 00-23
// mm - this is the minute from 00-59
// ss - this is the second from 00-59
// tt - this shows either AM or PM
// d - this is day of month from 1-31 (if this is used on its own it will display the entire date)
// us - this shows the date using the US culture which is MM/DD/YYYY


//   var sql ="INSERT INTO student (firstName, LastName , grade ) VALUES ('Francesco', 'Lenahan' , '78')";
//   con.query(sql, function (err, result) {  if (err) throw err;   console.log("insert created");});, status  BOOLEAN 
