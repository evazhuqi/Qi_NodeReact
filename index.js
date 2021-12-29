const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport'); //tell passport to make use of cookie
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');
mongoose.connect(keys.mongoURI);
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());



require('./routes/authRoutes')(app);


//app.get('/',(req, res) => {
//  res.send({ bye: 'buddy' });
//});




const PORT = process.env.PORT || 5000;
app.listen(PORT);

//underlysing express server - app
//by calling app.get  to create a handler
//the request wants to  get/post/put/delete/patch
//req object representing the incoming request
//res object representing the outgoing response
//res.send immediately send some JSON back to who ever made this request
