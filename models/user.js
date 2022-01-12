const mongoose = require("mongoose");
const Event = require("./event");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: { type: String, required: true, trim: true, unique: true },
  firstName: { type: String, default: "First &", required: false },
  Password:  { type: String, required: true, trim: true },
  lastName: { type: String, default: "Last Name", required: false },
  profilePicture: {
    imageName: { type: String, default: "none", required: false },
    imageDate: { type: String, required: false }
  },
  about: { type: String, default: "A little bit about you...", required: false },
  email: { type: String, required: false, trim: true, unique: true },
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

userSchema.pre('remove', function(next) {
  Event.update({attendees: {$elemMatch: { guest: this._id}}}, { $pull: { attendees: { guest: this._id } } }, { multi: true } )
  .then(res => (console.log("the response", res)))
  next(); 
});

const User = mongoose.model("User", userSchema);

module.exports = User;
