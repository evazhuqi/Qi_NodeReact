const express = require('express');
const app = express();

app.get('/',(req, res) => {
  res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);

//underlysing express server - app
//by calling app.get  to create a handler
//the request wants to  get/post/put/delete/patch
//req object representing the incoming request
//res object representing the outgoing response
//res.send immediately send some JSON back to who ever made this request
