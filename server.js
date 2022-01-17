const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("./models/user")
var session = require("express-session")

// this is production


// Define middleware here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("static"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

passport.use(new LocalStrategy(
  function (username, password, done) {
    User.findOne({ Username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        console.log("user doesnt not exist")
        return done(null, false, { message: 'Incorrect username.' });
      };
      console.log(user.Password)
      if (user.Password != password) {
        console.log("password incorrect")
        return done(null, false, { message: 'Incorrect password.' });
      };
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
    if (err) { return next(err); }
    if (!user) { return res.json("incorrect username"); }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      return res.json(user);
    });
  })(req, res, next);
});


// Connect to the Mongo DB
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/turnup"
const MONGODB_URI = 'mongodb+srv://baber:Go09ob26!@baber.qpona.mongodb.net/turnup?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



