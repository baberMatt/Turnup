const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: { type: String, required: true },
  FirstName: { type: String, required: false },
  Password:  { type: String, required: true },
  LastName: { type: String, required: false },
  About: { type: String, required: false },
  Email: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("Turnup User", userSchema);

module.exports = User;
