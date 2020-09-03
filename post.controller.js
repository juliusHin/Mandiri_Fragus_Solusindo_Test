'use strict';

const Post = require('./post.model');


exports.findAll = (req, res) =>{
    Post.findAll( (err, post) =>{
        console.log('controller')
        if(err){
            res.send(err);
        }
        console.log('res', post);
        res.send(post)
    });
};

exports.create = (req, res) =>{
    const new_post = new Post(req.body);

    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Post.create(new_post, (err, post)=>{
            if(err){
                res.send(err);
            }
            res.json({
                error: false,
                message:"Post added!",
                data:post
            });
        });
    }
};


exports.findById = (req, res) =>{
    Post.findById(req.params.id, (err, post) =>{
        if(err){
            res.send(err);
        }
        res.json(post);
    });
};

exports.findUserByPostId = (req, res) =>{
    Post.findUserByPostId(req.params.id, (err, post) => {
        if(err){
            res.send(err);
        }
        res.json(post);
    })
}


exports.update = (req, res) => {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Post.update(req.params.id, new Post(req.body), (err, post) =>{
            if(err){
                res.send(err);
            }
            res.json({
                error:false,
                message:"Post successfully updated"
            });
        });
    };
};


exports.delete = (req, res) =>{
    Post.delete(req.params.id, (err, post) =>{
        if(err)
            res.send(err);
        
        res.json({
            error:false,
            message:"successfully deleted!"
        });
    });
};