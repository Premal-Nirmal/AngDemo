const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/post'); // this is to include the Post.js file from backend/module.
const { Console } = require('console');

mongoose.connect("mongodb+srv://premal:80c5gScOSS5RD1Hw@cluster0.f7wyp.mongodb.net/node-angular_db?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{
  console.log('Connected to database!!!')
})
.catch(()=>{
  console.log('Connection to database FAILED!!!')
})

app.use(bodyParser.json()); // bodyParser is an part of express.js which helps in geting the front-end data.
//app.use(bodyParser.urlencoded({extended: false}));

app.use((_req,res,next) => {

  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Acccept'); // gives the access control for the page to send or receive data.
  res.setHeader('Access-Control-Allow-Methods',
  'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.post("/api/posts",(req,res,next) => {
  const post = new Post({ // the post is an mongoose.model which adds the data as per the schema from backend/model/post.js file

    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createPost =>{ // the save() function saves the data in the db
    res.status(201).json({
      message: 'post added successfully',
      postId: createPost._id
    });
  });
});

app.put("/api/posts/:id", (req,res,next)=> {
  const post = new Post({ // the post is an mongoose.model which adds the data as per the schema from backend/model/post.js file
    _id : req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id}, post ).then(result =>{
    //console.log(result);
    res.status(200).json({message: 'Post edited successfully'});
  });
});

app.get('/api/posts', (_req, res) =>{
  Post.find().then(documents => { // the find() function finds data from the db.

    res.status(200).json({
      message: "Posts fetched successfully!!!",
      posts: documents
    });
  });
});

app.get('/api/post/:id',(req,res,next)=>{
  Post.findById(req.params.id).then(post =>{
    if(post){
      res.status(200).json(post);
    } else {
      res.status(404).json({message: 'Post not found!!!'});
    }
   });
});

app.delete('/api/posts/:id',(req, res)=>{

  Post.deleteOne({_id: req.params.id}).then(result => { // the params stores all the request paramiters.
    console.log(result);

    res.status(200).json({
      message: "Posts Deleted successfully!!!",
       });
  });
});

module.exports = app;
