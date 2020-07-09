const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Post = require('./models/post');

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
  console.log(post);
  res.status(201).json({
    message: 'post added successfully'
  });
});

app.use('/api/posts', (_req, res) =>{
  const posts = [
    {
      id: "fadf12421l",
      title:"First server side Post.",
      content: "This is comming from server.",
    },
    {
      id: "ohv123eijew43",
      title:"Second server side Post.",
      content: "This is comming from server!",
    }
  ];

  res.status(200).json({
    message: "Posts fetched successfully!!!",
    posts: posts
  });
});

module.exports = app;
