let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/turnup", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let userSeed = [
  {
    Username: "baberMatt",
    firstName: "Matt",
    Password: "asdf",
    lastName: "Baber",
    about: "Hi there, I'm new to Turnup. I dont run any of my own pop ups (just yet) but I worked as a cook for a long time, and have help many friends put on their own pops including pizza, ramen and burritos. I'm excited to join the community and attend as many pop ups as I can!",
    email: "mbaber1142@gmail.com",
    islogged: false,
    attending: [],
    hosting: [],
  },
  {
    Username: "kutsarb",
    firstName: "Brian",
    Password: "asdf",
    lastName: "Kutsar",
    about: "Hey there, I am new to Turnup, can't cant wait to check out some pop ups!",
    email: "kutsarb@gmail.com",
    islogged: false,
    attending: [],
    hosting: [],
  },
  {
    Username: "sgrant177",
    firstName: "Sean",
    Password: "asdf",
    lastName: "Grant",
    about: "Hey there, I am new to Turnup, can't cant wait to check out some pop ups!",
    email: "sgrant177@gmail.com",
    islogged: false,
    attending: [],
    hosting: [],
  },
  {
    Username: "mikeowen87",
    firstName: "Mike",
    Password: "asdf",
    lastName: "Owen",
    about: "Hey there, I am new to Turnup, can't cant wait to check out some pop ups!",
    email: "mikeowen87@gmail.com",
    islogged: false,
    attending: [],
    hosting: [],
  },
  {
    Username: "dobRich",
    firstName: "Rich",
    Password: "asdf",
    lastName: "Dobrzeniecki",
    about: "Hey there, I am new to Turnup, can't cant wait to check out some pop ups!",
    email: "dobRich@gmail.com",
    islogged: false,
    attending: [],
    hosting: [],
  },
  {
    Username: "bluLogan",
    firstName: "Logan",
    Password: "asdf",
    lastName: "Blueter",
    about: "Hey there, I am new to Turnup, can't cant wait to check out some pop ups!",
    email: "bluLogan@gmail.com",
    islogged: false,
    attending: [],
    hosting: [],
  },
  {
    Username: "mooJonathon",
    firstName: "Jonathon",
    Password: "asdf",
    lastName: "Moore",
    about: "Hey there, I am new to Turnup, can't cant wait to check out some pop ups!",
    email: "mooJonathon@gmail.com",
    islogged: false,
    attending: [],
    hosting: [],
  }
  
  
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
