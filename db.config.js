'use strict';
const mysql = require('mysql');
//local mysql db connection

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'mfs_test'
  })
  
  conn.connect(error => {
    if(error)
      throw error;
    
    console.log('Mysql Connected');
  })

  module.exports=conn;