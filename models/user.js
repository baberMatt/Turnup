const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: { type: String, required: true },
  firstName: { type: String, required: false },
  Password:  { type: String, required: true },
  lastName: { type: String, required: false },
  about: { type: String, required: false },
  email: { type: String, required: false },
  islogged: { type: Boolean, required: false },
  attending: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event"
    },
  ],
  hosting: Array,
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("Turnup User", userSchema);

module.exports = User;
