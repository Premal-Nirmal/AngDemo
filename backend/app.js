const express = require('express');

const app = express();

app.use((req,res,next) => {

  res.setHeader('Access-Control-Allow-Origin',"*");
  res.setHeader('Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Acccept'
  );
  next();
});

app.use('/api/posts', (req, res) =>{
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
