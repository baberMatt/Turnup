const db = require("../models");

module.exports =
//event
{

    findAll: function (req, res) {
        db.Event
            .find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Event
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOne: function (req, res){
        console.log(req.body)
        db.Event
        .findOne({ eventString: req.body.eventString })
        .populate({
            path: "attendees",
            populate: {
              path: 'guest',
              model: "User"
            }
        })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Event
            .findById(req.params.id)
            // .populate("hosting")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        console.log("event " + req.body)
        db.Event
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Event
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
}