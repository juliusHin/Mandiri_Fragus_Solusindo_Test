'use strict';

var conn = require('./db.config');

// create object
let User = function (user) {
    this.id = user.id;
    this.name = user.name;
    this.username=user.username;
    this.email = user.email;
    this.password = user.password;
    this.created_at = user.created_at;
    this.updated_at = user.updated_at;
};

User.create = function (newUser, result){
    conn.query("INSERT INTO users set ?", newUser, (err, res) =>{
        if(err){
            console.log("error:  ", err);
            result(err, null);
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findById = (id, result) => {
    conn.query("SELECT * FROM users where id=? ", id, (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};

User.findAll = (result)=>{
    conn.query("SELECT * FROM users", (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('users: ',res);
            result(null, res);
        }
    });
};

User.update = (id, user, result)=>{
    conn.query("UPDATE users SET name=?, username=?, email=?, password=? WHERE id= ?", [user.name, user.username, user.email, user.password, id], (err, res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};


User.delete = (id, result) =>{
    conn.query("DELETE FROM users WHERE id=?", [id], (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

module.exports= User;