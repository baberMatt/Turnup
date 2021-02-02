const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  firstName: { type: String, required: false },
  password:  { type: String, required: true },
  lastName: { type: String, required: false },
  about: { type: String, required: false },
  email: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("Turnup User", userSchema);

module.exports = User;
