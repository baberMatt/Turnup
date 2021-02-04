const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  Username: { type: String, required: true },
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  About: { type: String, required: true },
  Email: { type: String, required: true },
    synopsis: String,
  date: { type: Date, default: Date.now }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;