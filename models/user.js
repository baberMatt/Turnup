const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: { type: String, required: true },
  firstName: { type: String, required: false },
  Password:  { type: String, required: true },
  lastName: { type: String, required: false },
  about: { type: String, required: false },
  email: { type: String, required: false },
  attending: [
    {
      event: {
        type: Schema.Types.ObjectId,
        ref: "Event"
      },
      dates: Array
    } 
  ],
  hosting: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event"
    }
  ],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
