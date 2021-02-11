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
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
}