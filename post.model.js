'use strict';

var conn = require('./db.config');

let Post = (post)=>{
    this.id = post.id;
    this.user_id = post.user_id;
    this.title = post.title;
    this.slug = post.slug;
    this.description = post.description;
};

Post.create = (newPost, result) =>{
    conn.query("INSERT INTO posts set ?", newPost, (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        
        }else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


Post.findById = (id, result) =>{
    conn.query("SELECT * FROM posts WHERE id = ?", id, (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    });
};


Post.findAll = (result) =>{
    conn.query("SELECT * FROM posts", (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            console.log('posts: ',res);
            result(null, res);
        }
    });
};

// get userId by post id
Post.findUserByPostId = (user_id, result) =>{
    conn.query("SELECT posts.title, posts.slug, posts.description, posts.user_id FROM posts LEFT JOIN users ON posts.user_id = ? UNION SELECT posts.title, posts.slug, posts.description, posts.user_id FROM posts RIGHT JOIN users ON posts.user_id = ? ", [user_id, user_id], (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
        }else{
            result(null, res);
        }
    })
}


Post.update = (id, post, result) =>{
    conn.query("UPDATE posts SET title=?, slug=?, description=? WHERE id=?", [post.title, post.slug, post.description, id], (err, res) => {
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
};

Post.delete = (id, result) =>{
    conn.query("DELETE FROM posts WHERE id=?", [id], (err, res) =>{
        if(err){
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
};

module.exports = Post;