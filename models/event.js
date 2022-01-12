const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: { type: String, required: true, trim: true, unique: true },
  eventString: { type: String, required: true},
  hosts: { type: Schema.Types.ObjectId, ref: "User"},
  attendees: [                      
    {
      guest: {
        type: Schema.Types.ObjectId,
        ref: "User"
      },
      dates: Array
    }    
  ],
  briefDetails: { type: String, required: true },
  details: { type: String, required: true },
  images: {
    banner: { type: String ,default: "none", required: false },
    thumb: { type: String ,default: "none", required: false }
  },
  eventType: { type: String, required: true },
  category: {
    first: { type: String, required: true },
    second: { type: String, required: false },
    third: { type: String, required: false }
  },
  menu: Array,
  datesOpen: Array,
  location: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

eventSchema.pre('remove', function(next) {
  mongoose.model("User").updateMany({ attending: { $elemMatch: { event: this._id }}}, { $pull: { attending: { event: this._id } } }, { multi: true })
  .then(res => (console.log("the response", res)));
  next(); 
  
});

eventSchema.pre('remove', function(next) {
  mongoose.model("User").updateOne({ hosting: this._id }, { $pull: { hosting: this._id } })
  .then(res => (console.log("the response", res)));
  next(); 
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;