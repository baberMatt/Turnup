const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("./models/user")
var session = require("express-session")


// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

passport.use(new LocalStrategy(
  function (username, password, done) {
    console.log(username, password)
    User.findOne({ Username: username }, function (err, user) {
      if (err) { return done(err); }
      console.log(user)
      if (!user) {
        console.log("user doesnt not exist")
        return done(null, false, { message: 'Incorrect username.' });
      }
      console.log(user.Password)
      if (user.Password != password) {
        console.log("password incorrect")
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    console.log("in route", user)
    if (err) { return next(err); }
    if (!user) { return res.json("incorrect username"); }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      return res.json(user);
    });
  })(req, res, next);
});

// app.post('/login',
//   passport.authenticate('local', {
//     successRedirect: '/event',
//     failureRedirect: '/user',
//     failureFlash: true
//   })
// );

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/turnup",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



