const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Post = require('./models/post');

mongoose.connect("mongodb+srv://premal:80c5gScOSS5RD1Hw@cluster0.f7wyp.mongodb.net/node-angular_db?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true })
.then(()=>{
  console.log('Connected to database!!!')
})
.catch(()=>{
  console.log('Connection to database FAILED!!!')
})

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

app.use((_req,res,next) => {

  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Acccept');


  res.setHeader('Access-Control-Allow-Methods',
  'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post("/api/posts",(req,res,next) => {
  const post = new Post({

    title: req.body.title,
    content: req.body.content
  });
  post.save();

  console.log(post);
  res.status(201).json({
    message: 'post added successfully'
  });
});

app.get('/api/posts', (_req, res) =>{
  Post.find();

  res.status(200).json({
    message: "Posts fetched successfully!!!",
    posts: posts
  });
});

module.exports = app;
